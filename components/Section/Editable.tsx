import { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  value: string;
  onUpdate: (value: string) => void;
}

const Editable: FC<Props> = ({ children, value: initialValue, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    onUpdate(value);
    setIsEditing(false);
  };

  return isEditing ? (
    <input value={value} onChange={(e) => setValue(e.target.value)} autoFocus onBlur={onBlur} />
  ) : (
    <div onClick={() => setIsEditing(true)}>{children}</div>
  );
};

export default Editable;
