import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import useQuizer from "../hooks/useQuizer";

const NextButton = ({
  show,
  onHide,
  answer,
  correct,
  next,
  done,
}: {
  show: any;
  onHide: any;
  answer: string | undefined | boolean;
  correct: boolean;
  next: any;
  done: boolean;
}) => {
  const { toServer } = useQuizer();
  const whenClicked = () => {
    let curr = Number(sessionStorage.getItem("answered") as unknown);
    let score = Number(sessionStorage.getItem("score") as unknown);
    curr = curr + 1;
    if (correct) {
      score = score + 1;
    }
    sessionStorage.setItem("score", String(score));
    sessionStorage.setItem("answered", String(curr));
    onHide();
    next();
  };
  const navigate = useNavigate();

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      backdrop='static'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 style={{ color: correct ? "green" : "red" }}>
            {correct ? "Correct" : "Incorrect"}
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The Correct answer is {answer}.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            whenClicked();
            if (done) {
              navigate("/dashboard");
            }
          }}
        >
          {done ? "Finish" : "Done"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NextButton;
