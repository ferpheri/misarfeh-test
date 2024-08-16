"use client";
import { useEffect, useState } from "react";
import { getDeviceType, DeviceType } from "@/components/deviceDetection";
import Image from "next/image";
import IphoneShareIcon from "@/components/icons/IphoneShareIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroProps } from "@/components/Hero";
const Install = ({ isFadingOut }: HeroProps) => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>();

  useEffect(() => {
    setSelectedDevice(getDeviceType());
  }, []);

  const handleToggle = () => {
    setSelectedDevice((prev) => (prev === "Android" ? "iOS" : "Android"));
  };

  const containerVariants = {
    hidden: { opacity: isFadingOut ? 1 : 0, scale: isFadingOut ? 1 : 0.7 },
    visible: { opacity: isFadingOut ? 0 : 1, scale: isFadingOut ? 0.7 : 1 },
    float: {
      y: [0, -10, 0],
      transition: {
        y: {
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={["visible", "float"]}
      variants={containerVariants}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center justify-center"
    >
      <div
        className="bg-black bg-opacity-30 custom-backdrop-blur mt-0 mx-10 px-3 pt-3 xs:p-8 rounded-lg shadow-lg max-w-lg text-center"
        // variants={containerVariants}
      >
        <motion.div
          className="flex justify-center items-center"
          variants={imageVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Link href={"/"}>
            <Image
              alt="misarfehLogo"
              src={"/misarfehLogo.png"}
              width={56}
              height={56}
            />
          </Link>
        </motion.div>

        {selectedDevice === "Android" || selectedDevice === "iOS" ? (
          <>
            <motion.h1
              className="text-2xl font-bold mb-4"
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              می صرفه رو نصب کن
            </motion.h1>

            <motion.div
              className="mb-6"
              variants={toggleVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedDevice === "iOS"}
                  onChange={handleToggle}
                />
                <div className="w-32 h-10 flex items-center bg-dark-background rounded-full p-1 transition duration-300">
                  <div
                    className={`w-16 z-20 h-8 bg-key-colors-primary text-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                      selectedDevice === "iOS" ? "translate-x-14" : ""
                    }`}
                  >
                    <span className="text-xs font-medium text-white">
                      {selectedDevice}
                    </span>
                  </div>
                  <div
                    className={`absolute w-16 h-8 text-xs font-medium flex items-center justify-center ${
                      selectedDevice === "iOS"
                        ? "-translate-x-1"
                        : "translate-x-14"
                    }`}
                  >
                    {selectedDevice === "iOS" ? "Android" : "iOS"}
                  </div>
                </div>
              </label>
            </motion.div>

            <motion.p
              className="mb-4"
              style={{ direction: "rtl" }}
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              مراحل زیر رو برای نصب می صرفه دنبال کن:
            </motion.p>

            {selectedDevice === "Android" && (
              <motion.div
                className="mb-6"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <ol
                  className="list-decimal list-inside text-right"
                  style={{ direction: "rtl" }}
                >
                  <li>
                    با انتخاب گزینه <span className="text-2xl">⋮</span> در بالای
                    صفحه منوی مرورگر رو باز کنید
                  </li>
                  <li>
                    گزینه &quot;Install&quot; یا &quot;Add to Home Screen&quot;
                    رو انتخاب کنید
                  </li>
                </ol>
              </motion.div>
            )}

            {selectedDevice === "iOS" && (
              <motion.div
                className="mb-6"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <ol
                  className="list-decimal list-inside text-right"
                  style={{ direction: "rtl" }}
                >
                  <li>
                    در نوار پایین گوشی دکمه{" "}
                    <span className="inline-flex items-center justify-center">
                      <IphoneShareIcon />
                    </span>{" "}
                    رو انتخاب کنید
                  </li>
                  <li>گزینه &quot;Add to Home Screen&quot; رو انتخاب کنید</li>
                  <li>در بالای صفحه دکمه &quot;Add&quot; رو انتخاب کنید</li>
                </ol>
              </motion.div>
            )}
          </>
        ) : (
          <motion.h1
            className="text-lg mt-3"
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            لطفا می صرفه رو از طریق موبایل نصب کن
          </motion.h1>
        )}
      </div>
    </motion.div>
  );
};

export default Install;
