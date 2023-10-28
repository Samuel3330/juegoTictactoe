import React from "react";

//Componente de las casillas
//Se definen los props que seran pasados al componente padre
const Square = ({ children, isSelected, updateBoard, index }) => {
  //Determinamos el turno con 'is-selected'
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
