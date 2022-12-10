import Switch from "@mui/material/Switch";
import useToggle from "../customhooks/useToggle";

function LightsSwitch() {
  const [isOn, toggleSwitch] = useToggle(false);

  const label = {
    inputProps: {
      role: "checkbox",
      tabIndex: "1",
      "aria-hidden": "true",
      "aria-label": "lights switch",
      "aria-checked": isOn,
    },
  };

  const handleLights = () => {
    toggleSwitch();
    label.inputProps["aria-checked"] = isOn;
  };

  return (
    <div className="switch-container">
      <Switch {...label} defaultChecked onClick={handleLights} />
    </div>
  );
}

export default LightsSwitch;
