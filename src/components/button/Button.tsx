import "./button.scss";

type ButtonProps = {
  fn?: () => void;
  name?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ fn, name, children }) => {
  return (
    <button className={`btn ${name}`} onClick={fn}>
      {children}
    </button>
  );
};

export const OutlineButton: React.FC<ButtonProps> = ({
  fn,
  name,
  children,
}) => {
  return (
    <Button name={`btn-outline ${name}`} fn={fn}>
      {children}
    </Button>
  );
};

export default Button;
