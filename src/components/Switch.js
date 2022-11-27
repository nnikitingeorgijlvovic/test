import Switch from "@mui/material/Switch";
import useToggle from "../customhooks/useToggle";

const label = { inputProps: { "aria-label": "lights-switch", tabIndex: "1" } };

function LightsSwitch() {
  const [_, toggleSwitch] = useToggle();

  const handleLights = () => toggleSwitch();

  return (
    <div className="switch-container">
      <Switch {...label} defaultChecked onClick={handleLights} />
    </div>
  );
}

export default LightsSwitch;
