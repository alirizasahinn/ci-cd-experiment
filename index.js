const express = require("express");

async function startServer() {
  const app = express();

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

(async () => {
  try {
    await startServer();

    console.log("Server started successfully");
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    console.log("process.env.EXAMPLE", process.env.EXAMPLE);
  } catch (error) {
    console.error(error.message);
  }
})();
