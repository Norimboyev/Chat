import { useContext, useState } from "react";
import cameraIcon from "../assets/images/camera.svg";
import sendIcon from "../assets/images/send.svg";
import Message from "./Message";
import { ChatContext } from "../context/chatContext";
import notification from "../assets/sounds/discord.mp3";
import { RiEmotionSadLine } from "react-icons/ri";

const Card = ({ card }) => {
  const { messages, setMessages, setIsModalOpen, setId } =
    useContext(ChatContext);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.length) {
      const item = {
        id: card.id,
        value: input,
        type: "text",
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
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="card">
      <div className="container card__wrap">
        <div className="card__header">
          <img className="card__header-img" src={card.img} alt="" />
          <div className="card__header-desc">
            <h2 className="card__header-desc-title">{card.title}</h2>
            <p className="card__header-desc-status">{card.state}</p>
          </div>
        </div>
        <div className="card__content">
          {messages.length ? (
            messages?.map((message) => (
              <Message message={message} key={Math.random()} card={card} />
            ))
          ) : (
            <div className="card__content-nope">
              <RiEmotionSadLine className="card__content-nope-img" />
              <p className="card__content-nope-text">Сообщений пока нет</p>
            </div>
          )}
        </div>
        <div className="card__footer">
          <input
            type="text"
            className="card__footer-input"
            placeholder="Написать сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          {input.length ? (
            <button className="card__footer-btn" onClick={() => sendMessage()}>
              <img className="card__footer-img" src={sendIcon} alt="" />
            </button>
          ) : (
            <button
              className="card__footer-btn"
              onClick={() => {
                setIsModalOpen(true), setId(card.id);
              }}
            >
              <img className="card__footer-img" src={cameraIcon} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
