import React, { useState } from "react";
import questions from "./data";
import Question from "./components/Question";

const App = () => {
  const [question, setQuestion] = useState(questions);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about logic</h3>
        <section className="info">
          {question.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
