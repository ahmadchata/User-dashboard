import React, { useState } from "react";
import styles from "/styles/Users.module.scss";

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
          className={`me-4 px-4 pb-1 ${styles.navButton}
            ${i === clickedId && styles.navButtonActive}
          `}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default NavButtons;
