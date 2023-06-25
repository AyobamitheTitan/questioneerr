import { useEffect, useState } from "react";
import "../styles/choice.css";
import { availableCategories, difficulty } from "../Data";
import useQuizer from "../hooks/useQuizer";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/esm/Button";
import About from "../components/About";
const ChooseQuiz = () => {
  const navigate = useNavigate();
  const [modalShow,setModalShow] = useState<boolean>(false);

  const { getQuizes } = useQuizer();

  const handleSubmit = () => {
    const boxes = document.getElementsByClassName("boxes");
    const radios = document.getElementsByClassName("radio");

    let checked: Array<string> = [];
    let selectedRadio: string | null = null;
    for (let box of boxes) {
      if ((box as HTMLInputElement).checked) {
        checked.push((box as HTMLInputElement).value);
      }
    }
    for (let radio of radios) {
      if ((radio as HTMLInputElement).checked) {
        selectedRadio = (radio as HTMLInputElement).value;
      }
    }

    // setCategories([...checked])
    if (checked.length === 0) {
      getQuizes(null, selectedRadio);
      navigate("/questioneerr/start_quiz");

      return;
    }
    getQuizes(checked.join(","), selectedRadio);
    navigate("/questioneerr/start_quiz");
  };

  return (
    <>
      <div className="choices">
        <div className="categories">
          <h1>Select a category</h1>
          {availableCategories.map((singleC) => (
            <div className="collection">
              <input
                type="checkbox"
                key={singleC.id}
                value={singleC.value}
                className="boxes"
              />
              <p>{singleC.name}</p>
            </div>
          ))}
        </div>

        <div className="difficulty">
          <h3>Select a difficulty</h3>
          {difficulty.map((diff) => (
            <>
              <input
                type="radio"
                value={diff}
                className="radio"
                name="option"
              />
              {diff}
            </>
          ))}
        </div>
        <Button variant="primary" onClick={handleSubmit}>
          Begin
        </Button>
      </div>
      <Button variant="warning" className="help" onClick={()=>{setModalShow(true)}}>Help</Button>
      <About
      show={modalShow}
      onHide={()=>setModalShow(false)}
      />
    </>
  );
};

export default ChooseQuiz;
