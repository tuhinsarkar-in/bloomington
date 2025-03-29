import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to  <span className="text-purple">collaborate</span>
           with me?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Connect with me and I will guide you through the process.
        </p>
        <a href="mailto:vbloomv@proton.me">
          <MagicButton
            title="Email Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <hr/>
        <p className="md:text-base text-sm md:font-normal font-light">
          This website is created by Tuhin Sarkar. &nbsp;
               <a href="https://www.tuhinsarkar.in">
          <MagicButton
            title="Visit My Website "
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        </p>

      
      </div>
    </footer>
  );
};

export default Footer;
