import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTempUnitContext from "../../contexts/currentTempUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTempUnit } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__text toggle-switch__F ${
          currentTempUnit === "F" ? "toggle-switch__text_color_white" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__C ${
          currentTempUnit === "C" ? "toggle-switch__text_color_white" : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
