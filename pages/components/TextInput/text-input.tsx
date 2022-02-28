import classes from "./text-input.module.css";

type TextInputProps = {
  label: string;
  value: string;
  onTextChange: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const { label, value, onTextChange } = props;

  return (
    <label className={classes.textinputlabel}>
      {label}
      <input
        type="text"
        name={label}
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        className={classes.textinput}
      />
    </label>
  );
};

export default TextInput;
