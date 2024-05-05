// Importing necessary modules
import express from "express"; // Importing Express.js framework
import http from "http"; // Importing Node.js HTTP module
import bodyParser from "body-parser"; // Middleware for parsing request bodies
import cookieParser from "cookie-parser"; // Middleware for parsing cookies
import compression from "compression"; // Middleware for response compression
import cors from "cors"; // Middleware for enabling CORS
import mongoose from "mongoose";
import router from "./router";

// Creating an Express application instance
const app = express();

// Adding middleware for enabling CORS with credentials support
app.use(
  cors({
    credentials: true,
  })
);

// Adding middleware for response compression
app.use(compression());

// Adding middleware for parsing cookies
app.use(cookieParser());

// Adding middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Creating an HTTP server using Express application
const server = http.createServer(app);

// Defining the port number for the server to listen on
const PORT = 8080;

// Starting the server and listening on the specified port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const MONGO_URL =
  "mongodb+srv://muhamedadelfahmy99:K6ckUEOKofP4YcUE@cluster0.wwrouaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
