import { useContext, useState } from "react";
import { ChatContext } from "../context/chatContext";
import notification from "../assets/sounds/discord.mp3";

const Modal = ({ setIsModalOpen, id }) => {
  const { messages, setMessages } = useContext(ChatContext);
  const [input, setInput] = useState("");
  const [comment, setComment] = useState("");

  const sendMessage = () => {
    if (input.length) {
      const item = {
        id: id,
        value: input,
        comment: comment,
        type: "image",
        status: "sent",
        hours: (new Date().getHours() < 10 ? "0" : "") + new Date().getHours(),
        minutes:
          (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes(),
      };
      setMessages([...messages, item]);
      setInput("");
      const audio = new Audio(notification);
      audio.volume = 0.5;
      audio.play();
    }
    setIsModalOpen(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="modal" onClick={() => setIsModalOpen(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__content-title">Отправить картинку</h2>
        <label className="modal__content-label">
          <input
            type="text"
            placeholder="URL"
            required
            className="modal__content-label-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <span className="modal__content-label-span">URL</span>
        </label>
        <label className="modal__content-label">
          <input
            type="text"
            placeholder="Комментарий"
            className="modal__content-label-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <span className="modal__content-label-span">Комментарий</span>
        </label>
        <div className="modal__content-btns">
          <button
            className="modal__content-btns-btn red"
            onClick={() => setIsModalOpen(false)}
          >
            Отмена
          </button>
          <button
            className="modal__content-btns-btn purple"
            onClick={() => sendMessage()}
          >
            ОТПРАВИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
