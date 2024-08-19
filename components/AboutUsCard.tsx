import Image from "next/image";
interface AboutUsCardProps {
  name: string;
  image: string;
  position: string;
  caption: string;
}
const AboutUsCard = ({ name, image, position, caption }: AboutUsCardProps) => {
  return (
    <div className="bg-[rgb(0,2,22)] rounded-lg shadow-lg p-5 mx-4 mb-4 ">
      <div className="flex justify-between items-center mb-4">
        {/* position tag */}
        <div className="bg-[#006000] rounded-xl flex justify-center items-center text-center uppercase">
          <p className="text-xs p-1.5">{position}</p>
        </div>
        {/* image and name */}
        <div className="flex flex-row items-center">
          <h4 className="mr-2">{name}</h4>
          <Image
            src={image}
            alt={name}
            height={60}
            width={60}
            className="rounded-full"
          />
        </div>
      </div>
      <div>
        <p className="text-justify text-sm" style={{ direction: "rtl" }}>
          {caption}
        </p>
      </div>
    </div>
  );
};
export default AboutUsCard;
