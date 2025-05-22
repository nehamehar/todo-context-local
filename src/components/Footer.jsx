import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 mt-8 text-center text-white bg-gray-900">
      <div className="footer-bottom">
        <span className="block mb-2">
          Made with ❤️ by{" "}
          <a
            href="mailto:nehamehar31@gmail.com"
            className="underline hover:text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neha Mehar
          </a>
        </span>
        <a
          href="https://github.com/nehamehar/todo-context-local"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="text-xl text-white fab fa-github hover:text-gray-400"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
