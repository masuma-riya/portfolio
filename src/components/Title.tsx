interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-xl italic uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-3xl md:text-4xl text-gray-300 font-semibold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
