import React, { useState } from "react";

type Props = {
  buttons: string[];
  submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const NavButtons: React.FC<Props> = ({ buttons, submit }) => {
  const [clickedId, setClickedId] = useState<number>(0);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setClickedId(id);
    submit(event);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          id={i.toString()}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={`py-2 px-4 me-3 text-dark bg-white
            ${
              i === clickedId
                ? "border-bottom border-3 border-success"
                : "nav-item"
            }
          `}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default NavButtons;
