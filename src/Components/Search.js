import Data from "../db/data.json";
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

const Bar = () => {
  return Data.map((item, index) => {
    return (
      <div className="Card" key={index}>
        <container className="Thumbnail">
          <p>
            {item.session
              ? `${item.type.slice(0, 1).toUpperCase()}${item.type.slice(1)} ${
                  item.session
                }`
              : ""}
          </p>
          <img src="" alt="" />
          <p>{SecondsToString(item.duration) || ""}</p>
        </container>
        <container className="Elements">
          <p>{item.description}</p>
          <p>{item.file}</p>
          <p>{DatetoString(item.year, item.month, item.day)}</p>
          <p>{item.teacher}</p>
          <a href={item.link}>Ver</a>
          <ul>
            {item.tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })}
          </ul>
        </container>
      </div>
    );
  });
};

export default Bar;
