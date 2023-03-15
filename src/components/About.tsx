import Button from "react-bootstrap/esm/Button"
import Modal from "react-bootstrap/Modal";


const About = (props:any) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Questioneer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Welcome to questioneer</h4>
          <p>
            Your adventure begins here.
            <span>
                Here you are to choose to be quized on various fields of your interest.Or not.
                To get quiz questions from any field, don't select on any category and questions will be given to you at random.
                The same applies to the difficulties. On clicking the begin button, you will be provided with 10 random questions from that field.
                Good luck.
            </span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default About