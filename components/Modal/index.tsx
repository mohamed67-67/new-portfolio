import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  minHeight?: number;
  maxHeight?: number;
  initialFocusRef?: React.RefObject<any>;
  children?: React.ReactNode;
  padding?: number;
  maxWidth?: number;
  className?: string;
  isMax?: boolean;
  isFullWidth?: boolean;
  backgroundColor?: string;
  scrollable?: boolean;
  noPadding?: boolean;
  customWidth?: string | null;
  closeIcon?: boolean;
  outerClassName?: string;
}

export default function Modal({
  isOpen,
  onDismiss,
  minHeight = 0,
  maxHeight = 90,
  initialFocusRef,
  children,
  padding = 5,
  maxWidth = 500,
  isMax,
  isFullWidth,
  backgroundColor,
  scrollable,
  noPadding,
  className,
  customWidth,
  closeIcon,
  outerClassName,
}: ModalProps) {
  let refDiv = useRef(null);
  const [isMobile, setIsMobile] = useState<boolean>();

  //* width check
  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={refDiv}
          as="div"
          onClose={onDismiss}
          className={`fixed inset-0 z-[1000] ${
            !scrollable ? "overflow-y-hidden" : "overflow-y-auto"
          } backdrop-blur-md ${className}`}>
          <Dialog.Overlay className="fixed inset-0 bg-black backdrop-blur-md opacity-30" />
          <div
            className={`flex items-center overflow-y-auto justify-center ${
              !scrollable && "h-screen"
            } ${!isMax && "sm:px-4"}`}
            ref={refDiv}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div
                className={`transition-all transform ${isMax && "h-full z-50"}`}
                style={{
                  width: isMobile
                    ? `97%`
                    : isFullWidth || isMax
                    ? "100vw"
                    : customWidth
                    ? customWidth
                    : "65vw",
                  maxWidth: isFullWidth || isMax ? "100%" : `${maxWidth}px`,
                }}>
                <div
                  className={` ${isMax ? "h-full" : "p-px"}  w-full rounded ${
                    !noPadding && "bg-tertiary"
                  }`}>
                  <div
                    className={`${
                      !isMax && !noPadding && "rounded sm:p-6"
                    } flex flex-col w-full h-full mb-10  ${outerClassName}`}
                    style={{ backgroundColor }}>
                    <div
                      style={{
                        minHeight: isMax ? "100vh" : `${minHeight}vh`,
                        maxHeight: scrollable ? "auto" : `${maxHeight}vh`,
                      }}>
                      {closeIcon && (
                        <div
                          onClick={onDismiss}
                          className="absolute z-[500] bg-white w-7 h-7  rounded-full flex items-center justify-center text-xs cursor-pointer hover:rotate-90 duration-700 top-1 right-3 sm:top-8 sm:right-8 font-semibold">
                          &#x2715;
                        </div>
                      )}
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
