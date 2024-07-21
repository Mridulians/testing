/* eslint-disable react/prop-types */
import { useRef } from "react";

const AccItem = ({ item, active, handleToggle }) => {
  const currentRef = useRef();
  return (
    <li className="accordion-item">
      <div>
        <h2 onClick={() => handleToggle(item.id)} className="accordion-title">
          {item.title} <span>{item.id === active ? "-" : "+"}</span>
        </h2>
      </div>

      <div
        ref={currentRef}
        className={`accordion-content ${active === item.id ? "active" : ""}`}
        style={
          active === item.id
            ? { height: currentRef?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{item.content}</p>
      </div>
    </li>
  );
};

export default AccItem;
