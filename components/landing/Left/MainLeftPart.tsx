import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCode,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const MainLeftPart = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://coinsbit.io/img/background/dot_rename.svg)",
      }}
      className="bg-white relative h-full flex items-center justify-center">
      <div className="lg:h-[75%] max-h-[50vh] lg:max-h-[70vh] relative bg-black backdrop-blur-xl  rounded-xl flex  overflow-hidden bg-opacity-20 w-full duration-1000 shadow-2xl shadow-[#1b1919] -mr-3 lg:-mr-10 z-[200]">
        <div className="flex max-h-[50vh] py-10 flex-wrap overflow-auto SideNav gap-5 justify-center px-2 lg:px-5 items-center w-full self-center">
          {techStackLogos?.map((tech: any, index: number) => (
            <div key={index} className="flex grayscale flex-col gap-2">
              <div className="w-10 self-center">
                <Image
                  alt={tech.name}
                  src={tech.logo}
                  width={50}
                  height={50}
                  layout="responsive"
                  className="object-contain"
                  priority
                />
              </div>
              <p
                style={{ textShadow: "2px 5px 5px #b38736" }}
                className="text-center uppercase font-semibold">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 absolute bottom-2">
        {socials?.map((social: any, index: number) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer">
            <div className="w-8">
              <Image
                alt={social.name}
                src={social.image}
                width={50}
                height={50}
                layout="responsive"
                quality={100}
                priority
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainLeftPart;

const socials = [
  {
    name: "github",
    image: "/socials/github.png",
    link: "https://github.com/mohamed67-67",
  },
  {
    name: "linkedin",
    image: "/socials/linkedin.png",
    link: "https://www.linkedin.com/in/mohamed-sharkawey-01a92712a/",
  },
  {
    name: "instagram",
    image: "/socials/insta.png",
    link: "https://www.instagram.com/mohamedsharkawey/",
  },
];

const techStackLogos = [
  { logo: "/tech/html.png", name: "html" },
  { logo: "/tech/css.png", name: "css" },
  { logo: "/tech/tailwind.png", name: "tailwind" },
  { logo: "/tech/sass.png", name: "sass" },
  { logo: "/tech/mui.png", name: "mui" },
  { logo: "/tech/js.png", name: "js" },
  { logo: "/tech/ts.png", name: "ts" },
  { logo: "/tech/react.png", name: "React" },
  { logo: "/tech/next.png", name: "Next.js" },
  { logo: "/tech/react-q.png", name: "react-q" },
  { logo: "/tech/redux.png", name: "redux" },
  { logo: "/tech/mongo.png", name: "mongo-db" },
  { logo: "/tech/sql.png", name: "sql" },
];
