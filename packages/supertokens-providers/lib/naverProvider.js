"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Naver = void 0;
var axios_1 = __importDefault(require("axios"));
/**
 * It returns an object that contains the functions that are required to use the Naver API
 * @param {TypeThirdPartyProviderNaverConfig}  - `clientId`: The client ID you received from Naver API when you registered,
 * `clientSecret`: The client secret you received from Naver API when you registered your application
 * `redirectUrl`: The URL to redirect to after the user has logged in.
 * `relativeRediectUrl`: The relative URL to redirect to after the user has logged in.
 * @returns Returns the `ThirdPartyEmailPassword.TypeProvider`.
 */
var Naver = function (_a) {
    var clientId = _a.clientId, clientSecret = _a.clientSecret, redirectUrl = _a.redirectUrl, relativeRedirectUrl = _a.relativeRedirectUrl;
    return {
        id: "naver",
        get: function (redirectURI, authCodeFromRequest, userContext) {
            var refererUrl = userContext._default.request.request.get("Referer");
            var unionRedirectUrl = relativeRedirectUrl ? new URL(relativeRedirectUrl, refererUrl).href : "";
            return {
                accessTokenAPI: {
                    // https://developers.naver.com/docs/login/devguide/devguide.md#3-4-4-%EC%A0%91%EA%B7%BC-%ED%86%A0%ED%81%B0-%EB%B0%9C%EA%B8%89-%EC%9A%94%EC%B2%AD
                    url: "https://nid.naver.com/oauth2.0/token",
                    params: {
                        client_id: clientId,
                        client_secret: clientSecret,
                        redirect_uri: redirectURI || redirectUrl || "".concat(unionRedirectUrl) || "",
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
                        redirect_uri: redirectURI || redirectUrl || "".concat(unionRedirectUrl) || "",
                        response_type: "code",
                        state: "STATE_STRING",
                    },
                },
                getClientId: function () {
                    return clientId;
                },
                getProfileInfo: function (accessTokenAPIResponse) { return __awaiter(void 0, void 0, void 0, function () {
                    var access_token, result, _a, id, email;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                access_token = accessTokenAPIResponse.access_token;
                                if (!access_token)
                                    throw new Error("Failed get AccessToken");
                                return [4 /*yield*/, axios_1.default.get("https://openapi.naver.com/v1/nid/me", {
                                        headers: {
                                            authorization: "Bearer ".concat(access_token),
                                        },
                                    })];
                            case 1:
                                result = _b.sent();
                                _a = result.data.response, id = _a.id, email = _a.email;
                                if (!email)
                                    throw new Error("Not provided email");
                                return [2 /*return*/, {
                                        id: "".concat(id),
                                        email: {
                                            id: email,
                                            isVerified: true,
                                        },
                                    }];
                        }
                    });
                }); },
            };
        },
    };
};
exports.Naver = Naver;
//# sourceMappingURL=naverProvider.js.map