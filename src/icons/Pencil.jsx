import Circle from "./Circle";

const Pencil = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle />

      <rect
        x="40"
        y="56"
        width="50"
        height="10"
        fill="black"
        transform="rotate(25 40 60)"
        rx="1"
        ry="1"
      />
      <polygon
        points="90,52 100,60 90,68"
        fill="black"
        transform="rotate(25 60 60)"
      />
      <rect
        x="34"
        y="54"
        width="10"
        height="12"
        fill="black"
        transform="rotate(25 40 60)"
        rx="1"
        ry="1"
      />
      <line
        x1="40"
        y1="61"
        x2="88"
        y2="61"
        stroke="black"
        stroke-width="2"
        transform="rotate(25 40 60)"
      />
    </svg>
  );
};

export default Pencil;
