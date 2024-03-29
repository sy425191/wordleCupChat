import dotenv from "dotenv";
import { Server } from "socket.io";
import { app } from "./app.js";
import http from "http";
import { useAzureSocketIO } from "@azure/web-pubsub-socket.io";
dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const connectionString =
  process.env.WEBPUBSUB_SECRET ||
  "https://wordle-chat.webpubsub.azure.com;AccessKey=ZgvE7W7KoF1+C6ryZ1o/CbzkIHLaxZTeXsNluRy06sQ=;Version=1.0;";

useAzureSocketIO(io, {
  hub: "WordleHub",
  connectionString: connectionString,
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("new_user", (username) => {
    console.log("User joined", username);
    io.emit("total_users", io.engine.clientsCount);
    socket.username = username;
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    console.log("Total users", io.engine.clientsCount);
    io.emit("total_users", io.engine.clientsCount);
  });

  socket.on("chat_message", (message) => {
    io.emit("chat_message", message);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
