interface ServiceCardProps {
  title: string;
  caption: string;
}

const ServiceCard = ({ title, caption }: ServiceCardProps) => {
  return (
    <div className="bg-black bg-opacity-30 custom-backdrop-blur rounded-lg shadow-lg max-w-lg p-5 w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80">
      <div className="flex flex-col h-full">
        <h2 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">{title}</h2>
        <div className="flex-grow flex items-center">
          <p
            className="text-2xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl text-justify"
            style={{ direction: "rtl" }}
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
