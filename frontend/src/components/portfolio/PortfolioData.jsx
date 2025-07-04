"use client";
import React from "react";
import { Portfolio } from "./Portfolio";
import hi from '../../assets/portimg.png';
import ProjectCardsData from "./ProjectCardsData";

export function PortfolioData() {
  return (
    (<div className=" dark:bg-[#0B0B0F] flex flex-col overflow-hidden">
      <Portfolio
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-White dark:text-white" style={{marginTop:"-120px"}}>
            A Glimpse of Our <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none" >
              Accomplishments
              </span>
            </h1>
          </>
        }>
        <img
          src={hi}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-contain h-full object-left-top"
          draggable={false} />
      </Portfolio>
      <ProjectCardsData/>
    </div>)
  );
}
