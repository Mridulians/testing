import { useState } from "react";
import Data from "./Acc";
import AccItem from "./AccItem";
import "./Accordion.css";

const Accordion = () => {
  const [active, setActive] = useState(null);

  function handleToggle(index) {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  }
  return (
    <div className="conntainer py-[4rem] px-[1rem] sm:px-[2rem] xl:px-[10rem] mt-[4rem]">
      <h1 className="uppercase text-[2rem] sm:text-[2.5rem]">
        <span className="text-orange-500">Bmail</span> is now part of Bharat
        Workspace
      </h1>
      <p className="text-[1.5rem] font-sans font-semibold text-center text-white mb-[2rem]">
        Collaborate faster, from any device, anytime, all in one place.
      </p>
      <ul className="accordion">
        {Data.map((item) => (
          <AccItem
            key={item.id}
            item={item}
            active={active}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
