const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("public"));
app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <link rel="icon" href="/favicon.ico" />
    <title>Nicholas' Node App</title>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: 25px;
        text-align: center;
      }
      body {
        background: #1A1A1E;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: white;
      }

      .App-logo {
        height: 50vmin;
        pointer-events: none;
      }

      @media (prefers-reduced-motion: no-preference) {
        .App-logo {
          animation: App-logo-spin infinite 5s;
        }
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
    </style>
  </head>
  <body>
    <section>
      <h1>COMP229406-Nicholas-Node-App</h1>
      <img src="/logo.png" class="App-logo" alt="logo" />
      <h3>Simple Node App deployed to Render.</h3>
      <p>Nicholas Bonneville - 301194178</p>
    </section>
  </body>
</html>
`