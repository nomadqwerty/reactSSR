import express from "express";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import path from "path";

import { App } from "./src/App";

const app = express();

app.use(express.static("./build", { index: false }));

const articles = [
  { title: "article1", author: "mrA" },
  { title: "article2", author: "mrB" },
  { title: "article3", author: "mrC" },
  { title: "article4", author: "mrE" },
];

app.get("/api/articles", (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      articles,
    },
  });
});

app.use("*", (req, res) => {
  const sheet = new ServerStyleSheet();
  console.log("here");
  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  const templateFile = path.resolve("./build/index.html");

  fs.readFile(templateFile, "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("error");
    }

    return res.send(
      data
        .replace("<div id='root'></div>", `<div id='root'>${reactApp}</div>`)
        .replace(
          '<script class="list"></script>',
          `<script class="list">
        window.preloaded = ${JSON.stringify(articles)};
      </script>`
        )
        .replace("{{styles}}", sheet.getStyleTags)
    );
  });
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
