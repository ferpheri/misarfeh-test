import * as React from "react";
const GiftIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    height={50}
    width={50}
    strokeWidth={3}
    viewBox="0 0 64 64"
    className="size-7 md:size-12 lg:size-16 xl:size-12"
    {...props}
  >
    <g strokeLinecap="round">
      <path d="M13.19 31.01h37.65v25.15H13.19z" />
      <rect width={44.87} height={7.24} x={9.56} y={23.76} rx={1.02} />
      <path d="M45.73 9.86a6.5 6.5 0 0 0-3.51-1.6c-5.29-.57-7.08 8.12-9.7 14.33a.5.5 0 0 0 .65.65c6.17-2.62 14.46-4.47 14.33-9.69a5.3 5.3 0 0 0-1.77-3.69ZM21.79 7.86a6.44 6.44 0 0 0-3.5 1.6 5.32 5.32 0 0 0-1.78 3.69c-.13 5.22 8.16 7.07 14.33 9.69a.5.5 0 0 0 .65-.65c-2.62-6.19-4.41-14.9-9.7-14.33ZM32.01 23.36v32.8" />
    </g>
  </svg>
);
export default GiftIcon;
