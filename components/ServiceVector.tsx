import Image from "next/image";

interface ServiceVectorProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceVector = ({
  title,
  description,
  image,
  index,
}: ServiceVectorProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {index % 2 !== 0 ? (
        <div className="flex flex-row w-full space-x-8  lg:space-x-12 xl:space-x-16 2xl:space-x-20 justify-center items-center mb-16 lg:mb-5">
          <Image
            src={image}
            alt={title}
            height={360}
            width={360}
            className="size-14 sm:size-20 lg:size-24 xl:size-28 2xl:size-32"
          />
          <div className="flex flex-col lg:h-full sm:p-5 w-1/2">
            <h2 className="text-sm sm:text-base lg:text-2xl 2xl:text-3xl text-right">
              {title}
            </h2>
            <div className="flex-grow flex items-center">
              <p
                className="text-2xs sm:text-xs lg:text-base xl:text-lg 2xl:text-xl text-justify"
                style={{ direction: "rtl" }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 justify-center items-center mb-16 lg:mb-5">
          <div className="flex flex-col lg:h-full sm:p-5 w-1/2 ">
            <h2 className="text-sm sm:text-sm lg:text-2xl 2xl:text-3xl text-right">
              {title}
            </h2>
            <div className="flex-grow flex items-center">
              <p
                className="text-2xs sm:text-xs lg:text-base xl:text-lg 2xl:text-xl text-justify"
                style={{ direction: "rtl" }}
              >
                {description}
              </p>
            </div>
          </div>
          <Image
            src={image}
            alt={title}
            height={360}
            width={360}
            className="size-14 sm:size-20 lg:size-24 xl:size-28 2xl:size-32"
          />
        </div>
      )}
    </div>
  );
};
export default ServiceVector;
