import { useState } from "react";

function useToggle(initialState = false) {
  const [lights, setState] = useState(initialState);

  const toggleSwitch = () => {
    setState((prevState) => {
      document.body.classList.toggle("lights-on");
      prevState = !prevState;
    });

    if (window.location.pathname === "/") {
      document.querySelector(".welcome").classList.toggle("welcome-lights-on");
      let letters = document.querySelectorAll(".letter");
      [...letters].forEach((letter) =>
        letter.classList.toggle("letter-lights-on")
      );
    }
  };
  return [lights, toggleSwitch];
}

export default useToggle;
