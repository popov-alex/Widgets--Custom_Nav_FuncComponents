import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, selected }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const apiRequest = async () => {
      const response = await axios.get(
        "https://translation.googleapis.com/language/translate/v2",
        {
          params: {
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            q: text,
            target: selected.value,
          },
        }
      );
      setResult(response.data.data.translations[0].translatedText);
    };

    const timerId = setTimeout(() => {
      if (text || selected) {
        apiRequest();
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text, selected]);

  return (
    <div className="ui form">
      <div className="ui field">
        <label className="label" style={{ marginTop: 20 }}>
          Here your translation
        </label>
        <div style={{ marginTop: 10 }}>{result}</div>
      </div>
    </div>
  );
};

export default Convert;
