import React, { Fragment, useState } from "react";
import MainLeftPart from "./Left/MainLeftPart";
import Image from "next/image";
import Link from "next/link";
import MessageMe from "./MessageMe";

const Landing = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid min-h-screen grid-cols-7 lg:grid-cols-10">
      <div className="col-span-4 lg:col-span-3">
        <MainLeftPart />
      </div>
      <div className="col-span-3 relative lg:col-span-4 w-full h-full">
        <Image
          className="h-full grayscale w-full duration-1000 hover:grayscale-0 object-cover "
          alt="profile"
          src="/img/profile.jpg"
          width={500}
          height={500}
          quality={100}
          priority
        />
        <div className="flex w-full sm:hidden bg-white backdrop:blur-xl bg-opacity-60 justify-center gap-3 absolute bottom-2">
          {socials?.map((social: any, index: number) => (
            <div key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <div className="w-6 sm:w-8">
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
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://coinsbit.io/img/background/dot_rename.svg)",
        }}
        className="bg-[#1b1919] text-white col-span-7 lg:col-span-3 h-full flex flex-col px-3 sm:px-10 gap-5 justify-center py-10 sm:py-0 items-start">
        <h1 className="tracking-[7px] text-xl">ABSTRACT</h1>
        <p className="text-sm">
          Hello There I am mohamed sharkawey a front end developer. A team
          player with over two years of experience began and continued my
          journey with continuous learning mindset passionate enough to build
          cool UX and try to be creative enough to make them outstanding, I feel
          Comfortable in agile environments and ready to make a positive impact
          to my team.
          <br />
          Fell Free to Check out My{" "}
          <a className="text-accent font-semibold" href="/resume.pdf" download>
            Resume
          </a>
          .
        </p>
        <div className="flex w-full flex-col gap-3">
          {list?.map((element: any, key: number) => (
            <Fragment>
              {element.link ? (
                <Link key={key} href={element.link}>
                  <div className="flex group hover:bg-[#272525] py-2 duration-500 sm:px-5 cursor-pointer w-full gap-3">
                    <div className="w-10">
                      <Image
                        className="h-full grayscale w-full duration-1000  object-cover "
                        alt="profile"
                        src={element.img}
                        width={500}
                        height={500}
                        quality={100}
                        priority
                      />
                    </div>
                    <h3 className="uppercase text-sm group-hover:tracking-[6px] duration-500 tracking-[7px] self-center">
                      {element.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div onClick={() => setOpen(true)} key={key}>
                  <div className="flex group hover:bg-[#272525] py-2 duration-500 sm:px-5 cursor-pointer w-full gap-3">
                    <div className="w-10">
                      <Image
                        className="h-full grayscale w-full duration-1000  object-cover "
                        alt="profile"
                        src={element.img}
                        width={500}
                        height={500}
                        quality={100}
                        priority
                      />
                    </div>
                    <h3 className="uppercase text-sm group-hover:tracking-[6px] duration-500 tracking-[7px] self-center">
                      {element.title}
                    </h3>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <MessageMe isOpen={open} setIsOpen={setOpen} />
    </div>
  );
};

export default Landing;

const list = [
  {
    title: "projects",
    img: "/projectsicon.svg",
    link: "/projects",
  },
  {
    title: "experience",
    img: "/code.svg",
    link: "/experience",
  },
  {
    title: "contact me",
    img: "/message.svg",
    modal: "true",
  },
];

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
