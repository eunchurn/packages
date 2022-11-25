import { TypeProvider } from "supertokens-node/recipe/thirdpartyemailpassword";
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
export declare const Naver: ({ clientId, clientSecret, redirectUrl, relativeRedirectUrl, }: TypeThirdPartyProviderNaverConfig) => TypeProvider;
export {};
//# sourceMappingURL=naverProvider.d.ts.map