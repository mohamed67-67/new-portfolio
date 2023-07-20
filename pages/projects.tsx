import Link from "next/link";
import React, { useState } from "react";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Lottie from "lottie-react";
import logo from "../public/gallery.json";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<Array<any>>([]);

  const onOpenGallery = (slides: []) => {
    setSlides(slides);
    setOpen(true);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://coinsbit.io/img/background/dot_rename.svg)",
      }}
      className="bg-[#1b1919]  min-h-screen p-5 flex flex-col">
      <Link className="w-fit" href="/" passHref>
        <p
          style={{ textShadow: "2px 5px 5px #b38736" }}
          className="text-3xl fixed top-5 cursor-pointer animate-ping animate-pulse text-white">
          &#x1F844;
        </p>
      </Link>
      <h1 className="text-2xl sm:text-4xl font-semibold tracking-[7px] uppercase text-white text-center py-10 sm:py-20">
        Latest Projects
      </h1>
      <div className="flex flex-col gap-10">
        {projects?.map((project: any, index: number) => (
          <div
            key={index}
            className="w-full hover:shadow-lg border-opacity-40 bg-[#3b3a3b] hover:shadow-[#47525c] duration-700 rounded-lg overflow-hidden lg:flex-row flex flex-col gap-5 ">
            <div className="max-w-[350px] aspect-square md:max-w-[400px] self-center flex-grow lg:min-w-[350px] lg:max-w-[450px] w-full h-full">
              <Image
                style={{ height: "100%" }}
                className="object-contain"
                alt={project.name}
                src={project.cover}
                width={500}
                height={500}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-between lg:px-0 px-2 py-5 gap-3">
              <h3 className="text-white uppercase text-xl text-center lg:text-left sm:text-2xl lg:text-4xl font-bold">
                {project.name}{" "}
                {!project.admin && (
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.link}>
                    <span className="pl-2 sm:text-lg animate-pulse underline text-accent">
                      Link
                    </span>
                  </a>
                )}
              </h3>
              <p className="text-sm sm:text-lg text-white text-center lg:text-left w-11/12">
                {project.desc}
              </p>
              <div
                onClick={() => onOpenGallery(project.slides)}
                className=" flex flex-col items-center justify-center gap-2 sm:w-max cursor-pointer relative bg-opacity-70 backdrop-blur-[20px] ">
                <div className="w-20 self-center">
                  <Lottie
                    color="green"
                    className="relative"
                    animationData={logo}
                    loop={true}
                  />
                </div>
                <p className="text-accent animate-pulse w-max text-xs  font-semibold ">
                  Open App Gallery
                </p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start px-2 gap-1">
                {project?.stack?.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="bg-accent font-bold text-white py-1 sm:py-0 px-2 rounded">
                    <p className="text-xs sm:text-base ">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </div>
  );
};

export default Projects;

const projects = [
  {
    name: "Montech Studios",
    cover: "/projectsCover/montech.png",
    desc: "I built the new version website of My previous company, started with static website then we needed to add new features like make the meduim blogs dynamic, montech projects case studies with password and ask for permission so I built this feature with firebase and email js system. we needed to add dynamic content for Montech services and new vacancies so I used strapi CMS which was nice and got me back to the back end a little bit. The website was built with next.js and tailwind and other nice tech stack.",
    link: "https://www.montech.io/",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Axios",
      "html parser",
      "firebase",
      "strapi",
      "Email Js",
      "mailchimp subscribe",
      "React query",
      "Formik",
      "React slick",
    ],
    slides: [
      { src: "/slides/mon/mon1.png" },
      { src: "/slides/mon/mon2.png" },
      { src: "/slides/mon/mon3.png" },
      { src: "/slides/mon/mon4.png" },
      { src: "/slides/mon/mon5.png" },
      { src: "/slides/mon/mon6.png" },
      { src: "/slides/mon/mon7.png" },
    ],
  },
  {
    name: "Blok Chess Club",
    cover: "/projectsCover/chesslogo.png",
    desc: "Online Chess Game was built over blockchain technology used Hedera for payment, I could build awesome features like Player vs Computer, Player vs Player games, Tournament and chat feature between spectators as well. I used Socket.io to listen and trigger events in various chess games via players and spectators with react chess board and used React query liberary to keep games tables up to date and in sync.",
    link: "https://www.blokchessclub.com/",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Axios",
      "Redux",
      "Socket.io",
      "Chess.js",
      "Ant Design",
      "React query",
      "Formik",
      "React-chessboard",
      "moment",
    ],
    slides: [
      { src: "/slides/block/block1.png" },
      { src: "/slides/block/block2.png" },
      { src: "/slides/block/block3.png" },
      { src: "/slides/block/block4.png" },
      { src: "/slides/block/block5.png" },
      { src: "/slides/block/block6.png" },
      { src: "/slides/block/block7.png" },
      { src: "/slides/block/block8.png" },
      { src: "/slides/block/block9.png" },
      { src: "/slides/block/block10.png" },
      { src: "/slides/block/block11.png" },
    ],
  },
  {
    name: "UgoFlip",
    cover: "/projectsCover/whiteUgoflipLogo.png",
    desc: "Online game based in ghana in which players can buy tickets with mobile money wallet to various types of games then The software draws winners. used Next.js and tailwind in user and admin side used Magic Link for Auth and Signing in.",
    link: "https://www.ugoflip.com/",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Axios",
      "Redux",
      "Socket.io",
      "magic sdk",
      "MUI",
      "React query",
      "Formik",
      "React slick",
    ],
    slides: [
      { src: "/slides/ugo/ugo1.png" },
      { src: "/slides/ugo/ugo2.png" },
      { src: "/slides/ugo/ugo3.png" },
      { src: "/slides/ugo/ugo4.png" },
      { src: "/slides/ugo/ugo5.png" },
      { src: "/slides/ugo/ugo6.png" },
    ],
  },
  {
    name: "Blok Chess Admin",
    cover: "/projectsCover/chessA.png",
    desc: "Block Chess Admin Side to create tournament and mentor revenue, users, games and refund like most admin sides most of it tables to show case data and graphs to represent data.",
    admin: "true",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Axios",
      "Ant Design",
      "React query",
      "Formik",
      "moment",
      "chart.js",
      "file-saver",
      "react-chartjs-2",
    ],
    slides: [
      { src: "/slides/chessA/chessA1.png" },
      { src: "/slides/chessA/chessA2.png" },
      { src: "/slides/chessA/chessA3.png" },
      { src: "/slides/chessA/chessA4.png" },
      { src: "/slides/chessA/chessA5.png" },
    ],
  },
  {
    name: "UgoFlip Admin",
    cover: "/projectsCover/ugoA.png",
    desc: "Ugo Flip admin side for managing all games, transaction, show tickets, users history revenue, refund status and winners like most admin sides most of it tables to show case data.",
    admin: "true",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Axios",
      "Ant Design",
      "React query",
      "Formik",
      "moment",
      "file-saver",
      "redux",
    ],
    slides: [
      { src: "/slides/ugoA/ugoA1.png" },
      { src: "/slides/ugoA/ugoA2.png" },
      { src: "/slides/ugoA/ugoA3.png" },
      { src: "/slides/ugoA/ugoA4.png" },
    ],
  },
];
