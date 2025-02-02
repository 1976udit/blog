"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8t4u7gg", "template_20dl2yj", form.current, {
        publicKey: "BKjhkpxsKoeQETuFN",
      })
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast("Failed to send email.");
        }
      );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 animate-bounce dark:text-white">
        Contact Us
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto dark:bg-gray-800"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-900"
          >
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
