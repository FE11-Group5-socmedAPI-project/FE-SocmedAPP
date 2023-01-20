import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";

import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { FC } from "react";

interface AkunProps {
  name: string;
  email: string;
  phone_number: number;
  editName: string;
  editphonenumber: number;
  editEmail: string;
  hapusAkun: (event: React.MouseEvent<HTMLButtonElement>) => void;
  updateAkun: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setEditName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setEditPhoneNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setEditEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Cardakun: FC<AkunProps> = ({
  name,
  email,
  phone_number,
  updateAkun,
  editEmail,
  editName,
  editphonenumber,
  setEditEmail,
  setEditName,
  setEditPhoneNumber,
  hapusAkun,
  ...props
}) => {
  return (
    <div
      className="box-border h-auto w-86 p-4 border-1 bg-white rounded-lg px-10"
      {...props}
    >
      <p className="text-xl font-bold">Your Account</p>
      <div className="flex flex-row gap-24 pt-5 pb-2">
        <p className="">Name </p>
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div className="flex flex-row gap-9 pt-5 pb-2">
        <p className="">Number Phone </p>
        <p className="text-lg font-semibold">{phone_number}</p>
      </div>
      <div className="flex flex-row gap-24 pt-5 pb-2">
        <p className="">Gmail </p>
        <p className="text-lg font-semibold">{email}</p>
      </div>
      <div className="flex flex-row gap-4 pt-3">
        <form onSubmit={updateAkun}>
          <label htmlFor="my-modal-6" className="btn">
            <FiEdit2 className="" />
          </label>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit Account</h3>
              <div className="flex flex-row gap-20 pb-3">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs bg-[#4b5563] text-white"
                  value={editName}
                  onChange={setEditName}
                />
              </div>
              <div className="flex flex-row gap-5 pb-3">
                <p>Number Phone</p>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input w-full max-w-xs bg-[#4b5563] text-white"
                  value={editphonenumber}
                  onChange={setEditPhoneNumber}
                />
              </div>
              <div className="flex flex-row gap-20 pb-3">
                <p>Gmail</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs bg-[#4b5563] text-white"
                  value={editEmail}
                  onChange={setEditEmail}
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn">
                  update
                </button>
                <label htmlFor="my-modal-6" className="btn">
                  CANCEL
                </label>
              </div>
            </div>
          </div>
        </form>

        <label htmlFor="my-modal" className="btn">
          <BsTrash />
        </label>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <p className="py-4">Hapus data anda</p>
            <div className="modal-action">
              <button onClick={hapusAkun} className="btn">
                Hapus
              </button>
              <label htmlFor="my-modal" className="btn">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardakun;
