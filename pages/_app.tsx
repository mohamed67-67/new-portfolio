import Image from "next/image";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const Icon = useMemo(() => {
    return (
      <div className="w-5 flex-grow">
        <Image
          alt="icon"
          src="message.svg"
          layout="responsive"
          objectFit="contain"
          width={50}
          height={50}
          priority
          quality={100}
        />
      </div>
    );
  }, []);

  return (
    <div className="max-w-[1750px] mx-auto ">
      <Component {...pageProps} />
      <ToastContainer theme="dark" icon={Icon} />
    </div>
  );
}
