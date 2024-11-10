import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className="text-xl font-normal">WELCOME TO MY WORLD !</h4> */}
        <h1 className="text-3xl font-bold text-white">
          Hey, I'm{" "}
          <span className="text-designColor capitalize">Masuma Riya</span>
        </h1>
        <h2 className="text-[33px] font-bold text-white">
          A <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-sm font-bodyFont leading-6 tracking-wider">
          I'm working on Front end Development. I've also basic knowledge on
          Back end Development. Skilled in creating responsive, user-friendly
          interfaces and robust server-side applications. Problem-solving
          abilities and a passion for staying updated with the latest trends and
          technologies in Web Development.
        </p>
      </div>

      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon text-4xl text-blue-700">
            <FaReact />
          </span>
          <span className="bannerIcon text-4xl text-yellow-600">
            <FaJs />
          </span>
          <span className="bannerIcon text-4xl text-red-800">
            <FaHtml5 />
          </span>
          <span className="bannerIcon text-4xl text-blue-600">
            <FaCss3Alt />
          </span>
          <span className="bannerIcon text-4xl text-blue-700">
            <SiTailwindcss />
          </span>

          <span className="bannerIcon text-4xl text-yellow-600">
            {" "}
            <IoLogoFirebase />
          </span>
          <span className="bannerIcon text-4xl">
            <SiFigma />
          </span>
        </div>
      </div>
      {/* resume  */}
      <div>
        <a
          href="https://drive.google.com/uc?export=download&id=1iJZuKg1cYEDBlrmDhGqQGLtZwYPlFRTH"
          className="bg-designColor text-white text-base font-semibold py-3 px-4 rounded"
        >
          Download Resume
        </a>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
