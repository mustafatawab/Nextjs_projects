const functions = require("firebase-functions");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextjsApp = next({ dev, conf: { distDir: ".next" } });
const handle = nextjsApp.getRequestHandler();

exports.nextjsFunc = functions.https.onRequest((req, res) => {
  return nextjsApp.prepare().then(() => handle(req, res));
});
