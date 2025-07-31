import Circle from "./Circle";

const Create = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle />
      <line
        x1="60"
        y1="35"
        x2="60"
        y2="85"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"
      />
      <line
        x1="35"
        y1="60"
        x2="85"
        y2="60"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Create;
