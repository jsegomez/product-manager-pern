import app, { connectDatabase } from "./server";

const port = process.env.PORT || 3000;

async function startServer() {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();