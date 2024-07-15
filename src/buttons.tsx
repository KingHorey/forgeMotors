import { useState } from "react";

export function LargeButton(props: { name?: string }): JSX.Element {
  return (
    <button className="bg-slate-500 text-xl font-bold pt-2 pb-2 pr-6 pl-6 rounded-full hover:bg-teal-900 transition-all ">
      {props.name}
    </button>
  );
}

export function smallButton(props: { name?: string }): JSX.Element {
  return (
    <button className="bg-slate-500 text-xl font-bold p-2 rounded-full hover:bg-red-900 transition-all">
      {props.name}
    </button>
  );
}

export function ProductToggle(props: { name: string }): JSX.Element {
  return (
    <div className="bg-gray-800 text-xl font-bold pt-2 pb-2 pr-6 pl-6 text-slate-50  hover:bg-black hover:text-slate-50 transition-colors duration-300 rotate-90 w-fit absolute left-[-3%] top-[50%] z-50 h-fit cursor-pointer -translate-y-32 select-none">
      {props.name}
    </div>
  );
}

export function ProductCatalogue(props: { onClass: boolean }): JSX.Element {
  const [_, showCatalogue] = useState(true);
  const handleCatalogue = () => {
    showCatalogue(!_);
  };
  if (props.onClass) {
    return (
      <div className="w-screen h-screen bg-[#F5F7F8] absolute z-[999] top-[-100px] visible-bar">
        <div
          className="w-10 h-10 ml-auto text-xl cursor-pointer select-none relative items-center top-10 right-2 hover:text-gray-500 transition-colors duration-300"
          onClick={handleCatalogue}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </div>
        <img
          src="/public/images/forge_motors_transparent.png"
          className="w-44 mr-auto ml-auto top-10"
          title="Home"
        ></img>
        <p className="lg:text-6xl font-bold text-center dm__serif tracking-widest">
          Made Just for you
        </p>
        <Products name="test" image="djwe" />
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen bg-[#F5F7F8] absolute z-[999] top-[-100px] sidebar">
        <div
          className="w-10 h-10 ml-auto text-xl cursor-pointer select-none relative items-center top-10 right-2 hover:text-gray-500 transition-colors duration-300"
          onClick={handleCatalogue}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </div>
        <img
          src="/public/images/forge_motors_transparent.png"
          className="w-44 mr-auto ml-auto top-10"
          title="Home"
        ></img>
        <p className="lg:text-6xl font-bold text-center dm__serif tracking-widest">
          Made Just for you
        </p>
        <Products name="test" image="djwe" />
      </div>
    );
  }
}

function Products(props: { name: string; image: string }) {
  return (
    <>
      <div>
        <img src={props.name}></img>
        <p>props.name</p>
        <div>View Details</div>
        <div>Get a Quote</div>
      </div>
    </>
  );
}
