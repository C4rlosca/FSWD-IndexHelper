import Data from "../db/data.json";
import "./Card.css";
import VID from "../assets/images/VID2.jpg";
import DOC from "../assets/images/DOC.jpg";

const SecondsToString = (seconds) => {
  if (seconds === undefined || seconds === null) {
    return "";
  } else {
    let hour = Math.floor(seconds / 3600);
    hour = hour < 10 ? "0" + hour : hour;
    let minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? "0" + minute : minute;
    let second = seconds % 60;
    second = second < 10 ? "0" + second : second;
    return hour + ":" + minute + ":" + second;
  }
};
const DatetoString = (year, month, day) => {
  month = (month < 10) ? "0" + month : month;
  day = (day < 10) ? "0" + day : day;
  let date = `${day}/${month}/${year}`;
  return date;
};

const Card = () => {
  return Data.map((item, index) => {
    return (
      <div className="Card" key={index}>
        <container className="Thumbnail">
          <img src={!item.file ? VID : DOC} alt="thumbnail" />
          <div className="Title">
            <p className="Label">
              {item.session
                ? `${item.type.slice(0, 1).toUpperCase()}${item.type.slice(1)} ${
                    item.session
                  }`
                : ""}
            </p>
          <p className="Date">{DatetoString(item.year, item.month, item.day)}</p>
            <p><span>by</span> {item.teacher}</p>
          </div>
          <div class="Duration">
            <p>{SecondsToString(item.duration) || ""}</p>
          </div>
        </container>
        <container className="Elements">
          <div className="Description">
          <span>{item.file}</span>
            <p>{item.description}</p>
          </div>
          <div className="BottomCard">
            <button href={item.link}>Docs</button>
            <ul>
              {item.tags.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
          </div>
        </container>
      </div>
    );
  });
};

export default Card;
