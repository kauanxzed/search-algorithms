export interface ButtonProps {
  msg?: string;
  className?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <div
      className={`px-5 py-3 bg-teal-500 w-fit rounded-xl hover:bg-teal-700 cursor-pointer ${props.className}`}
      onClick={props.onClick}
    >
      <span className="text-white">{props.msg}</span>
    </div>
  );
}

export default Button;
