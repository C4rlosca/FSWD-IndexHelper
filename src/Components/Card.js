import "./Card.css";
import VID from "../assets/images/VID.jpg";
import DOC from "../assets/images/DOC.jpg";

const Card = (props) => {
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
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    let date = `${day}/${month}/${year}`;
    return date;
  };
  const handleClick = (e) => {
    console.log(e.target.innerText);
    props.onSearch([e.target.innerText, "todos"]);
  };
  const handleGoTo = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="Card">
      <section onClick={handleGoTo} className="Thumbnail">
        <img src={!props.file ? VID : DOC} alt="thumbnail" />
        <div className="Title">
          <p className="Label">
            {props.session
              ? `${props.type.slice(0, 1).toUpperCase()}${props.type.slice(
                  1
                )} ${props.session}`
              : ""}
          </p>
          <p className="File-title">{props.title}</p>
          <p className="Date">
            {DatetoString(props.year, props.month, props.day)}
          </p>
          <p>{props.teacher}</p>
          <span>{props.file}</span>
        </div>
        <div className="Duration">
          <p>{SecondsToString(props.duration) || ""}</p>
        </div>
      </section>
      <section className="Elements">
        <div className="Description">
          <p>{props.description}</p>
        </div>
        <div className="Separator"></div>
        <div className="BottomCard">
          <button href={props.link}>Docs</button>
          <ul>
            {props.tags.map((tag, index) => {
              return <li onClick={handleClick} key={index}>{tag}</li>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Card;
