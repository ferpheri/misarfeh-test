import * as React from "react";
const FastfoodBurger = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={60}
    height={60}
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 100 100"
    className="size-14 sm:size-20 lg:size-24 xl:size-28 2xl:size-32"
    {...props}
  >
    <path d="M72.8 80.7H26.6c-5.9 0-10.7-4.8-10.7-10.7v-6c0-.8.7-1.5 1.5-1.5h.1c.6 0 1.2.4 1.4 1 .4 1.3 3.2 2.8 7 2.8 3.3 0 5.6-1.1 6.6-2.1.9-1.1 2.3-1.7 3.9-1.7h2.9c1.5 0 2.9.6 3.9 1.7.9 1.1 3.3 2.1 6.6 2.1 3.2 0 5.6-1.1 6.6-2.1.9-1.1 2.3-1.7 3.9-1.7h2.4c1.5 0 2.9.6 3.9 1.7.9 1.1 3.3 2.1 6.6 2.1 3.7 0 6.5-1.4 6.9-2.8.2-.6.8-1 1.4-1h.5c.8 0 1.5.7 1.5 1.5v6c0 5.9-4.8 10.7-10.7 10.7zM18.9 67.6V70c0 4.2 3.4 7.7 7.7 7.7h46.2c4.2 0 7.7-3.4 7.7-7.7v-2.8c-1.8 1.3-4.5 2-7.5 2-3.7 0-7.1-1.2-8.8-3.2-.3-.4-.9-.6-1.6-.6h-2.4c-.6 0-1.2.2-1.6.6-1.7 2-5.1 3.2-8.8 3.2-3.7 0-7.1-1.2-8.8-3.2-.3-.4-.9-.6-1.6-.6h-2.9c-.6 0-1.2.2-1.6.6-1.7 2-5.1 3.2-8.8 3.2-2.9.1-5.3-.5-7.2-1.6zm61.4-10.1H19.9c-3.9 0-7.1-3.3-7.1-7.4 0-2 .7-3.8 2-5.2 1.4-1.4 3.1-2.2 5-2.2h41c.5 0 1 .3 1.3.7l2.1 3.5 4.6-3.9c.3-.2.6-.4 1-.4h10.5c3.9 0 7.1 3.3 7.1 7.4 0 2-.7 3.8-2 5.2-1.4 1.5-3.2 2.3-5.1 2.3zM19.9 45.6c-1.1 0-2.1.4-2.9 1.3-.8.8-1.2 2-1.2 3.2 0 2.4 1.8 4.4 4.1 4.4h60.4c1.1 0 2.1-.4 2.9-1.3.8-.8 1.2-2 1.2-3.2 0-2.4-1.8-4.4-4.1-4.4h-9.9l-5.5 4.7c-.3.3-.8.4-1.2.3-.4-.1-.8-.3-1-.7L60 45.6H19.9zm44 5.1h-.2c-.4-.1-.8-.3-1-.7L60 45.6H20.1c-.8 0-1.5-.7-1.5-1.5v-6.8c0-.8.7-1.5 1.5-1.5h59.3c.8 0 1.5.7 1.5 1.5v6.8c0 .8-.7 1.5-1.5 1.5h-9l-5.5 4.7c-.3.3-.6.4-1 .4zm-42.3-8.1h39.2c.5 0 1 .3 1.3.7l2.1 3.5 4.6-3.9c.3-.2.6-.4 1-.4h8v-3.8H21.6v3.9zM73 69.3c-4.2 0-7.8-1.5-9.3-3.8H59c-1.5 2.3-5.1 3.8-9.3 3.8-4.2 0-7.8-1.5-9.3-3.8h-5.2c-1.5 2.3-5.1 3.8-9.3 3.8-4.4 0-8.1-1.6-9.4-4-2.3-.7-3.9-2.8-3.9-5.2 0-2.5 1.8-4.7 4.2-5.3.2-.1.4-.1.6-.1H82c3 0 5.4 2.4 5.4 5.4 0 2.9-2.3 5.3-5.1 5.4-1.5 2.3-5.1 3.8-9.3 3.8zm-14.9-6.8h6.5c.6 0 1.2.4 1.4 1 .4 1.3 3.2 2.8 7 2.8 3.7 0 6.5-1.4 6.9-2.8.2-.6.8-1 1.4-1h.7c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4H17.6c-1.2.2-2.1 1.2-2.1 2.4s.9 2.2 2.1 2.4c.2 0 .3.1.4.1.4.2.8.5.9.9.4 1.3 3.2 2.8 7 2.8 3.7 0 6.5-1.4 6.9-2.8.2-.6.8-1 1.4-1h7c.6 0 1.2.4 1.4 1 .4 1.3 3.2 2.8 6.9 2.8s6.5-1.4 6.9-2.8c.5-.6 1-1 1.7-1zM82 38.9H17.4c-.8 0-1.5-.7-1.5-1.5v-1.8c0-9 7.3-16.3 16.3-16.3h34.9c9 0 16.3 7.3 16.3 16.3v1.8c.1.8-.6 1.5-1.4 1.5zm-63.1-3h61.6v-.3c0-7.3-6-13.3-13.3-13.3H32.3c-7.3 0-13.3 6-13.3 13.3v.3zm12.7-4.5 3.8-3.8c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-3.8 3.8c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.3 0 .7-.2 1-.4zm17.3 0 3.8-3.8c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-3.8 3.8c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.3 0 .7-.2 1-.4zm16.7 0 3.8-3.8c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-3.8 3.8c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.3 0 .7-.2 1-.4z" />
  </svg>
);
export default FastfoodBurger;
