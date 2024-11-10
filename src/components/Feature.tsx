import { FaUserEdit } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do?" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Frontend Development"
            des="Creating user-facing functionalities and interfaces using technologies like React, JavaScript, Tailwind CSS, HTML, CSS"
            icon={<GiArtificialHive />}
          />
          <Card
            title="UI/UX Design"
            des="Designing intuitive and visually appealing user interfaces with a focus on user experience and interaction."
            icon={<FaUserEdit />}
          />
          <Card
            title="Maintenance & Support"
            des="Providing ongoing support, troubleshooting issues, and implementing updates to ensure application reliability."
            icon={<SiProgress />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
