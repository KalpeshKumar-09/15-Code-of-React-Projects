import { FaGithubSquare } from "react-icons/fa";
import Review from "./components/Review";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
