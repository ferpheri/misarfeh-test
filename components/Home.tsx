"use client";

import { useEffect, useState } from "react";
import InstallPage from "@/app/install/page";
import TimeLine from "./TimeLine";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Install from "./Install";

const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState<number>(1);
  const [isScrollingAllowed, setIsScrollingAllowed] = useState<boolean>(true);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  let scrollWithMouseTrigger = false;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isScrollingAllowed) return;

      switch (event.key) {
        case "ArrowUp":
          selectedComponent === 1
            ? setIsFadingOut(false)
            : setIsFadingOut(true);
          setScrollCoolDown();
          setTimeout(() => {
            setSelectedComponent((prev) => Math.max(prev - 1, 1));
            setIsFadingOut(false);
          }, 750);
          break;
        case "ArrowDown":
          selectedComponent === 4
            ? setIsFadingOut(false)
            : setIsFadingOut(true);
          setScrollCoolDown();
          setTimeout(() => {
            setSelectedComponent((prev) => Math.min(prev + 1, 4));
            setIsFadingOut(false);
          }, 750);
          break;
        default:
          break;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isScrollingAllowed || scrollWithMouseTrigger) return;
      if ((event.deltaY < 0 && event.deltaY > -10) || event.deltaY === -100) {
        selectedComponent === 1 ? setIsFadingOut(false) : setIsFadingOut(true);
        // Scrolling up
        setScrollCoolDown();
        setTimeout(() => {
          setSelectedComponent((prev) => Math.max(prev - 1, 1));
          setIsFadingOut(false);
        }, 750);
      } else if (
        (event.deltaY > 0 && event.deltaY < 10) ||
        event.deltaY === 100
      ) {
        // Scrolling down
        selectedComponent === 4 ? setIsFadingOut(false) : setIsFadingOut(true);
        setScrollCoolDown();
        setTimeout(() => {
          setSelectedComponent((prev) => Math.min(prev + 1, 4));
          setIsFadingOut(false);
        }, 750);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      setTouchStartY(touch.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isScrollingAllowed || touchStartY === null) return;

      const touch = event.touches[0];
      const touchEndY = touch.clientY;

      if (touchStartY - touchEndY > 50 && touchStartY - touchEndY < 80) {
        // Swiping up
        selectedComponent === 4 ? setIsFadingOut(false) : setIsFadingOut(true);
        setScrollCoolDown();
        setTimeout(() => {
          setSelectedComponent((prev) => Math.min(prev + 1, 4));
          setIsFadingOut(false);
        }, 750);
      } else if (touchEndY - touchStartY > 50 && touchEndY - touchStartY < 80) {
        // Swiping down
        selectedComponent === 1 ? setIsFadingOut(false) : setIsFadingOut(true);
        setScrollCoolDown();
        setTimeout(() => {
          setSelectedComponent((prev) => Math.max(prev - 1, 1));
          setIsFadingOut(false);
        }, 750);
      }
    };

    const setScrollCoolDown = () => {
      setIsScrollingAllowed(false);
      scrollWithMouseTrigger = true;
      setTimeout(() => {
        setIsScrollingAllowed(true);
        scrollWithMouseTrigger = false;
      }, 1500); // 1.5 seconds timeout
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
        return <Hero isFadingOut={isFadingOut} />;
      case 2:
        return <Install isFadingOut={isFadingOut} />;
      case 3:
        return <TimeLine isFadingOut={isFadingOut} />;
      case 4:
        return <AboutUs isFadingOut={isFadingOut} />;
      default:
        return <Hero isFadingOut={isFadingOut} />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="justify-center items-center flex flex-col">
        {renderComponent()}
      </div>
    </div>
  );
};

export default HomePage;
