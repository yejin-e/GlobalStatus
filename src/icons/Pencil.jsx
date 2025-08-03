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
        x="28"
        y="42"
        width="40"
        height="10"
        fill="#0A400C"
        transform="rotate(65 40 60)"
        rx="1"
        ry="1"
      />
      <rect
        x="28"
        y="30"
        width="40"
        height="10"
        fill="#0A400C"
        transform="rotate(65 40 60)"
        rx="1"
        ry="1"
      />
      <polygon
        points="82,48 100,60 82,70"
        fill="#0A400C"
        transform="rotate(65 60 60)"
      />
      <rect
        x="15"
        y="28"
        width="10"
        height="25"
        fill="#0A400C"
        transform="rotate(65 40 60)"
        rx="1"
        ry="1"
      />
    </svg>
  );
};

export default Pencil;
