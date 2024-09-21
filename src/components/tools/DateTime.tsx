import React, { useState, useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import BaseInput from "../base/BaseInput";
import Button from "../common/Button";

import DatePicker from "../base/DatePicker";
// import TabSwitcher from "../common/TabsSwitcher";
import CopyToClipboard from "../common/CopyToClipboard";
import { Clock } from "../base/Clock";
import TimePicker from "../base/TimePicker";

// Define a type for the time object
// const tabs = [{ id: "gmt", label: "GMT", }, { id: "local", label: "Local" }];

interface Time {
  hour: number;
  minute: number;
  second: number;
}

const DateTime: React.FC = () => {
  const current_time = Date.now();

  const [currentTime, setCurrentTime] = useState<number>(current_time);
  const [timestampInput, setTimestampInput] = useState<number>(Math.floor(currentTime / 1000));
  const [currentHMS, setCurrentHMS] = useState(getCurrentTime(currentTime));
  // const [activeTab, setActiveTab] = useState<string>("local");

  const dt = new Date(currentTime).toLocaleString();
  const isoTime = new Date(currentTime).toISOString();


  function getCurrentTime(currentT: number): Time {
    const dt = new Date(currentT)
    const seconds = dt.getSeconds();
    const minutes = dt.getMinutes();
    const hours = dt.getHours(); // Use 24-hour format or 12-hour format as needed

    return {
      hour: hours,
      minute: minutes,
      second: seconds,
    };
  }


  const updateFields = (newTime: number) => {
    setCurrentTime(newTime);
    setTimestampInput(Math.floor(newTime / 1000));
    setCurrentHMS(getCurrentTime(newTime))
  };

  const handleNowClick = () => {
    const now = Date.now();
    updateFields(now)
    console.log("now time");
  };

  const handleTimestampChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;

    if (newValue === "") {
      updateFields(0);
    } else {
      const newTimestamp = parseInt(newValue, 10);

      if (!isNaN(newTimestamp)) {
        if (newTimestamp < 172308308499) {
          const newTime = newTimestamp * 1000;
          updateFields(newTime);
        }
      }
    }
  };

  const handleTimeChange = (newTime: string) => {
    const [hours, minutes] = newTime.split(':').map(Number);

    if (!isNaN(hours) && !isNaN(minutes)) {
      const updatedTime = new Date(currentTime);
      updatedTime.setHours(hours);
      updatedTime.setMinutes(minutes);

      const newTimestamp = updatedTime.getTime();
      updateFields(newTimestamp);
    }
  };


  const handleDateChange = (newDate: Date) => {
    const updatedDate = new Date(currentTime);
    updatedDate.setDate(newDate.getDate())
    updatedDate.setMonth(newDate.getMonth())
    updatedDate.setFullYear(newDate.getFullYear())
    updateFields(updatedDate.getTime())
  };

  const getTimeString = () => {
    const { hour, minute } = getCurrentTime(currentTime);
    return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
  };


  useEffect(() => {
    updateFields(currentTime)
  }, [currentTime]);


  return (
    <div className="w-full h-full overflow-scroll px-2 ">
      <div className="graphics h-[18rem] flex justify-around items-center">
        {/* Date Picker */}
        <div className="date h-[17rem] w-[17rem]">
          <DatePicker onChange={handleDateChange} />
        </div>

        {/* Time Picker */}
        <div className="clock h-[17rem] w-[17rem] flex flex-col justify-around items-center">
          <Clock hour={currentHMS.hour} minute={currentHMS.minute} second={currentHMS.second} />
          <div className="flex justify-center w-[17rem]">
            <TimePicker inputTime={getTimeString()} onChange={handleTimeChange} />
            <Button
              size="custom"
              className="py-[.2rem] w-[6rem] bg-primary"
              onClick={handleNowClick}
            >
              Now
            </Button>
          </div>
          {/* <TabSwitcher
            tabs={tabs}
            activeTabId={activeTab}
            onTabChange={setActiveTab}
          /> */}
        </div>
      </div>

      {/* Date and Time section */}
      <div className="section-row flex justify-between items-end mt-2 ">
        <SectionTitle>Date</SectionTitle>
        <div className="right">
          <CopyToClipboard text={dt} />
        </div>
      </div>
      <BaseInput className="w-full my-[.1rem]" value={dt} readOnly />

      {/* Unix Timestamp Section */}
      <div className="section-row flex justify-between items-end mt-2">
        <SectionTitle>Unix Timestamp</SectionTitle>
        <div className="right">
          <CopyToClipboard text={timestampInput.toString()} />
        </div>
      </div>
      <div className="section-row flex justify-between items-center">
        <BaseInput
          value={timestampInput}
          className="w-full my-[.1rem]"
          onChange={handleTimestampChange}
        />
      </div>

      {/* ISO Time Section */}
      <div className="section-row flex justify-between items-end mt-2">
        <SectionTitle>ISO</SectionTitle>
        <div className="right">
          <CopyToClipboard text={isoTime} />
        </div>
      </div>
      <div className="section-row flex justify-between items-center">
        <BaseInput value={isoTime} className="w-full my-[.1rem]" readOnly />
      </div>
    </div>
  );
};

export default DateTime;
