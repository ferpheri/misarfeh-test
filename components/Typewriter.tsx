"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
  const [text, count] = useTypewriter({
    words: [
      "همیشه تخفیف داره",
      "هیجان انتخاب خودته",
      "نمیدونی دلت چی می خواد؟",
      "لبخند سبز",
    ],
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
