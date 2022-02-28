import classes from "./next-button.module.css";

type NextButtonProps = {
  stage: number;
};

const NextButton: React.FC<NextButtonProps> = (props) => {
  function checkIfCanMoveForward() {
    return true;
  }

  return (
    <div className={classes.rowbottom}>
      <button onClick={checkIfCanMoveForward} className={classes.nextbutton}>
        Next {">"}
      </button>
    </div>
  );
};

export default NextButton;
