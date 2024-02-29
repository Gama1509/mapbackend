import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes";

const app = express();

const origins = ["http://localhost:5173"];

app.use(
  cors({
    origin(requestOrigin, callback) {
      if (origins.includes(requestOrigin as string)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", authRoutes);

export default app;
