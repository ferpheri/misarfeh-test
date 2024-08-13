import * as React from "react";
const QuestionIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="CurrentColor"
    transform="scale(-1 1)"
    viewBox="0 0 24 24"
    className="size-8 md:size-14 lg:size-20 xl:size-14"
    {...props}
  >
    <g fill="none">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19h.01M8.217 7.697A4.002 4.002 0 0 1 16 9a4.001 4.001 0 0 1-2.442 3.685c-.74.314-1.111.47-1.24.592a.75.75 0 0 0-.257.386C12 13.83 12 14.087 12 14.6V16"
      />
    </g>
  </svg>
);
export default QuestionIcon;
