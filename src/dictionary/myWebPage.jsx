import React, { useState } from "react";
import Dict from "./myDict";

const Page = () => {
  const [translatedWord, setTranslatedWord] = useState("");

  const translateWord = (word) => {
    const dictionary = Dict()[0];
    const translated = dictionary[word.toLowerCase()] || "";
    setTranslatedWord(translated);
  };

  const keyPressHandler = (event) => {
    if (event.keyCode === 13) {
      const input = event.target.value;
      translateWord(input);
      event.target.value = "";
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-sm-12 align-self-center">
          <form name="myForm" action="#" method="get">
            <label htmlFor="ftext"></label>
            <input
              type="text"
              id="ftext"
              name="ftext"
              placeholder="Kelime girin ve Enter'a basın"
              onKeyDown={keyPressHandler}
            />
          </form>
        </div>
        <div>
            <p>{translatedWord}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
