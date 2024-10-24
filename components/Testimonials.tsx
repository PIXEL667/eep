"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-screen rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mb-[100px]">
      <span className="text-4xl md:text-5xl lg:text-7xl text-white mb-2 w-screen flex flex-col items-start ml-[250px] font-bold">Testimonials</span>
      <p className="text-white w-screen flex flex-col items-start ml-[250px]">What people say about us</p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "https://imgs.search.brave.com/wB2-z54kY7jYFoA6hDiyWIVxOjayq8mys4-ObRC0pz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg4LzEy/LzM2MF9GXzYwODg4/MTIyNF80bGhGVXFN/RnkwZ3NOU1psU3Vq/UVVwaU9xdlZIZWps/dy5qcGc",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image: "https://imgs.search.brave.com/wB2-z54kY7jYFoA6hDiyWIVxOjayq8mys4-ObRC0pz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg4LzEy/LzM2MF9GXzYwODg4/MTIyNF80bGhGVXFN/RnkwZ3NOU1psU3Vq/UVVwaU9xdlZIZWps/dy5qcGc",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "https://imgs.search.brave.com/wB2-z54kY7jYFoA6hDiyWIVxOjayq8mys4-ObRC0pz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg4LzEy/LzM2MF9GXzYwODg4/MTIyNF80bGhGVXFN/RnkwZ3NOU1psU3Vq/UVVwaU9xdlZIZWps/dy5qcGc",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "https://imgs.search.brave.com/wB2-z54kY7jYFoA6hDiyWIVxOjayq8mys4-ObRC0pz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg4LzEy/LzM2MF9GXzYwODg4/MTIyNF80bGhGVXFN/RnkwZ3NOU1psU3Vq/UVVwaU9xdlZIZWps/dy5qcGc",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "https://imgs.search.brave.com/wB2-z54kY7jYFoA6hDiyWIVxOjayq8mys4-ObRC0pz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg4LzEy/LzM2MF9GXzYwODg4/MTIyNF80bGhGVXFN/RnkwZ3NOU1psU3Vq/UVVwaU9xdlZIZWps/dy5qcGc",
  },
];
