import React from "react";
import { DraggableCardBody,DraggableCardContainer } from "../ui/DraggableCard";

export function DraggableCardDemo() {
  const items = [
    {
      title: "",
      image:
        "/img/g3.jpg",
      className: "absolute top-40 left-[20%] rotate-[-5deg]",
    },
    {
      title: "",
      image:
        "/img/g1.jpg",
      className: "absolute top-70 left-[25%] rotate-[-7deg]",
    },
    {
      title: "",
      image:
        "/img/g2.jpg",
      className: "absolute top-20 left-[40%] rotate-[8deg]",
    },
    {
      title: "",
      image:
        "/img/g4.jpg",
      className: "absolute top-42 left-[55%] rotate-[10deg]",
    },
    {
      title: "",
      image:
        "/img/g5.jpg",
      className: "absolute top-44 right-[35%] rotate-[2deg]",
    },
    {
      title: "",
      image:
        "/img/g6.jpg",
      className: "absolute top-64 left-[45%] rotate-[-7deg]",
    },
    {
      title: "",
      image:
        "/img/g7.jpg",
      className: "absolute top-26 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Hey Beautiful Soul I love you 💌
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
