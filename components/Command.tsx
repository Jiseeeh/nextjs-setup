import React from "react";

interface CommandProps {
  content: string;
  isFlag?: boolean;
}

const Code: React.FC<CommandProps> = (props) => {
  return props.isFlag ? (
    <span className="text-warning">{props.content}</span>
  ) : (
    <span className="text-accent">{props.content}</span>
  );
};

export default Code;
