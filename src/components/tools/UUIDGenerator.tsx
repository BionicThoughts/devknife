import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SectionTitle from "../common/SectionTitle";
import ActionRow from "../base/ActionRow";
import Button from "../common/Button";
import CopyToClipboard from "../common/CopyToClipboard";


const UuidGenerator: React.FC = () => {
  const [uuid, setUuid] = useState<string>(uuidv4());
  const [excludeDashes, setExcludeDashes] = useState<boolean>(false);
  const [upperCase, setUpperCase] = useState<boolean>(false);

  const generateUuid = () => {
    let newUuid = uuidv4();
    if (excludeDashes) {
      newUuid = newUuid.replace(/-/g, "");
    }
    if (upperCase) {
      newUuid = newUuid.toUpperCase();
    }
    setUuid(newUuid);
  };

  const toggleExcludeDashes = () => {
    setExcludeDashes((prev) => !prev);
  };

  const toggleUppercase = () => {
    setUpperCase((prev) => !prev);
  };

  return (
    <div className="w-full h-full overflow-scroll px-2 ">
      <SectionTitle>Configuration</SectionTitle>
      <div className="space my-2"></div>
      <ActionRow checked={excludeDashes} onChange={toggleExcludeDashes} >
        — &nbsp; Exclude Hyphens
      </ActionRow>

      <ActionRow checked={upperCase} onChange={toggleUppercase} >
        Aa &nbsp; Uppercase
      </ActionRow>
      {/* <h2 className="text-lg font-semibold mb-2">UUID Generator</h2>
      <p className="mb-4">
        <strong>Generated UUID: </strong>
        <span className="font-mono">{uuid}</span>
      </p> */}

      <div className="space my-5"></div>
      <div className="btn-row flex justify-between items-end">
        <SectionTitle>Result</SectionTitle>
        <div className="flex justify-between items-center">
          <Button onClick={generateUuid} variant="primary" size="sm" className="mx-1 py-[.15rem]">
            Generate
          </Button>
          <CopyToClipboard text={uuid} />
        </div>
      </div>
      <div className="space my-2"></div>
      <div className="resultbox bg-base-100 w-100 h-20 p-2 text-sm select-text cursor-text" >
        {uuid}
      </div>
    </div>
  );
};

export default UuidGenerator;