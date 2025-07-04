"use client";
import React from "react";
import { Services } from "./Services";
import ser1 from '../../assets/ser1.png';
import ser2 from '../../assets/ser2.png';
import ser3 from '../../assets/ser3.png';
import ser4 from '../../assets/ser4.png';
import ser5 from '../../assets/ser5.png';
import ser6 from '../../assets/ser6.png';

export function ServicesData() {
  return <div style={{marginTop:"-30px"}}>
    
    <Services products={products} />
    </div>
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: ser1
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    ser2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
    ser1,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
    ser4,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    ser5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    ser6,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
    ser1,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
    ser2,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
    ser5,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
    ser4,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    ser5,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
    ser6,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
    ser1,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
    ser2,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
    ser5,
  },
];
