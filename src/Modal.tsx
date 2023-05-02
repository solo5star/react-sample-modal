import React, { PropsWithChildren, useState } from "react";
import "./style.css";

export const MyModal = ({ trigger, children }: PropsWithChildren<{ trigger: React.ReactElement }>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpenModal })}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
