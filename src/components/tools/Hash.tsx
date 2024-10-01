import React, { useState } from "react";
import CryptoJS from "crypto-js";
import BaseInput from "../base/BaseInput"; // Assuming you already have BaseInput for styling.
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import CopyToClipboard from "../common/CopyToClipboard";


const hashAlgorithms = [
    "MD5",
    "SHA-1",
    "SHA-224",
    "SHA-256",
    "SHA-384",
    "SHA-512",
    "SHA3-224",
    "SHA3-256",
    "SHA3-384",
    "SHA3-512",
    "RIPEMD-160",
];

const generateHash = (input: string, algorithm: string): string => {
    switch (algorithm) {
        case "MD5":
            return CryptoJS.MD5(input).toString();
        case "SHA-1":
            return CryptoJS.SHA1(input).toString();
        case "SHA-224":
            return CryptoJS.SHA224(input).toString();
        case "SHA-256":
            return CryptoJS.SHA256(input).toString();
        case "SHA-384":
            return CryptoJS.SHA384(input).toString();
        case "SHA-512":
            return CryptoJS.SHA512(input).toString();
        case "SHA3-224":
            return CryptoJS.SHA3(input, { outputLength: 224 }).toString();
        case "SHA3-256":
            return CryptoJS.SHA3(input, { outputLength: 256 }).toString();
        case "SHA3-384":
            return CryptoJS.SHA3(input, { outputLength: 384 }).toString();
        case "SHA3-512":
            return CryptoJS.SHA3(input, { outputLength: 512 }).toString();
        case "RIPEMD-160":
            return CryptoJS.RIPEMD160(input).toString();
        default:
            return "";
    }
};

const HashGenerator: React.FC = () => {
    const [input, setInput] = useState("hello");
    const [algorithm, setAlgorithm] = useState("MD5");
    const [hash, setHash] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAlgorithm(e.target.value);
    };

    const handleGenerateHash = () => {
        setHash(generateHash(input, algorithm));
    };

    return (
        <div className="w-full h-full overflow-scroll px-2 ">
            <SectionTitle>Input</SectionTitle>
            <BaseInput
                type="text"
                value={input}
                className="w-full my-[.1rem] "
                onChange={handleInputChange}
            />
            <div className="mt-2">
                <SectionTitle>Algorithm</SectionTitle>
                <select
                    value={algorithm}
                    onChange={handleAlgorithmChange}
                    className="select select-bordedred rounded select-sm w-full my-[.1rem]"
                >
                    {hashAlgorithms.map((algo) => (
                        <option key={algo} value={algo}>
                            {algo}
                        </option>
                    ))}
                </select>
            </div>
            <div className="space my-4"></div>

            <div className="btn-row flex justify-between items-end">
                <SectionTitle>Result</SectionTitle>
                <div className="flex justify-between items-center">
                    <Button onClick={handleGenerateHash} variant="primary" size="sm" className="mx-1 py-[0.16rem]">
                        Generate
                    </Button>
                    <CopyToClipboard text={hash} />
                </div>
            </div>
            <div className="space my-2"></div>
            <div className="mt-1 w-full">
                <textarea className="textarea textarea-bordered rounded w-full" readOnly value={hash} />
            </div>
        </div>
    );
};

export default HashGenerator;