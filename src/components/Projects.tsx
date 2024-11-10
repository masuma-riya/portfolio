import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import HungerRescue from "../assets/images/projects/hunger-rescue.png";
import TechnoZen from "../assets/images/projects/techno-zen.png";
import Foodie from "../assets/images/projects/foodie.png";
import { FadeIn } from "./FadeIn";
import { FaLink } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiNodejsSmall, DiMongodb } from "react-icons/di";

// const htmlIcon = <FaHtml5 />;
// const cssIcon = <FaCss3Alt />;
// const jsIcon = <FaJs />;
// const reactIcon = <FaReact />;
// const tailwind = <SiTailwindcss />;
// const firebase = <IoLogoFirebase />;
// const node = <DiNodejsSmall />;
// const mongodb = <DiMongodb />;
// const express = <SiExpress />;

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Hunger Rescue"
            des="Hunger Rescue is a community-driven food donation platform designed to facilitate food sharing and surplus reduction. It provides a user-friendly interface where donors can effortlessly add food items and manage their donations."
            src={HungerRescue}
            links={[
              {
                url: "https://hunger-rescue.web.app/",
                icon: <FaLink />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <FaReact className="text-2xl text-blue-700" />
                    <FaJs className="text-2xl text-yellow-600" />
                    <SiTailwindcss className="text-2xl text-blue-700" />
                  </div>
                ),
              },
              {
                url: "https://github.com/masuma-riya/hunger-rescue-client",
                icon: <BsGithub />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <FaHtml5 className="text-2xl text-red-600" />
                    <IoLogoFirebase className="text-2xl text-yellow-600" />
                    <FaCss3Alt className="text-2xl text-blue-600" />
                  </div>
                ),
              },
              {
                url: "https://github.com/masuma-riya/hunger-rescue-server",
                icon: <BsGithub />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <DiNodejsSmall className="text-2xl text-green-500" />
                    <SiExpress className="text-2xl text-white" />
                    <DiMongodb className="text-2xl text-green-700" />
                  </div>
                ),
              },
            ]}
            features={[
              "Food Donation and Request",
              "Dynamic Food Status",
              "Request Fulfillment",
            ]}
          />
          <ProjectsCard
            title="Techno Zen"
            des="Techno Zen is an online platform where tech enthusiasts can showcase and browse various tech products such as Web applications, like Web Application, AI tools, Games application etc. It features role-based authentication for User, Admin, and Moderator roles."
            src={TechnoZen}
            links={[
              {
                url: "https://techno-zen.web.app/",
                icon: <FaLink />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <FaReact className="text-2xl text-blue-700" />
                    <FaJs className="text-2xl text-yellow-600" />
                    <SiTailwindcss className="text-2xl text-blue-700" />
                  </div>
                ),
              },
              {
                url: "https://github.com/masuma-riya/techno-zen-client",
                icon: <BsGithub />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <FaHtml5 className="text-2xl text-red-600" />
                    <IoLogoFirebase className="text-2xl text-yellow-600" />
                    <FaCss3Alt className="text-2xl text-blue-600" />
                  </div>
                ),
              },
              {
                url: "https://github.com/masuma-riya/techno-zen-server",
                icon: <BsGithub />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <DiNodejsSmall className="text-2xl text-green-500" />
                    <SiExpress className="text-2xl text-white" />
                    <DiMongodb className="text-2xl text-green-700" />
                  </div>
                ),
              },
            ]}
            features={[
              "Role-Based Authentication",
              "Upvote & Downvote System",
              "Payment Integration",
            ]}
          />
          <ProjectsCard
            title="Foodie Zone"
            des="This web application facilitates food ordering, featuring role-based access control for Admin and User roles. Authentication leverages Firebase and JWT for secure user sessions, restricting access to authenticated users. Stripe integration ensures seamless payment processing."
            src={Foodie}
            links={[
              {
                url: "https://bistro-boss-9bbbc.web.app/",
                icon: <FaLink />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <FaReact className="text-2xl text-blue-700" />
                    <FaJs className="text-2xl text-yellow-600" />
                    <SiTailwindcss className="text-2xl text-blue-700" />
                  </div>
                ),
              },
              {
                url: "https://github.com/masuma-riya/foodie-client",
                icon: <BsGithub />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <FaHtml5 className="text-2xl text-red-600" />
                    <IoLogoFirebase className="text-2xl text-yellow-600" />
                    <FaCss3Alt className="text-2xl text-blue-600" />
                  </div>
                ),
              },
              {
                url: "https://github.com/masuma-riya/foodie-server",
                icon: <BsGithub />,
                tech: (
                  <div className="flex gap-3 items-center">
                    <DiNodejsSmall className="text-2xl text-green-500" />
                    <SiExpress className="text-2xl text-white" />
                    <DiMongodb className="text-2xl text-green-700" />
                  </div>
                ),
              },
            ]}
            features={[
              "Facilitates Food ordering",
              "Role-based access control (Admin, User)",
              "Integrate with Stripe for Payment",
            ]}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
