import clsx from "clsx";

const Message = ({ message, card }) => {
  const condition = {
    sent: message.id === card.id,
    received: message.id !== card.id,
  };
  const messageWrap = clsx("message__wrap", {
    sent: condition.sent,
    received: condition.received,
  });
  const messageDate = clsx("message__date", {
    sent: condition.sent,
    received: condition.received,
  });
  const messageText = clsx("message__text", {
    sent: condition.sent,
    received: condition.received,
  });
  const messagePic = clsx("message__pic", {
    sent: condition.sent,
    received: condition.received,
  });
  const messagePicImg = clsx("message__pic-img", {
    sent: condition.sent,
    received: condition.received,
  });
  const messagePicComment = clsx("message__pic-comment", {
    sent: condition.sent,
    received: condition.received,
  });
  const fallbackSrc =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";

  return (
    <div className="message">
      <div className={messageWrap}>
        <div className={messageDate}>
          <span className="message__date-span">{message.hours}:</span>
          <span className="message__date-span">{message.minutes}</span>
        </div>
        {message.type === "text" ? (
          <p className={messageText}>{message.value}</p>
        ) : (
          <div className={messagePic}>
            <img
              className={messagePicImg}
              src={message.value}
              onError={(e) => (e.target.src = fallbackSrc)}
              alt=""
            />
            {message?.comment && (
              <p className={messagePicComment}>{message.comment}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
