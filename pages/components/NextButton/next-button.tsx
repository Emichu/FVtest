import classes from "./next-button.module.css";

type NextButtonProps = {
  //   label: string;
};

const NextButton: React.FC<NextButtonProps> = (props) => {
  //   const { label } = props;

  return (
    <div className={classes.rowbottom}>
      <button className={classes.nextbutton}>Next {">"}</button>
    </div>
  );
};

export default NextButton;
