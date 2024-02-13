import { ChatRoomProvider } from "./context/ChatContext.js";
import ChatRoom from "./pages/chatRoom.js";
import LandingPage from "./pages/Landing.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SocketProvider } from "./socket/connect.js";

function App() {
  return (
    <div className="App overflow-hidden scroll-smooth">
      <ChatRoomProvider>
        <SocketProvider>
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/chat" element={<ChatRoom />} />
            </Routes>
          </BrowserRouter>
        </SocketProvider>
      </ChatRoomProvider>
    </div>
  );
}

export default App;
