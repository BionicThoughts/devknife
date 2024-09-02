import React, { useState, useEffect } from "react";

interface TimePickerProps {
  inputTime: string
  onChange?: (value: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ inputTime, onChange }) => {

  const [time, setTime] = useState<string>(inputTime);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTime(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setTime(inputTime)
  }, [inputTime]);


  return (
    <input
      type="time"
      id="time"
      className="input input-sm rounded-sm leading-none w-[7rem]"
      value={time}
      onChange={handleChange}
      required
    />
  );
};

export default TimePicker;
