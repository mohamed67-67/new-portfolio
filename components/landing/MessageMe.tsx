import React, { useRef, useState } from "react";
import Modal from "../Modal";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MessageMe = ({ isOpen, setIsOpen }: IModal) => {
  const form: any = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_nawu9ld",
        "template_pick31s",
        form.current,
        "RYSfWOs9GmMxDsidm"
      )
      .then(
        (result: any) => {
          setIsOpen(false);
          setLoading(false);
          toast.success("Message Sent...Thank You!");
        },
        (error: any) => {
          toast.error("Oops!!...Something went wrong...");
          setLoading(false);
        }
      );
  };

  return (
    <Modal closeIcon isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <form
        className="w-full bg-black px-5 py-12 rounded-lg bg-opacity-30 backdrop-blur-xl flex flex-col gap-3"
        onSubmit={sendEmail}
        action=""
        ref={form}>
        <input
          className="bg-transparent text-white  border rounded focus:border-0 p-3"
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          className="bg-transparent text-white  border rounded focus:border-0 p-3"
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <textarea
          className="bg-transparent text-white  border rounded focus:border-0 p-3"
          name="message"
          placeholder="Message"
          rows={10}
        />
        <button
          disabled={loading}
          className="mt-3 text-white bg-white duration-500 shadow shadow-white bg-opacity-50 backdrop-blur-lg self-center px-5 py-1 font-semibold rounded-lg"
          type="submit">
          {loading ? (
            <div className="w-5 h-5 border-b-black border-2 rounded-full animate-spin" />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </Modal>
  );
};

export default MessageMe;
