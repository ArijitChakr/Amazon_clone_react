import BackwordArrowIcon from "../assets/backwardArrow";
import ForwardArrowIcon from "../assets/forwardArrow";
import { useState } from "react";
import { Link } from "react-router-dom";
import { gridContents, images } from "../assets/store/homepageContent";

export default function ProductCardContainer() {
  return (
    <div className="w-full lg:w-[82.7%]  lg:px-6 backdrop-blur-2xl  xl:mt-96 mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-1 md:gap-5">
      {gridContents.map((item, index) => (
        <ProductCard
          key={index}
          image={item.image}
          subHeading={item.subHeading}
          heading={item.heading}
        />
      ))}
      <ProductSlider />
      <ProductSlider />
    </div>
  );
}

function ProductCard({ image, subHeading, heading }) {
  return (
    <div className="bg-white px-2 py-3 md:px-4 md:py-6 flex flex-col justify-between">
      <h2 className="m-1 text-left font-bold text-xl">{heading}</h2>
      <div className="grid grid-cols-2 gap-1">
        {Array(4)
          .fill(1)
          .map((x, index) => (
            <Link to="/products" key={index} className="m-1">
              <img src={image} />
              <p className="text-xs">{subHeading}</p>
            </Link>
          ))}
      </div>
      <Link
        to="/products"
        className="mt-8 l-1 text-lg md:text-sm text-blue-700"
      >
        Explore all
      </Link>
    </div>
  );
}

function ProductSlider() {
  return (
    <div className="h-72 bg-white col-span-1 md:col-span-2  xl:col-span-4 p-6 hidden md:flex flex-col relative">
      <h2 className="text-xl font-bold">
        Up to 60% off | Unique products from stores nearby
        <span className="ml-2 text-sm font-normal text-blue-700">
          <Link to="/products">See all</Link>
        </span>
      </h2>
      <Slider images={images} />
    </div>
  );
}

function Slider({ images }) {
  const [current, setCurrent] = useState(0);

  function prevSlide() {
    current === 0 ? setCurrent(1) : setCurrent(current - 1);
  }

  function nextSlide() {
    current === 1 ? setCurrent(0) : setCurrent(current + 1);
  }
  return (
    <div className="overflow-hidden relative ">
      <div
        className={`flex transition ease-in-out duration-400 `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} key={index} className=" m-2 w-64" />
        ))}
      </div>
      <div className="flex justify-between absolute h-full w-full top-16 right-5 left-1">
        <button
          onClick={prevSlide}
          className="bg-white  h-20 rounded pl-1 flex justify-center items-center"
        >
          <BackwordArrowIcon />
        </button>

        <Link to="/products" className="w-full h-full"></Link>
        <button
          onClick={nextSlide}
          className="bg-white  h-20 rounded flex justify-center items-center"
        >
          <ForwardArrowIcon />
        </button>
      </div>
    </div>
  );
}
