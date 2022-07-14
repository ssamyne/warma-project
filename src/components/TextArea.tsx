import classes from './TextArea.module.css';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  textInput: string;
}

const TextArea: React.FC<Props> = ({ onChange, textAreaRef, textInput }) => {
  return (
    <div className={classes.divText}>
      <textarea
        onChange={onChange}
        placeholder='Share here!'
        ref={textAreaRef}
        rows={1}
        value={textInput}
      />
    </div>
  );
};

export default TextArea;
