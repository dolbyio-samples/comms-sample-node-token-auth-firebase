import { https } from "firebase-functions";
import { communications } from "@dolbyio/dolbyio-rest-apis-client";

// Enter your App Key and Secret from the dolby.io dashboard
const APP_KEY = "APP_KEY";
const APP_SECRET = "APP_SECRET";

export const getAccessToken = https.onCall((_data, _context) => {
  return communications.authentication.getClientAccessToken(
    APP_KEY,
    APP_SECRET
  );
});
