import { useState } from "react";

function Years() {
  const [isYearsFocused, setIsYearsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  const formatNumber = (num) => {
    if (num < 0) return 0;
    if (num > 125) return 0;
  };

  const handleChange = (e) => {
    if (!isNaN(e.target.value)) {
      const formattedValue = formatNumber(e.target.value);
      setDisplayValue(formattedValue);
    }
  };

  return (
    <>
      <div id="years">
        <label htmlFor="getYears">Mortgage term</label>
        <div
          id="yearsCase"
          style={{
            borderColor: isYearsFocused
              ? "var(--colorLime)"
              : "var(--colorSlate700)",
          }}
        >
          <input
            type="number"
            name="Term"
            id="getYears"
            className="inputNumber"
            onFocus={() => setIsYearsFocused(true)}
            onBlur={() => setIsYearsFocused(false)}
            value={displayValue}
            onChange={handleChange}
            required
          />
          <label
            id="yearsText"
            htmlFor="getYears"
            style={{
              backgroundColor: isYearsFocused
                ? "var(--colorLime)"
                : "var(--colorSlate100)",
              color: isYearsFocused
                ? "var(--colorSlate900)"
                : "var(--colorSlate700)",
            }}
          >
            years
          </label>
        </div>
      </div>
    </>
  );
}

export default Years;
