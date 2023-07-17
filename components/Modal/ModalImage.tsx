import Image from "next/image";

const ModalImage = () => {
  return (
    // Primary Image
    <div className="flex flex-1 flex-col gap-3">
      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg ">
        <Image
          src="/hero.png"
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      {/* Smaller Images */}
      <div className="flex gap-3">
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
          <Image
            src="/hero.png"
            alt="Car Model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
          <Image
            src="/hero.png"
            alt="Car Model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
          <Image
            src="/hero.png"
            alt="Car Model"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
