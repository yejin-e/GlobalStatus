import Circle from "./Circle";

const Direction = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle />

      <line
        x1="35"
        y1="60"
        x2="75"
        y2="60"
        stroke="black"
        stroke-width="10"
        stroke-linecap="round"
      />
      <polygon points="75,42 95,60 75,78" fill="black" />
    </svg>
  );
};

export default Direction;
