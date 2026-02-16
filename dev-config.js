module.exports = {
  server: {
    baseDir: "./",
    middleware: [
      function (req, res, next) {
        // Prevent caching for all requests
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
        res.setHeader("Surrogate-Control", "no-store");
        next();
      }
    ]
  },
  files: [
    "**/*.html",
    "**/*.css",
    "**/*.js"
  ],
  port: 3009,
  open: true,
  notify: false,
  ui: false,
  ghostMode: false,
  cors: true,
  reloadDelay: 300
};
