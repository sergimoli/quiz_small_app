import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

// function Question({ question, dispatch, answer }) {
function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index); // this was passed by props from App.js. Remember: question={questions[index]}
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      {/* <Options question={question} dispatch={dispatch} answer={answer} /> */}
      <Options question={question} />
    </div>
  );
}

export default Question;
