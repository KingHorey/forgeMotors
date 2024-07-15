import { Transition } from "react-transition-group";
import { useState } from "react";

export default function navBar(): JSX.Element {
  return (
    <nav className="mb-10 relative w-screen">
      <ul className="flex ">
        <Logo />
        <SideBar />
      </ul>
    </nav>
  );
}

export function Logo() {
  return (
    <li className="ml-auto mr-auto">
      <a href="/" className="text-2xl font-bold">
        <img
          src="/public/images/240712_03h01m37s_screenshot.png"
          className="w-44"
          title="Home"
        ></img>
      </a>
    </li>
  );
}

export function SideBar() {
  const [sideBarStatus, sideBarToggle] = useState(false);
  const handleSideBar = () => {
    console.log("Toggled");
    sideBarToggle(!sideBarStatus);
  };

  return (
    <>
      <li
        className="w-fit mr-[10px] flex items-center cursor-pointer"
        onClick={handleSideBar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M24,2v3H0V2H24ZM0,23H8v-3H0v3ZM0,14H16v-3H0v3Z" />
        </svg>
      </li>
      <Transition in={sideBarStatus} timeout={300}>
        {(state) => (
          <div
            style={{
              transition: "transform 0.3s ease-in-out",
              transform:
                state === "entered" ? "translateX(0%)" : "translateX(100%)",
            }}
            className="absolute h-screen xs:w-full lg:w-[20vw] flex flex-column z-10 right-0 bg-[#C0C0C0] justify-center p-5"
          >
            <div className="max-h-fit h-fit">
              <div onClick={handleSideBar} className="">
                <CloseSideBar />
              </div>
              <div className="mt-10">
                <UserDetails />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}

function UserDetails() {
  // const [sideBar, setSideBar] = useState(false);
  // const closeSideBar = () => {
  //   console.log(sideBar);
  //   setSideBar(!sideBar);
  // };
  return (
    <div className="z-[999] relative h-fit">
      <p className="text-3xl font-bold crimson">Welcome</p>
      <p className="mt-auto text-center">
        Got Questions?{" "}
        <a href="#" className="text-md text-gray-400">
          Contact us
        </a>
      </p>
    </div>
  );
}

export function CloseSideBar() {
  return (
    <div
      className=""
      // onClick={closeSideBar}
    >
      <div className="w-10 h-10 ml-auto text-xl cursor-pointer select-none  items-center absolute top-0 right-0 hover:text-gray-500 transition-colors duration-300 z-[999]">
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
    </div>
  );
}

export function Footer() {
  return <footer className="bg-black text-slate-50"></footer>;
}
