import { useState } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import { ChatContext } from "./context/chatContext";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        messages,
        setMessages,
        id,
        setId,
      }}
    >
      <Cards />

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} id={id} />}
    </ChatContext.Provider>
  );
};

export default App;
