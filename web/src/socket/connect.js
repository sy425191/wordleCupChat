import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const Socket = io("http://localhost:3005");
const SocketProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    console.log(Socket)
    if (userName === "") {
      const name = localStorage.getItem("userName");
      if (name) {
        setUserName(name);
      }
    } else {
      localStorage.setItem("userName", userName);
    }

    Socket.emit("new_user", userName);

    Socket.on("total_users", (user) => {
      setTotalUsers(user);
    });
  }, [userName]);

  return (
    <SocketContext.Provider
      value={{ userName, setUserName, totalUsers, setTotalUsers }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider, Socket };
