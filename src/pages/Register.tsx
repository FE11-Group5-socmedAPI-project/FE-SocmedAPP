import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "../utils/Swal";
import LayoutHome from "../components/LayoutHome";
import CustomInput from "../components/CustomInput";
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
  };

  return (
    <LayoutHome>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-4 min-w-[40%]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <CustomInput
            id="Name"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            id="inputEmail"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            id="numberPhone"
            type="text"
            placeholder="Number Phone"
            onChange={(e) => setNumberPhone(e.target.valueAsNumber)}
          />
          <CustomInput
            id="inputPassword"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            id="btn-register"
            label="Register"
            loading={loading || disabled}
          />
        </form>
      </div>
    </LayoutHome>
  );
}

export default Register;
