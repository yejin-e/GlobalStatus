import Circle from "./Circle";

const Delete = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle />

      <line
        x1="40"
        y1="40"
        x2="80"
        y2="80"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"
      />
      <line
        x1="80"
        y1="40"
        x2="40"
        y2="80"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Delete;
