import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "../utils/Swal";
import { handleAuth } from "../utils/redux/reducers/reducer";
import LayoutHome from "../components/LayoutHome";
import Button from "../components/Button";

function Login() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [, setCookie] = useCookies([
    "token",
    "name",
    "user_id",
    "profile_foto",
  ]);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    axios
      .post("http://13.229.98.76/login", body)
      .then((res) => {
        const { message, data } = res.data;

        if (data) {
          MySwal.fire({
            title: "Success",
            text: message,
            showCancelButton: false,
          });
          setCookie("token", data.token, { path: "/home" });
          setCookie("name", data.name);
          setCookie("profile_foto", data.profile_foto);
          setCookie("user_id", data.id);
        }
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
                  <h1 className="text-white text-2xl font-bold">Login</h1>
                </div>
                <div className="flex flex-col">
                  <div className="form-control flex flex-row gap-12 pb-4">
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Gmail
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
                      type="Password"
                      className="input input-bordered bg-[#cbd5e1]"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="form-control place-items-center ">
                  <button className="btn bg-[#64748b] w-32 px-12 rounded-full text-black">
                    login
                  </button>
                </div>
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    <Link to="/register"> Don't have a account yet ?</Link>
                  </a>
                  <button className="btn bg-[#64748b] w-32 px-12 rounded-full text-black">
                    <Link to="/register">register</Link>
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

export default Login;