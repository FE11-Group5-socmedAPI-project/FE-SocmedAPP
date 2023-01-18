import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "../../utils/Swal";
import { handleAuth } from "../../utils/redux/reducers/reducer";
import LayoutHome from "../../components/LayoutHome";
import Button from "../../components/Button";

function Login() {
  const MySwal = withReactContent(Swal);
  const [, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      .post("login", body)
      .then((res) => {
        const { data, message } = res.data;
        setCookie("token", data.token, { path: "/" });
        dispatch(handleAuth(true));
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <LayoutHome>
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
                      Don't have a account yet ?
                    </a>
                    <button className="btn bg-[#64748b] w-32 px-12 rounded-full text-black">
                      register
                    </button>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}

export default Login;
