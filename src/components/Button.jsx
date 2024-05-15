import "./Button.css";

const Button = ({ className, value, onClick }) => {   //three conditions passed
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;