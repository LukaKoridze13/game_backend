import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

app.use(cors());

const server = http.createServer(app);
const PORT = 3001 || process.env.PORT;
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on('connection',()=>{
  console.log("User Connected")
})
server.listen(PORT, () => {
  console.log("listening on *:3000");
});
