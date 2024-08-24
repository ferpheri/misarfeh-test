"use client";
import ClosedSign from "@/components/icons/ClosedSign";
import FastfoodBurger from "@/components/icons/FastfoodBurger";
import GameGift from "@/components/icons/GameGift";
import ServiceCard from "@/components/ServiceCard";
import ServiceVector from "@/components/ServiceVector";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cardsValue = [
  {
    title: "تاثیر بر شاخص آلودگی",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ",
  },
  {
    title: "تاثیر بر خیریه",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ",
  },
  {
    title: "تاثیر بر ذخیره سازی پول",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ",
  },
  {
    title: "تاثیر بر کمک به حیوانات",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ",
  },
];
const vectorsValue = [
  {
    title: "همه جا بسته",
    description: "ممکنه سفارش تو پشت در های نیمه بسته منتظرت باشه.",
    image: <ClosedSign />,
  },
  {
    title: "سورپرایز بگ",
    description: "با کمبو های مخصوص می صرفه، سورپرایز میشی.",
    image: <GameGift />,
  },
  {
    title: "غذا چی کار کنم",
    description: "اشکال نداره آخرین پخت های رستوران، داخل می صرفه هستن",
    image: <FastfoodBurger />,
  },
  {
    title: "می صرفه",
    description: "داخل دنیای ما، همه چیز می صرفه.",
    image: "/misarfehLogo.png",
  },
];
const ServicesPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center overflow-auto">
      <div className="mt-10 md:mt-40  text-center">
        <h2 className="text-3xl">خدماتی که واقعا می صرفه</h2>
      </div>
      <div className="flex sm:flex-row flex-col justify-center my-16 items-center sm:space-x-4 sm:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 space-y-4 space-x-0">
        {cardsValue.map((card, index) => (
          <div key={index}>
            {isSmallScreen ? (
              <motion.div
                className="flex flex-col justify-center items-center"
                animate={{
                  x: index % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <ServiceCard title={card.title} caption={card.caption} />
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-row justify-center items-center"
                animate={{
                  y: index % 2 === 0 ? [0, -20, 0] : [0, 20, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <ServiceCard
                  key={index}
                  title={card.title}
                  caption={card.caption}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div>
        {vectorsValue.map((vector, index) => (
          <div key={index}>
            <ServiceVector
              title={vector.title}
              description={vector.description}
              image={vector.image}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesPage;
