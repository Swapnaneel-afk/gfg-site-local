import React, { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

const AnimatedHamburgerMenu = () => {
  const blobRef = useRef(null);
  const blobPathRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    let height = window.innerHeight;
    let curveX = 10;
    let curveY = 0;
    let targetX = 0;
    let xitteration = 0;
    let yitteration = 0;

    const easeOutExpo = (
      currentIteration,
      startValue,
      changeInValue,
      totalIterations
    ) => {
      return (
        changeInValue *
          (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
        startValue
      );
    };

    const hoverZone = 150;
    const expandAmount = 20;

    const svgCurve = () => {
      if (curveX > mousePosition.x - 1 && curveX < mousePosition.x + 1) {
        xitteration = 0;
      } else {
        if (menuExpanded) {
          targetX = 0;
        } else {
          xitteration = 0;
          if (mousePosition.x > hoverZone) {
            targetX = 0;
          } else {
            targetX = -(
              ((60 + expandAmount) / 100) *
              (mousePosition.x - hoverZone)
            );
          }
        }
        xitteration++;
      }

      if (curveY > mousePosition.y - 1 && curveY < mousePosition.y + 1) {
        yitteration = 0;
      } else {
        yitteration = 0;
        yitteration++;
      }

      curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
      curveY = easeOutExpo(yitteration, curveY, mousePosition.y - curveY, 100);

      const anchorDistance = 200;
      const curviness = anchorDistance - 40;

      const newCurve2 = `M60,${height}H0V0h60v${
        curveY - anchorDistance
      }c0,${curviness},${curveX},${curviness},${curveX},${anchorDistance}S60,${curveY},60,${
        curveY + anchorDistance * 2
      }V${height}z`;

      if (blobPathRef.current) {
        blobPathRef.current.setAttribute("d", newCurve2);
      }

      if (blobRef.current) {
        blobRef.current.style.width = `${curveX + 60}px`;
      }

      if (hamburgerRef.current) {
        hamburgerRef.current.style.transform = `translate(${curveX}px, ${curveY}px)`;
      }

      window.requestAnimationFrame(svgCurve);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.requestAnimationFrame(svgCurve);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [menuExpanded, mousePosition]);

  return (
    <div className="relative">
      <svg id="blob" ref={blobRef} className="absolute top-0 left-0 h-full">
        <path id="blob-path" ref={blobPathRef} fill="rgba(0,0,0,0.1)" />
      </svg>
      <div
        ref={hamburgerRef}
        className="hamburger"
        onMouseEnter={() => setMenuExpanded(true)}
        onMouseLeave={() => setMenuExpanded(false)}
      >
        <Menu className="text-white" />
      </div>
    </div>
  );
};

export default AnimatedHamburgerMenu;
