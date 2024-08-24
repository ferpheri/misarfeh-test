"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroProps } from "@/components/Hero";

const teamMembers = [
  {
    name: "نیما کارگر",
    position: "مدیر اجرایی",
    imageSrc: "/mohamad.jpg",
    brief: "فعال در حوزه سلامت",
  },
  {
    name: "علی رضا خدری",
    position: "مدیر مارکتینگ",
    imageSrc: "/mohamad.jpg",
    brief:
      "فعال در حوزه تبلیغات",
  },
  {
    name: "ماهان امیریان",
    position: "مدیر تکنولوژی",
    imageSrc: "/mohamad.jpg",
    brief: "فعال حوزه استارت آپ ها",
  },
  {
    name: "محمد دهقانیان",
    position: "برنامه نویس",
    imageSrc: "/mohamad.jpg",
    brief: "فعال حوزه تکنولوژی",
  },
 
];

const AboutUs = ({ isFadingOut }: HeroProps) => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showInformationHandler = (name: string) => {
    if (selectedMember === name) {
      // If the same member is clicked again, reset the selection
      setSelectedMember(null);
    } else {
      // If a different member is clicked, set that as the selected member
      setSelectedMember(name);
    }
  };

  const selectedMemberInfo = teamMembers.find(
    (member) => member.name === selectedMember
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: isFadingOut ? 0 : 1,
        scale: isFadingOut ? 0.7 : 1,
      }}
      transition={{ duration: 0.75, ease: "easeIn" }}
      className="flex flex-col justify-center items-center xs:px-5 w-full overflow-hidden"
    >
      <div className="xl:mb-20 text-3xl md:text-5xl text-center ">
        <p className="mb-8">ساخته شده با اعتماد</p>
      </div>
      <div className="flex flex-row">
        {isSmallScreen ? (
          <div className="mt-10">
            <div id="top3Cards" className="flex flex-row">
              {" "}
              {teamMembers.slice(0, 2).map((member) => (
                <div key={member.name}>
                  <div className="card xl:mx-4 mx-2 relative group xl:w-56 xl:h-56 h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44 bg-white xl:p-6 p-3 rounded-full hover:rounded-xl hover:h-36 md:hover:h-52 lg:hover:h-72 transition-all duration-150">
                    <div className="relative w-full h-full">
                      <Image
                        src={member.imageSrc}
                        height={120}
                        width={120}
                        alt="profile"
                        className="w-full rounded-full group-hover:rounded-xl duration-100 group-hover:-translate-y-12"
                        onClick={() => showInformationHandler(member.name)}
                      />
                    </div>
                    <div className="text-center -translate-y-[5.5rem] md:-translate-y-[6rem] lg:-translate-y-[8rem] opacity-0 group-hover:opacity-100">
                      <h3 className="text-sm text-gray-600 md:text-base lg:text-xl">
                        {member.name}
                      </h3>
                      <p className="text-light-on-primary-fixed text-nowrap text-xs md:text-sm lg:text-base">
                        {member.position}
                      </p>
                      <p className="text-light-on-primary-fixed text-xs md:text-sm lg:text-base">
                        {member.brief}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center mt-16" id="down2Cards">
              {" "}
              {teamMembers.slice(2).map((member) => (
                <div key={member.name}>
                  <div className="card xl:mx-4 mx-2 relative group xl:w-56 xl:h-56 h-24 w-24 md:h-36 md:w-36  lg:h-44 lg:w-44 bg-white xl:p-6 p-3 rounded-full hover:rounded-xl hover:h-36 md:hover:h-52 lg:hover:h-72  transition-all duration-150">
                    <div className="relative w-full h-full ">
                      <Image
                        src={member.imageSrc}
                        height={120}
                        width={120}
                        alt="profile"
                        className="w-full rounded-full group-hover:rounded-xl duration-100 group-hover:-translate-y-12"
                        onClick={() => showInformationHandler(member.name)}
                      />
                    </div>
                    <div className="text-center -translate-y-[5.5rem] md:-translate-y-[6rem] lg:-translate-y-[8rem] opacity-0 group-hover:opacity-100">
                      <h3 className="text-sm text-gray-600 md:text-base lg:text-xl">
                        {member.name}
                      </h3>
                      <p className="text-light-on-primary-fixed text-nowrap text-xs md:text-sm lg:text-base">
                        {member.position}
                      </p>
                      <p className="text-light-on-primary-fixed text-xs md:text-sm lg:text-base">
                        {member.brief}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          teamMembers.map((member) => (
            <div key={member.name}>
              <div className="card mx-4 relative group w-56 h-56 bg-white p-6 rounded-full hover:rounded-xl hover:h-64 transition-all duration-150">
                <div className="relative w-full h-full ">
                  <Image
                    src={member.imageSrc}
                    height={120}
                    width={120}
                    alt="profile"
                    className="w-full rounded-full group-hover:rounded-xl duration-100 group-hover:-translate-y-16"
                    onClick={() => showInformationHandler(member.name)}
                  />
                </div>
                <div className="text-center -translate-y-20 opacity-0 group-hover:opacity-100">
                  <h3 className="text-base text-gray-600 md:text-xl">
                    {member.name}
                  </h3>
                  <p className="text-light-on-primary-fixed text-nowrap text-sm xl:text-base">
                    {member.position}
                  </p>
                  <p className="text-light-on-primary-fixed  text-sm xl:text-base">
                    {member.brief}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default AboutUs;
