import Image from "next/image";
import Link from "next/link";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";

export interface HeroProps {
  isFadingOut: boolean;
}

const Hero = ({ isFadingOut }: HeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: isFadingOut ? 0 : 1,
        scale: isFadingOut ? 0.7 : 1,
      }}
      transition={{ duration: 0.75, ease: "easeIn" }}
      className="justify-center items-center flex flex-col"
    >
      {" "}
      <h1 className="text-[3.5rem] sm:text-[3.75rem] xl:text-[4rem] xl:mb-6 mb-4">
        می صرفه
      </h1>
      <p className="text-[1.5rem] sm:text-[1.75rem] xl:text-[1.75rem] mt-1">
        <Typewriter />
      </p>
      <Image
        alt="misarfeh"
        src={"/misarfehLogo.png"}
        width={180}
        height={180}
        className="mt-6 sm:w-28 xl:w-30 w-24 h-auto"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="relative mt-9 xl:mt-12 flex justify-center items-center"
      >
        <div className="absolute w-[70%] h-[75%] border-2 rounded-rounded-6 animate-ping" />
        <div className="animate-ping absolute w-[80%] h-[95%] border-2 rounded-rounded-6" />
        <div className="animate-ping absolute w-[90%] h-[115%] border-2 rounded-rounded-6" />
        <Link
          href="/install"
          className="relative sm:text-xl xl:text-xl xl:py-2 xl:px-4 sm:py-2 sm:px-4 text-lg py-1 px-2 bg-primary-primary98 hover:bg-neutral-neutral90 text-key-colors-primary rounded-rounded-6"
        >
          نصبش کن
        </Link>
      </motion.div>
    </motion.div>
  );
};
export default Hero;
