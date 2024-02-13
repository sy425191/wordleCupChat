import { ChatRoomProvider } from "./context/ChatContext.js";
import ChatRoom from "./pages/chatRoom.js";
import LandingPage from "./pages/Landing.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App overflow-hidden">
      <ChatRoomProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      </ChatRoomProvider>
    </div>
  );
}

export default App;
