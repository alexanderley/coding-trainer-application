import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={classes.card}
      style={{
        display: "flex",
        alignContent: "space-around",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
