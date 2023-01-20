import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "../utils/Swal";
import LayoutHome from "../components/LayoutHome";
import Button from "../components/Button";

function Register() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [numberPhone, setNumberPhone] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (name && numberPhone && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, numberPhone, email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name: name,
      numberPhone: numberPhone,
      email,
      password,
    };

    axios
      .post("http://13.229.98.76/register", body)
      .then((res) => {
        const { message, data } = res.data;

        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  return (
    <div className=" w-full h-full ">
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#282f70]">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="pb-10">
                  <h1 className="text-white text-2xl font-bold">Register</h1>
                </div>
                <div className="flex flex-col">
                  <div className="form-control flex flex-row gap-12 pb-4">
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered bg-[#cbd5e1]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-control flex flex-row pb-4">
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="number"
                      className="input input-bordered bg-[#cbd5e1]"
                      value={numberPhone}
                      onChange={(e) => setNumberPhone(e.target.valueAsNumber)}
                      placeholder="Your number phone"
                    />
                  </div>
                  <div className="form-control flex flex-row gap-12 pb-4">
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered bg-[#cbd5e1]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form-control flex flex-row gap-7 pb-4">
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      className="input input-bordered bg-[#cbd5e1]"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                    />
                  </div>
                </div>

                <div className="form-control place-items-center ">
                  <button className="btn bg-[#64748b] w-32 px-12 rounded-full text-black">
                    register
                  </button>
                </div>
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Already have an Account ?
                  </a>
                  <button className="btn bg-[#64748b] w-32 px-12 rounded-full text-black">
                    <Link to="/login">login</Link>
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
