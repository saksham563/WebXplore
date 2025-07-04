import React from "react";

// Utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// ContentCard Component for rendering text + image
const ContentCard = ({ title, category, image, logo, projectoverview }) => {
  return (
    <>
    <div
      className="relative flex flex-col items-start justify-between rounded-lg p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"20vh"
      }}
    >
      {image && <div className="opacity-70 rounded-lg absolute inset-0 bg-black" />}
      <div className="relative z-10">
        {category && <div className="text-xs text-gray-200">{category}</div>}
        {title && (
          <div className="mr-2 text-lg font-bold leading-tight tracking-wide text-red-300">
            {title}
          </div>
        )}
        {projectoverview && (
          <div className="mt-2 text-sm text-white">{projectoverview}</div>
        )}
      </div>
      {logo && (
        <img src={logo} alt={title} className="z-10 h-9 rounded-lg mt-4" />
      )}
    </div>
  </>
  );
};

// SimpleImageCard component for rendering only image
const SimpleImageCard = ({ image }) => {
  return (
    <div
      className="relative flex w-full flex-col items-start justify-between rounded-lg p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

const HoverRevealSlip = ({ show }) => {
  const common = "absolute flex w-full h-full [backface-visibility:hidden]";

  return (
    <>
    
    <div className={cn("group relative h-60 w-52 [perspective:1000px]")}>
      {/* Back cover - static */}
      <div className={cn("absolute inset-0 h-full w-80 rounded-lg bg-gray-50 shadow-md")}></div>

      {/* Card container with slight book opening effect on hover */}
      <div
        className={cn(
          "relative z-50 h-80 w-80 origin-left mt-16 transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-30deg)]"
        )}
      >
        {/* Front side of the card */}
        <div className={cn("h-80 w-80 rounded-lg bg-black shadow-md", common)}>{show}</div>
      </div>

      {/* Sliding link/tab coming out from behind */}
      <div
        className={cn(
          "z-1 absolute bottom-0 flex h-56 w-72 ml-14 -translate-x-10 transform items-start justify-start rounded-r-lg bg-green-600  pl-24 pt-2 text-xs font-bold text-white transition-transform duration-300 ease-in-out [backface-visibility:hidden] group-hover:translate-x-0 group-hover:rotate-[5deg]"
        )}
      >
        <div className="-rotate-90 whitespace-nowrap ml-36 pb-16 pr-9">CLICK TO READ</div>
      </div>
    </div>
    </>
  );
};

// Main CaseStudyCard Component
export default function ProjectCards({
  title,
  category,
  link,
  image,
  logo,
  type,
  projectoverview,
}) {
  return (
    <div className="flex gap-8">
      <a href={link} className="block">
        <HoverRevealSlip
          show={
            type === "content" ? (
              <ContentCard
                title={title}
                category={category}
                image={image}
                logo={logo}
                projectoverview={projectoverview} // Pass the project overview here
              />
            ) : (
              <SimpleImageCard image={image} />
            )
          }
        />
      </a>
    </div>
    
  );
}
