import { TypeProvider } from "supertokens-node/recipe/thirdpartyemailpassword";
import axios from "axios";

export interface KakaoAccessTokenResponse {
  /**
   * 사용자 액세스 토큰 값
   */
  access_token: string;
  /**
   * 토큰 타입, bearer로 고정
   */
  token_type: string | "bearer";
  /**
   * 사용자 리프레시 토큰 값
   */
  refresh_token: string;
  /**
   * 액세스 토큰과 ID 토큰의 만료 시간(초)
   * 참고: 액세스 토큰과 ID 토큰의 만료 시간은 동일
   */
  expires_in: number;
  /**
   * 추가 항목 동의 받기 요청 시 사용
   * 사용자에게 동의 요청할 동의 항목 ID 목록
   * 동의 항목의 ID는 사용자 정보 또는 [내 애플리케이션] > [카카오 로그인] > [동의 항목]에서 확인 가능
   * 쉼표(,)로 구분해 여러 개 전달 가능
   * 주의: OpenID Connect를 사용하는 앱의 경우, scope 파라미터 값에 openid를 반드시 포함해야 함, 미포함 시 ID 토큰이 재발급되지 않음
   * https://developers.kakao.com/docs/latest/ko/kakaologin/common#additional-consent-scope
   * SuperTokens의 경우 이메일은 꼭 필요하므로 디폴트 `account_email`
   */
  scope: string | "account_email";
  /**
   * 리프레시 토큰 만료 시간(초)
   */
  refresh_token_expires_in: number;
}

export interface KakaoAuthorizedResponse {
  /**
   * 회원번호
   */
  id: number;
  /**
   * 자동 연결 설정을 비활성화한 경우만 존재
   * 연결하기 호출의 완료 여부
   * `false`: 연결 대기(Preregistered) 상태
   * `true`: 연결(Registered) 상태
   */
  has_signed_up?: boolean;
  /**
   * 	서비스에 연결 완료된 시각, UTC
   */
  connected_at: string;
  /**
   * 카카오싱크 간편가입을 통해 로그인한 시각, UTC
   */
  synched_at?: string;
  /**
   * 사용자 프로퍼티(Property)
   * https://developers.kakao.com/docs/latest/ko/kakaologin/prerequisite#user-properties
   */
  properties?: any;
  /**
   * 카카오계정 정보
   * https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#kakaoaccount
   */
  kakao_account?: {
    has_email?: boolean;
    email_needs_agreement?: boolean;
    is_email_valid?: boolean;
    is_email_verified?: boolean;
    email?: string;
  };
}

declare type TypeThirdPartyProviderKakaoConfig = {
  /**
   * The client ID you received from Kakao API when you registered. 앱 REST API 키 [내 애플리케이션] > [앱 키]에서 확인 가능
   */
  clientId: string;
  /**
   * The client secret you received from Kakao API when you registered your application.
   */
  clientSecret?: string;
  /**
   * The URL to redirect to after the user has logged in. 인가 코드를 전달받을 서비스 서버의 URI [내 애플리케이션] > [카카오 로그인] > [Redirect URI]에서 등록
   */
  redirectUrl?: string;
  /**
   * The relative URL to redirect to after the user has logged in.
   */
  relativeRedirectUrl?: string;
};

/**
 * It returns an object that contains the functions that are required to use the Kakao API and get the access token and the
 * user profile information from the Kakao API
 * @param {TypeThirdPartyProviderKakaoConfig}  - `clientId`: The client ID you received from Kakao API when you registered,
 * `clientSecret`: The client secret you received from Kakao API when you registered your application
 * `redirectUrl`: The URL to redirect to after the user has logged in.
 * `relativeRediectUrl`: The relative URL to redirect to after the user has logged in.
 * @returns Returns the `ThirdPartyEmailPassword.TypeProvider`.
 */
export const Kakao = ({
  clientId,
  clientSecret,
  redirectUrl,
  relativeRedirectUrl,
}: TypeThirdPartyProviderKakaoConfig): TypeProvider => ({
  id: "kakao",
  get: (redirectURI, authCodeFromRequest, userContext) => {
    /**
     * redirectURI가 undefined로 오는 경우가 있으며, 고정된 클라이언트 주소를 지정 사용하면, 1개의 클라이언트만 사용할 수 있으므로, Referrer URL를 Request에서 받아서 사용함
     */
    const refererUrl = userContext._default.request.request.get("Referer");
    const unionRedirectUrl = relativeRedirectUrl ? new URL(relativeRedirectUrl, refererUrl).href : "";
    const secret = clientSecret ? { client_secret: clientSecret } : undefined;
    return {
      accessTokenAPI: {
        // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token
        url: "https://kauth.kakao.com/oauth/token",
        params: {
          client_id: clientId,
          redirect_uri: redirectURI || redirectUrl || `${unionRedirectUrl}` || "",
          response_type: "code",
          grant_type: "authorization_code",
          code: authCodeFromRequest || "",
          ...secret,
        },
      },
      authorisationRedirect: {
        // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-code
        url: "https://kauth.kakao.com/oauth/authorize",
        params: {
          client_id: clientId,
          redirect_uri: redirectURI || redirectUrl || `${unionRedirectUrl}` || "",
          scope: "account_email",
          response_type: "code",
        },
      },
      getClientId: () => {
        return clientId;
      },
      getProfileInfo: async (accessTokenAPIResponse: KakaoAccessTokenResponse) => {
        const { access_token } = accessTokenAPIResponse;
        if (!access_token) throw new Error("Failed get AccessToken");
        const result = await axios.get<KakaoAuthorizedResponse>("https://kapi.kakao.com/v2/user/me", {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        });
        const {
          data: { id, kakao_account },
        } = result;
        if (!kakao_account) throw new Error("No Kakao account");
        const { has_email, email, is_email_verified } = kakao_account;
        if (!has_email) throw new Error("No email in this account");
        if (!email) throw new Error("Not provided email");
        return {
          id: `${id}`,
          email: {
            id: email,
            isVerified: !!is_email_verified,
          },
        };
      },
    };
  },
});
