import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useToggle(initialState = false) {
  let location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  const [lights, setState] = useState(initialState);
  const [currentLocation, setCurrentLocation] = useState("/");

  const toggleSwitch = () => {
    setState((prevState) => {
      document.body.classList.toggle("lights-on");
      prevState = !prevState;
    });

    if (currentLocation === "/") {
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
