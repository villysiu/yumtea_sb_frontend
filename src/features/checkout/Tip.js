import { useState } from "react";
import { USDollar } from "../../app/global";

const Tip = ({ tip, setTip, subtotal }) => {
  const tipArray = [10, 15, 20, "other"];
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null); // To track selected tip percentage

  const handleChange = (e) => {
    const valStr = e.target.value;
    const regex = /^(\d+(\.\d{0,2})?)?$/; // Allow max 2 decimal places

    if (regex.test(valStr) || valStr === "") {
      const parsed = valStr === "" ? 0.0 : parseFloat(valStr);
      setTip(parsed);
      setSelectedTip("other"); // Highlight "Other" when custom tip entered
    }
  };

  const handleTip = (percentage) => {
    const calculatedTip = Math.round((subtotal * percentage) / 100 * 100) / 100;
    setTip(calculatedTip);
    setShowCustomInput(false);
    setSelectedTip(percentage);
  };

  return (
    <div className="checkout_tip">
      <div className="checkout_summary_line">
        <div>Tip</div>
        <div>{USDollar.format(tip)}</div>
      </div>

      <div className="tipbox_wrapper">
        <div className="tipbox_container">
          {tipArray.map((percentage, idx) => {
            if (percentage === "other") {
              return showCustomInput ? (
                <div key={idx} className="tipbox input-dollar active">
                  <input
                    type="text"
                    placeholder="0.00"
                    value={tip === 0 ? "" : tip}
                    onChange={handleChange}
                    onFocus={(e) => e.target.select()}
                    
                  />
                </div>
              ) : (
                <div
                  key={idx}
                  className={`tipbox right ${selectedTip === "other" ? "active" : ""}`}
                  onClick={() => {
                    setShowCustomInput(true);
                    setSelectedTip("other");
                  }}
                >
                  Other
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`tipbox ${idx === 0 ? "left" : ""} ${selectedTip === percentage ? "active" : ""}`}
                onClick={() => handleTip(percentage)}
              >
                {percentage}%
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tip;
