import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface CarDetailsProps {
  isOpen: Boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="realtive z-10  "
          onClose={closeModal}
        ></Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
