import React from "react";
import { DraggableCardBody,DraggableCardContainer } from "../ui/DraggableCard";

export function DraggableCardDemo() {
  const items = [
    {
      title: "",
      image: "/img/g3.jpg",
      className: "absolute top-8 left-[8%] rotate-[-6deg]",
    },
    {
      title: "",
      image: "/img/g1.jpg",
      className: "absolute top-20 left-[18%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/img/g2.jpg",
      className: "absolute top-10 left-[40%] rotate-[8deg]",
    },
    {
      title: "",
      image: "/img/g4.jpg",
      className: "absolute top-24 left-[56%] rotate-[10deg]",
    },
    {
      title: "",
      image: "/img/g5.jpg",
      className: "absolute top-16 right-[12%] rotate-[2deg]",
    },
    {
      title: "",
      image: "/img/g6.jpg",
      className: "absolute top-40 left-[6%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/img/g7.jpg",
      className: "absolute top-32 left-[30%] rotate-[4deg]",
    },
    {
      title: "",
      image: "/img/g8.jpg",
      className: "absolute top-44 right-[24%] rotate-[-5deg]",
    },
    {
      title: "",
      image: "/img/g9.jpg",
      className: "absolute top-56 left-[44%] rotate-[6deg]",
    },
    {
      title: "",
      image: "/img/g10.jpg",
      className: "absolute top-60 right-[10%] rotate-[-3deg]",
    },
    {
      title: "",
      image: "/img/g11.jpg",
      className: "absolute top-72 left-[16%] rotate-[5deg]",
    },
    {
      title: "",
      image: "/img/g12.jpg",
      className: "absolute top-80 right-[36%] rotate-[-8deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <img
        src="/img/sha.jpg"
        alt="Love message"
        className="absolute left-1/2 top-[28%] h-36 w-36 -translate-x-1/2 rounded-full object-cover shadow-lg ring-4 ring-white/60 dark:ring-neutral-800"
      />
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Hey Beautiful Soul I love you 💌
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
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
