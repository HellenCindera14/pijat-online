import { API, setAuthToken } from "../../libs/api";
import { useNavigate } from "react-router";
import { ChangeEvent, useState } from "react";
import { ILogin } from "../../interfaces/kape/IAuth";

export function useLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const res = await API.post("/auth/kape/login", form);
      setAuthToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/kape/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return { handleChange, handleLogin };
}
