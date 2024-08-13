import * as React from "react";
const WarningIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    height={50}
    width={50}
    strokeWidth={0.64}
    viewBox="-5.5 0 32 32"
    className="size-8 md:size-14 lg:size-20 xl:size-14"
    {...props}
  >
    <title>{"warning"}</title>
    <g fill="currentColor">
      <path d="M10.16 25.92c-2.6 0-8.72-.24-9.88-2.24C-1 21.4 2.32 15.44 3.36 13.64 4.4 11.88 8 6.08 10.48 6.08c2.8 0 7.24 7.48 8.56 10.12 1.92 3.84 2.48 6.4 1.56 7.6-1.52 2.04-8.96 2.12-10.44 2.12zm.32-18.2c-.72 0-3.08 2.36-5.64 6.76-2.76 4.68-3.48 7.72-3.08 8.4.32.56 3.2 1.4 8.4 1.4 5.44 0 8.64-.88 9.08-1.48.28-.36.04-2.28-1.72-5.84-2.64-5.28-6.12-9.24-7.04-9.24zm.04 11.48a.82.82 0 0 1-.84-.84V12c0-.48.36-.84.84-.84s.84.36.84.84v6.32c0 .48-.4.88-.84.88zm.84 2.16a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0z" />
    </g>
  </svg>
);
export default WarningIcon;
