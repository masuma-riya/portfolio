interface Link {
  url: string;
  icon: React.ReactNode;
  tech: React.ReactNode;
}

interface Props {
  title: string;
  des: string;
  src: string;
  links: Link[];
  features: string[];
}

const ProjectsCard = ({ title, des, src, links, features }: Props) => {
  return (
    <div className="w-full p-4 xl:px-9 h-auto xl:py-8 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-blue-800 duration-300 cursor-pointer">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <div className="mt-6">
            <div className="flex justify-start">
              {links.map((link, index) => (
                <span
                  key={index}
                  className="text-gray-300 text-sm px-2 py-1 rounded-md flex items-center"
                >
                  {link.tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <h4 className="text-lg mb-4 italic uppercase text-gray-500 font-normal">
              Features
            </h4>
            <ul className="list-disc list-inside">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
