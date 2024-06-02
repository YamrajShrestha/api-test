const http = require("http");
const app = require("./src/config/express.config");
const server = http.createServer(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
