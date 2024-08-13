"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
  const [text, count] = useTypewriter({
    words: ["لبخند اما ارزون"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <>
      <Cursor cursorColor="#b3b3b3" />
      <span className="ml-3">{text}</span>
    </>
  );
};
export default Typewriter;
