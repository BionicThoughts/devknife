import React from "react";

interface ActionRowProps {
    children: string;
    checked: boolean;
    onChange: () => void;
}

const ActionRow: React.FC<ActionRowProps> = ({ children, checked, onChange }) => {
    return (
        <div className="toggle-row flex justify-between items-center text-sm bg-base-100 px-4 py-2 my-2 rounded">
            <span>{children}</span>
            <input
                className="toggle toggle-primary toggle-sm"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default ActionRow;