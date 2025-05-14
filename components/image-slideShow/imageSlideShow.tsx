import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./imageSlideShow.module.css";

import burgerImg from "@/assets/burger.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import curryImg from "@/assets/curry.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const Images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function () {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((currImgIndex) =>
        currImgIndex > Images.length - 1 ? 0 : currImgIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className = {classes.slideshow}>
      {Images.map((image, index) => {
        return (
          <Image
            src={image["image"]}
            key={index}
            alt={image.alt}
            className={currentImgIndex === index ? classes.active : ""}
          />
        );
      })}
    </div>
  );
}
