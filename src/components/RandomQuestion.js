import { useContext, useState, useEffect } from "react";
import Button from "../UI/Button";
import NextButton from "../UI/NextButton";
import { QuestionContext } from "../context/Context";

const RandomQuestion = (props) => {
  const { jsQuestions, reactQuestions } = useContext(QuestionContext);

  const [selectedQuestion, setSelectedQuestion] = useState(jsQuestions);
  const [randomIndex, setRandomIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.select === "js") {
      setSelectedQuestion(jsQuestions);
      console.log("return js");
      handleNextQuestion(jsQuestions);
      setShow(false);
    } else if (props.select === "react") {
      console.log("return react");
      setSelectedQuestion(reactQuestions);
      // setRandomIndex(0);
      handleNextQuestion(reactQuestions);
      setShow(false);
    }
  }, [props.select, reactQuestions, jsQuestions]);

  function handleNextQuestion(questions) {
    setRandomIndex(Math.floor(Math.random() * questions.length));
    // makes shure that the next anser of the question is not already visible yet
    setShow(false);
  }

  // Add a line break funciton maybe later

  // function addLineBreaks(selectedQuestion) {
  //   selectedQuestion[randomIndex].answer;
  // }

  return (
    <>
      <div
        className="Container"
        style={{
          display: "contents",
        }}
      >
        <div>
          <h1>{`${randomIndex + 1}.) ${
            selectedQuestion[randomIndex].question
          }`}</h1>
          <p>{show && selectedQuestion[randomIndex].answer}</p>
          {/* <Button>Hide Answer</Button> */}
          <Button onClick={() => setShow(!show)}>
            {!show ? "Show Answer" : "Hide Answer"}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "flex-end",
          }}
        >
          {/* flex: justify-content: flex-end, align content:flex-end, */}
          <NextButton onClick={() => handleNextQuestion(selectedQuestion)}>
            Next Question
          </NextButton>
        </div>
      </div>
    </>
  );
};

export default RandomQuestion;
