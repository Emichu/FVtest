import classes from "./text-input.module.css";

type TextInputProps = {
  label: string;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const { label } = props;

  return (
    <label className={classes.textinputlabel}>
      {label}
      <input type="text" name={label} className={classes.textinput} />
    </label>
  );
};

export default TextInput;
