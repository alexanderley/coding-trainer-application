import "./App.css";
import Questions from "./components/Questions";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <div className={classes.wrapper}>
        <Questions></Questions>
      </div>
    </>
  );
}

export default App;
