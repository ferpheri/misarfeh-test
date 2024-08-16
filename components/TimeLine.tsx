import ClosedIcon from "@/components/icons/ClosedIcon";
import GiftIcon from "@/components/icons/GiftIcon";
import QuestionIcon from "@/components/icons/QuestionIcon";
import Image from "next/image";
import { HeroProps } from "@/components/Hero";
import { motion } from "framer-motion";
const TimeLine = ({ isFadingOut }: HeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: isFadingOut ? 0 : 1,
        scale: isFadingOut ? 0.7 : 1,
      }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="antialiased text-gray-300 mb-20 md:mt-20 -mt-10"
    >
      <div
        className="container relative mx-auto px-6 flex flex-col space-y-2 md:space-y-8 lg:space-y-12 xl:space-y-2"
        style={{ direction: "rtl" }}
      >
        <div className="absolute z-0 w-1.5 md:w-2 h-full bg-black shadow-md inset-0 right-17 md:mx-auto md:right-0 md:left-0" />

        {/* CARD 1 */}
        <div className="relative z-10">
          <div className="h-10 w-10 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-20 xl:w-20 mr-7 rounded-full shadow-md bg-black xs:absolute md:mx-auto md:left-0 md:right-0 flex justify-center items-center">
            <ClosedIcon />
          </div>
          <div className="relative pt-2 xs:pr-20 xs:pt-0 md:w-1/2 md:pr-0 md:mr-0  md:pl-16 lg:-mr-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 right-10 h-4 w-4 transform rotate-45 bg-black xs:top-3 xs:right-[4.5rem] lg:top-8 xl:top-5  md:right-auto md:left-14"
            />
            <div className="bg-black py-2 px-3 rounded-md shadow-md ">
              <h1 className="text-xs md:text-sm lg:text-lg xl:text-sm">
                Title
              </h1>
              <p className="text-2xs md:text-xs lg:text-base xl:text-xs">
                {" "}
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان
              </p>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="relative z-10">
          <div className="h-10 w-10 md:h-20 md:w-20 lg:h-28 lg:w-28 mr-7 xl:h-20 xl:w-20 rounded-full shadow-md bg-black xs:absolute md:mx-auto md:left-0 md:right-0 flex justify-center items-center">
            <QuestionIcon />
          </div>
          <div className="relative pt-2 xs:pr-20 xs:pt-0 md:w-1/2 md:mr-auto md:ml-0 lg:-ml-2 md:pr-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 right-10 h-4 w-4 transform rotate-45 bg-black xs:top-3 xs:right-[4.5rem] xl:top-5 lg:top-8 md:right-14"
            />
            <div className="bg-black py-2 px-3 rounded-md shadow-md ">
              <h1 className="text-xs md:text-sm lg:text-lg xl:text-sm">
                Title
              </h1>
              <p className="text-2xs md:text-xs lg:text-base xl:text-xs">
                {" "}
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان
              </p>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="relative z-10">
          <div className="h-10 w-10 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-20 xl:w-20 mr-7 rounded-full shadow-md bg-black xs:absolute md:mx-auto md:left-0 md:right-0 flex justify-center items-center">
            <GiftIcon />
          </div>
          <div className="relative pt-2 xs:pr-20 xs:pt-0 md:w-1/2 md:pr-0 md:mr-0 md:pl-16 lg:-mr-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 right-10 h-4 w-4 transform rotate-45 bg-black xs:top-3 xs:right-[4.5rem] xl:top-5 lg:top-8 md:right-auto md:left-14"
            />
            <div className="bg-black py-2 px-3 rounded-md shadow-md ">
              <h1 className="text-xs md:text-sm lg:text-lg xl:text-sm">
                Title
              </h1>
              <p className="text-2xs md:text-xs lg:text-base xl:text-xs">
                {" "}
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان
              </p>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="relative z-10">
          <div className="h-10 w-10 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-20 xl:w-20 mr-7 rounded-full shadow-md bg-black xs:absolute md:mx-auto md:left-0 md:right-0 flex justify-center items-center">
            <Image
              src="/misarfehLogo.png"
              alt="logo"
              height={50}
              width={50}
              className="size-6 md:size-12 lg:size-16 xl:size-11"
            />
          </div>
          <div className="relative pt-2 xs:pr-20 xs:pt-0 md:w-1/2 md:mr-auto md:pr-16 md:ml-0 lg:-ml-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 right-10 h-4 w-4 transform rotate-45 bg-black xs:top-3 xs:right-[4.5rem] xl:top-5 lg:top-8 md:right-14"
            />
            <div className="bg-black py-2 px-3 rounded-md shadow-md ">
              <h1 className="text-xs md:text-sm lg:text-lg xl:text-sm">
                Title
              </h1>
              <p className="text-2xs md:text-xs lg:text-base xl:text-xs">
                {" "}
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default TimeLine;
