import React, { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";
import Button from "./Button";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div>
      <Button
        size="sm"
        variant="secondary"
        onClick={handleCopyClick}
        className="py-1"
      >
        {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
      </Button>
    </div>
  );
};

export default CopyToClipboard;
