import { useState } from "react";
import { LargeButton, ProductToggle, ProductCatalogue } from "./buttons";

export function Message(props: { name?: string }): JSX.Element {
  const [_, showCatalogue] = useState(false);
  const handleCatalogue = () => {
    showCatalogue(!_);
  };

  if (props) {
    return (
      <>
        <div className="lg:h-[600px] w-screen relative">
          <div className="md:w-screen h-screen absolute top-0">
            <div className="absolute left-0 right-0 m-auto top-[-15%] h-fit w-fit z-[-999]">
              <p className="text-[10rem] text-center relative tracking-[3rem] orbitron font-bold uppercase">
                Bronco
              </p>
            </div>
            <div onClick={handleCatalogue}>
              {_ ? (
                <ProductCatalogue onClass={_} />
              ) : (
                <ProductToggle name="View Cars" />
              )}
            </div>
            <div className="h-full w-[80%] m-auto p-0">
              <img
                src="/images/ford_bronco_resized.png"
                className="w-full h-screen object-cover m-auto object-center relative"
              ></img>
              <div className="relative bottom-20 ml-auto w-fit mr-auto text-slate-50">
                <LargeButton name="Explore" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="h-screen">
      <p className="text-5xl font-bold text-center">SUV</p>
      <div className="md:w-[70%] h-[100%]">
        <img src="/src/assets/ford_bronco.png" className="w-fit "></img>
      </div>
    </div>
  );
}

export function SideBar(props: { name?: string }): JSX.Element {
  return (
    <div className="bg-green-500">
      <p>{props.name}</p>
    </div>
  );
}
export default Message;
