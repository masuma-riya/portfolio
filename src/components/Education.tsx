import { IoPersonOutline, IoSchoolOutline } from "react-icons/io5";

const Education = () => {
  const hscCompletion =
    "Completed Higher Secondary Certificate (HSC) in 2023 from Business Studies with GPA-4.56!";
  const currentEducation =
    "Currently pursuing Bachelor of Business Administration (BBA) degree in Management from Business Studies :)";

  return (
    <section
      id="education"
      className="w-full text-center py-12 border-b-[1px] border-b-gray-900"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-xl italic uppercase font-light text-designColor tracking-wide mb-4">
          Educational Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full px-4 py-6 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
            <IoSchoolOutline className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-normal mb-4">HSC Completion</h3>
              <p className="lg:text-base text-gray-500 italic">
                {hscCompletion}
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-6 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
            <IoPersonOutline className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-normal mb-4">Current Education</h3>
              <p className="lg:text-base italic text-gray-500">
                {currentEducation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
