import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://coinsbit.io/img/background/dot_rename.svg)",
      }}
      className="bg-[#1b1919] p-5 sm:p-10">
      <Link className="w-fit" href="/" passHref>
        <div
          style={{ textShadow: "2px 5px 5px #b38736" }}
          className="w-10 fixed top-5 cursor-pointer z-[200] grayscale animate-pulse">
          <Image
            alt="back"
            src="/back.png"
            width={50}
            height={50}
            quality={100}
            className="object-contain"
          />
        </div>
      </Link>
      <h1 className="text-2xl sm:text-4xl font-semibold tracking-[7px] uppercase text-white text-center py-14 sm:py-20">
        Experience
      </h1>
      <div className="flex justify-center min-h-screen gap-3">
        <div className="w-[1px] bg-white" />
        <div className="flex flex-col py-10 gap-[50px] w-11/12 max-w-[500px]">
          {experincesData?.map((comp: any, index: number) => (
            <div key={index} className="flex relative flex-col gap-3">
              <div className="absolute -left-8 sm:-left-10 border bg-[#3b3a36] flex items-center justify-center p-1 overflow-hidden -top-2 w-10 h-10 sm:w-14 sm:h-14 rounded-full ">
                <Image
                  alt={comp.name}
                  src={comp.icon}
                  width={50}
                  height={50}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-[#3b3a36] items-center flex flex-col sm:items-start px-3 sm:px-10 pb-10 rounded-xl ml-3 sm:ml-10 text-white">
                <div
                  className={comp.name === "Tech For Good" ? "w-32" : "w-52"}>
                  <Image
                    alt={comp.name}
                    src={comp.logo}
                    width={50}
                    height={50}
                    quality={100}
                    layout="responsive"
                    className="object-contain px-1 aspect-square"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <a
                    href={comp.link}
                    target="_blank"
                    className="underline"
                    rel="noopener noreferrer">
                    <h3 className="text-xl text-center font-semibold">
                      {comp.name}
                    </h3>
                  </a>
                  <h5 className="text-center">{comp.title}</h5>
                  <p className="text-center">{comp.date}</p>
                  <p className="text-center">{comp.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

const experincesData = [
  {
    icon: "/companies/monicon.png",
    logo: "/projectsCover/montech.png",
    name: "Montech Studios Inc",
    title: "Front End Developer",
    date: "Dec 2021 - Jul 2023",
    place: "Remotely - USA",
    link: "https://montech.io/",
  },
  {
    icon: "/companies/micon.png",
    logo: "/companies/minlogo.png",
    name: "Minority programmers association",
    title: "Full Stack Developer Intern",
    date: "Jul 2021 - Oct 2021",
    place: "Remotely - USA",
    link: "https://www.minorityprogrammers.com/",
  },
  {
    icon: "/companies/techlogo.png",
    logo: "/companies/techlogo.png",
    name: "Tech For Good",
    title: "Full Stack Developer Intern",
    date: "Jul 2021 - Oct 2021",
    place: "Remotely - USA",
    link: "https://www.techforgoodinc.org/",
  },
];
