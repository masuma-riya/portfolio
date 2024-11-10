import { FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src="https://st4.depositphotos.com/1008648/22640/i/450/depositphotos_226405696-stock-photo-businessman-blurred-background-using-thin.jpg"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Masuma Riya</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Expert in Frontend, specializing in creating interactive UI/UX. Basic
          knowledge in Backend Development | Your Satisfaction & Success are my
          top priorities!
        </p>
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801755137153</span>
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">masumariya209@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/masuma-akter-riya/"
            target="_blank"
          >
            <span className="bannerIcon text-2xl">
              <FaLinkedinIn />
            </span>
          </a>
          {/* <a href="https://web.facebook.com/masumariyaaa/" target="_blank">
            <span className="bannerIcon text-2xl">
              <FaFacebookF />
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
