"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Typewriter from "./Typewriter";
import InstallPage from "@/app/install/page";
import TimeLine from "./TimeLine";
import AboutUs from "./AboutUs";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState<number>(1);
  const [isScrollingAllowed, setIsScrollingAllowed] = useState<boolean>(true);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isScrollingAllowed) return;

      switch (event.key) {
        case "ArrowUp":
          setSelectedComponent((prev) => Math.max(prev - 1, 1));
          setScrollCooldown();
          break;
        case "ArrowDown":
          setSelectedComponent((prev) => Math.min(prev + 1, 4));
          setScrollCooldown();
          break;
        default:
          break;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isScrollingAllowed) return;

      if (event.deltaY < 0) {
        // Scrolling up
        setSelectedComponent((prev) => Math.max(prev - 1, 1));
      } else if (event.deltaY > 0) {
        // Scrolling down
        setSelectedComponent((prev) => Math.min(prev + 1, 4));
      }
      setScrollCooldown();
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      setTouchStartY(touch.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isScrollingAllowed || touchStartY === null) return;

      const touch = event.touches[0];
      const touchEndY = touch.clientY;

      if (touchStartY - touchEndY > 50) {
        // Swiping up
        setSelectedComponent((prev) => Math.min(prev + 1, 4));
        setScrollCooldown();
      } else if (touchEndY - touchStartY > 50) {
        // Swiping down
        setSelectedComponent((prev) => Math.max(prev - 1, 1));
        setScrollCooldown();
      }
    };

    const setScrollCooldown = () => {
      setIsScrollingAllowed(false);
      setTimeout(() => {
        setIsScrollingAllowed(true);
      }, 3000); // 3 seconds timeout
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isScrollingAllowed, touchStartY]);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 1:
        return <Hero />;
      case 2:
        return <InstallPage />;
      case 3:
        return <TimeLine />;
      case 4:
        return <AboutUs />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="content h-screen">
      <div className="hero h-screen justify-center items-center flex flex-col">
        {renderComponent()}
      </div>
    </div>
  );
};

export default HomePage;
