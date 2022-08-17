import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onClickSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option === selected) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onClickSelect(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field" style={{ marginTop: 20 }}>
        <label className="label">Select a {label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          style={{ marginTop: 5 }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        {/* <div style={{ fontSize: 20, color: selected.value, marginTop: 40 }}>
          This text is {selected.value} color
        </div> */}
      </div>
    </div>
  );
};

export default Dropdown;
