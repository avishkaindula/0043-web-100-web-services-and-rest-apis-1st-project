const express = require("express");

const app = express();

app.get("/quote", function (req, res, next) {
  // res.render();
  // Before, we used res.render() and sent a ejs template or a html file as the response.
  // But now, we're sending json data as the response instead of a html file.
  res.json({
    quote:
      "As you dive deeper into Web Development, Web Development will dive deeper into you!",
  });
  // We used this before in the course, for all our routes that were triggered with
  // Ajax requests. Which means, we already built our own first API there.
  // Those Ajax requests also didn't want HTML files, instead they wanted JSON data.

  // app.get("/quote"); is the "endpoint" (HTTP method-Path combination.) of the REST API
  // now when we run node app.js and type localhost:3000/quote in the browser address bar,
  // it will give us the quote as the response.
});
// We can create routes directly inside app.js by using app.get() or app.post() instead
// of router.get() and router.post() in a different routes file.

app.listen(3000);
