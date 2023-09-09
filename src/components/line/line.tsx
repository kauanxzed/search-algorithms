/* eslint-disable-next-line */
export interface LineProps {
  height: number;
}

export function Line(props: LineProps) {
  return (
    <li
      className="w-5 bg-red-700 mx-[0.25px]"
      style={{ height: `${props.height + 100}px` }}
    ></li>
  );
}

export default Line;
