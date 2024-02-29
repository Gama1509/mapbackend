import app from "./app";
//import {PrismaClient} from "@prisma/client";

//const prisma = new PrismaClient();

/*async function conn() {
  try {
    prisma.$connect();
    console.log("Connected to the database");
  } catch (error) {
    throw new Error(
      "An error ocurred while trying to connect to the database " + error
    );
  }
}*/

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
