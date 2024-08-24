"use client";
import AboutUsCard from "@/components/AboutUsCard";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "نیما کارگر",
    position: "مدیر اجرایی",
    image: "/mohamad.jpg",
    caption: "فعال در حوزه سلامت",
  },
  {
    name: "علیرضا خدری",
    position: "مدیر مارکتینگ",
    image: "/mohamad.jpg",
    caption: "فعال در حوزه تبلیغات",
  },
  {
    name: "ماهان امیریان ",
    position: "مدیر تکنولوژی",
    image: "/mohamad.jpg",
    caption: "فعال حوزه استارت آپ ها",
  },
  {
    name: "محمد دهقانیان",
    position: "برنامه نویس",
    image: "/mohamad.jpg",
    caption:
      "فعال حوصه تکنولوژی",
  },
];

const AboutPage = () => {
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10">
          <h2 className="text-3xl text-center">درباره ما</h2>
        </div>
        <div className="flex flex-col text-center justify-center items-center my-4 mx-4 2xl:mx-24">
          <p
            className="text-justify md:text-center"
            style={{ direction: "rtl" }}
          >
            می صرفه یک پلتفرم ارائه خدمات غذایی به مشتریان است. ما با همکاری و
            تلاش مشترک، به دنبال ایجاد نوآوری و پیشرفت در حوزه خدمات غذایی
            هستیم. هدف ما ارائه راه‌حل‌های خلاقانه و کارآمد برای نیازهای مشتریان
            و مجموعه های حوزه اغذیه در ایران است.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-8">
          <h3 className="text-2xl text-center">اعضا تیم</h3>
        </div>
      </div>
      {/* the order of cards should change in large screen */}
      {isSmallScreen ? (
        <div>
          {" "}
          {teamMembers.map((member, index) => (
            <div key={index}>
              <AboutUsCard
                image={member.image}
                name={member.name}
                position={member.position}
                caption={member.caption}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-row">
            {/* first two cards */}
            {teamMembers.slice(0, 2).map((member, index) => (
              <div key={index}>
                <AboutUsCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  caption={member.caption}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            {/* second two cards */}
            {teamMembers.slice(2, 4).map((member, index) => (
              <div key={index}>
                <AboutUsCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  caption={member.caption}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            {/* last card */}
            {teamMembers.slice(4).map((member, index) => (
              <div key={index}>
                <AboutUsCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  caption={member.caption}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutPage;
