import * as functions from "firebase-functions";
import * as http from "http";
import * as https from "https";

// Enter your Consumer Key and Secret from the dolby.io dashboard
const CONSUMER_KEY = "CONSUMER_KEY";
const CONSUMER_SECRET = "CONSUMER_SECRET";

/**
 * Sends a POST request
 * @param {string} hostname
 * @param {string} path
 * @param {OutgoingHttpHeaders} headers
 * @param {string} body
 * @return {Promise<any>} A JSON payload object through a Promise.
 */
const postAsync = (hostname: string, path: string, headers: http.OutgoingHttpHeaders, body: string): Promise<any> => {
  return new Promise(function(resolve, reject) {
    const options: https.RequestOptions = {
      hostname: hostname,
      port: 443,
      path: path,
      method: "POST",
      headers: headers,
    };

    const req = https.request(options, (res) => {
      functions.logger.debug(`[POST] ${res.statusCode} - https://${hostname}${path}`);

      let data = "";
      res.on("data", (chunk) => {
        data = data + chunk.toString();
      });

      res.on("end", () => {
        const json = JSON.parse(data);
        resolve(json);
      });
    });

    req.on("error", (error) => {
      functions.logger.error(error);
      reject(error);
    });

    req.write(body);
    req.end();
  });
};

/**
 * Gets a JWT token for authorization.
 * @param {string} hostname
 * @param {string} path
 * @return {Promise<any>} a JWT token.
 */
const getAccessTokenAsync = (hostname: string, path: string): Promise<any> => {
  const body = "grant_type=client_credentials";

  const authz = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache",
    "Authorization": "Basic " + authz,
    "Content-Length": body.length,
  };

  return postAsync(hostname, path, headers, body);
};

export const getAccessToken = functions.https.onCall((_data, _context) => {
  // See: https://dolby.io/developers/interactivity-apis/reference/rest-apis/authentication#operation/postOAuthToken
  return getAccessTokenAsync("session.voxeet.com", "/v1/oauth2/token");
});
