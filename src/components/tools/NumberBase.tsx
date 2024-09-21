import React, { useState } from "react";
import BaseInput from "../base/BaseInput"; // Assuming you have a styled BaseInput component
import SectionTitle from "../common/SectionTitle";


const NumberBaseConverter: React.FC = () => {
    const [binary, setBinary] = useState<string>("0");
    const [octal, setOctal] = useState<string>("0");
    const [decimal, setDecimal] = useState<string>("0");
    const [hexadecimal, setHexadecimal] = useState<string>("0");

    const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBinary(value);
        if (isValidBinary(value)) {
            setDecimal(parseInt(value, 2).toString(10));
            setOctal(parseInt(value, 2).toString(8));
            setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
        }
    };

    const handleOctalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setOctal(value);
        if (isValidOctal(value)) {
            setDecimal(parseInt(value, 8).toString(10));
            setBinary(parseInt(value, 8).toString(2));
            setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
        }
    };

    const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setDecimal(value);
        if (isValidDecimal(value)) {
            setBinary(parseInt(value, 10).toString(2));
            setOctal(parseInt(value, 10).toString(8));
            setHexadecimal(parseInt(value, 10).toString(16).toUpperCase());
        }
    };

    const handleHexadecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHexadecimal(value);
        if (isValidHexadecimal(value)) {
            setDecimal(parseInt(value, 16).toString(10));
            setBinary(parseInt(value, 16).toString(2));
            setOctal(parseInt(value, 16).toString(8));
        }
    };

    const isValidBinary = (value: string) => /^[01]+$/.test(value) || value === "0";
    const isValidOctal = (value: string) => /^[0-7]+$/.test(value) || value === "0";
    const isValidDecimal = (value: string) => /^\d+$/.test(value) || value === "0";
    const isValidHexadecimal = (value: string) => /^[0-9A-Fa-f]+$/.test(value) || value === "0";

    return (
        <div className="w-full h-full overflow-scroll px-2">
            <SectionTitle>Binary</SectionTitle>
            <BaseInput
                type="text"
                value={binary}
                onChange={handleBinaryChange}
                className="mb-1 w-full"
                placeholder="Enter Binary"
            />
            <SectionTitle>Ocatal</SectionTitle>
            <BaseInput
                type="text"
                value={octal}
                onChange={handleOctalChange}
                className="mb-1 w-full"
                placeholder="Enter Octal"
            />
            <SectionTitle>Decimal</SectionTitle>
            <BaseInput
                type="text"
                value={decimal}
                onChange={handleDecimalChange}
                className="mb-1 w-full"
                placeholder="Enter Decimal"
            />
            <SectionTitle>Hexadecimal</SectionTitle>
            <BaseInput
                type="text"
                value={hexadecimal}
                onChange={handleHexadecimalChange}
                className="mb-1 w-full"
                placeholder="Enter Hexadecimal"
            />
        </div>
    );
};

export default NumberBaseConverter;