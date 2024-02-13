import dotenv from "dotenv";
import { Server } from "socket.io";
import { app } from "./app.js";
import http from "http";
dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    serveClient: false,
    transports: ['websocket'],
    secure: true,
  },
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
