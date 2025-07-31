import Circle from "./Circle";

const List = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle />

      <rect x="35" y="40" width="50" height="8" fill="black" rx="4" ry="4" />
      <rect x="35" y="56" width="50" height="8" fill="black" rx="4" ry="4" />
      <rect x="35" y="72" width="50" height="8" fill="black" rx="4" ry="4" />
    </svg>
  );
};

export default List;
