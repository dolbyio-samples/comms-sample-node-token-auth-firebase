import { https } from "firebase-functions";
import { authentication, communications } from "@dolbyio/dolbyio-rest-apis-client";

// Enter your App Key and Secret from the dolby.io dashboard
const APP_KEY = "APP_KEY";
const APP_SECRET = "APP_SECRET";

export const getAccessToken = https.onCall(async (_data, _context) => {
  const apiToken = await authentication.getApiAccessToken(
    APP_KEY,
    APP_SECRET,
    600,
    ['comms:client_access_token:create']
  );

  return communications.authentication.getClientAccessTokenV2({
    accessToken: apiToken,
    sessionScope: ['*']
  });
});
