import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  { label: "Russian", value: "ru" },
];

const Translate = () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter text</label>
          <input
            style={{ marginTop: 5 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
      </div>
      <Dropdown
        label="language"
        selected={selected}
        onClickSelect={setSelected}
        options={options}
      />
      <Convert text={text} selected={selected} />
    </div>
  );
};

export default Translate;
