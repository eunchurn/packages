import { TypeProvider } from "supertokens-node/recipe/thirdpartyemailpassword";
import axios from "axios";

export interface NaverAccessTokenResponse {
  access_token: string;
  token_type: string | "bearer";
  refresh_token: string;
  expires_in: number;
  scope: string | "account_email";
  refresh_token_expires_in: number;
}

export interface NaverAuthorizedResponse {
  /**
   * API 호출 결과 코드
   */
  resultCode: string;
  /**
   * 호출 결과 메시지
   */
  meesage: string;
  response: {
    /**
     * 동일인 식별 정보
     * 동일인 식별 정보는 네이버 아이디마다 고유하게 발급되는 값입니다.
     */
    id: string;
    /**
     * 사용자 별명
     */
    nickname: string;
    /**
     * 사용자 이름
     */
    name: string;
    /**
     * 	사용자 메일 주소
     */
    email: string;
    /**
     * 성별
     *- F: 여성
     *- M: 남성
     *- U: 확인불가
     */
    gender: string;
    /**
     * 사용자 연령대
     */
    age: string;
    /**
     * 사용자 생일(MM-DD 형식)
     */
    birthday: string;
    /**
     * 사용자 프로필 사진 URL
     */
    profile_image: string;
    /**
     * 출생연도
     */
    birthyear: string;
    /**
     * 휴대전화번호
     */
    mobile: string;
  };
}

declare type TypeThirdPartyProviderNaverConfig = {
  /**
   * The client ID you received from Naver API when you registered.
   */
  clientId: string;
  /**
   * The client secret you received from Naver API when you registered your application.
   */
  clientSecret: string;
  /**
   * The URL to redirect to after the user has logged in.
   */
  redirectUrl?: string;
  /**
   * The relative URL to redirect to after the user has logged in.
   */
  relativeRedirectUrl?: string;
};

/**
 * It returns an object that contains the functions that are required to use the Naver API
 * @param {TypeThirdPartyProviderNaverConfig}  - `clientId`: The client ID you received from Naver API when you registered,
 * `clientSecret`: The client secret you received from Naver API when you registered your application
 * `redirectUrl`: The URL to redirect to after the user has logged in.
 * `relativeRediectUrl`: The relative URL to redirect to after the user has logged in.
 * @returns Returns the `ThirdPartyEmailPassword.TypeProvider`.
 */
export const Naver = ({
  clientId,
  clientSecret,
  redirectUrl,
  relativeRedirectUrl,
}: TypeThirdPartyProviderNaverConfig): TypeProvider => {
  return {
    id: "naver",
    get: (redirectURI, authCodeFromRequest, userContext) => {
      const refererUrl = userContext._default.request.request.get("Referer");
      const unionRedirectUrl = relativeRedirectUrl ? new URL(relativeRedirectUrl, refererUrl).href : "";
      return {
        accessTokenAPI: {
          // https://developers.naver.com/docs/login/devguide/devguide.md#3-4-4-%EC%A0%91%EA%B7%BC-%ED%86%A0%ED%81%B0-%EB%B0%9C%EA%B8%89-%EC%9A%94%EC%B2%AD
          url: "https://nid.naver.com/oauth2.0/token",
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectURI || redirectUrl || `${unionRedirectUrl}` || "",
            response_type: "code",
            grant_type: "authorization_code",
            code: authCodeFromRequest || "",
            state: "STATE_STRING",
          },
        },
        authorisationRedirect: {
          // https://developers.naver.com/docs/login/devguide/devguide.md#3-4-2-%EB%84%A4%EC%9D%B4%EB%B2%84-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%97%B0%EB%8F%99-url-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
          url: "https://nid.naver.com/oauth2.0/authorize",
          params: {
            client_id: clientId,
            redirect_uri: redirectURI || redirectUrl || `${unionRedirectUrl}` || "",
            response_type: "code",
            state: "STATE_STRING",
          },
        },
        getClientId: () => {
          return clientId;
        },
        getProfileInfo: async (accessTokenAPIResponse: NaverAccessTokenResponse) => {
          // https://developers.naver.com/docs/login/devguide/devguide.md#3-4-5-%EC%A0%91%EA%B7%BC-%ED%86%A0%ED%81%B0%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%ED%94%84%EB%A1%9C%ED%95%84-api-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0
          const { access_token } = accessTokenAPIResponse;
          if (!access_token) throw new Error("Failed get AccessToken");
          const result = await axios.get<NaverAuthorizedResponse>("https://openapi.naver.com/v1/nid/me", {
            headers: {
              authorization: `Bearer ${access_token}`,
            },
          });
          const {
            data: {
              response: { id, email },
            },
          } = result;
          if (!email) throw new Error("Not provided email");
          return {
            id: `${id}`,
            email: {
              id: email,
              isVerified: true,
            },
          };
        },
      };
    },
  };
};
