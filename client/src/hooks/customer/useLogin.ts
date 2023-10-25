import { useNavigate } from "react-router";
import { ILogin } from "../../interfaces/customer/IAuth";
import { ChangeEvent, useState } from "react";
import { API, setAuthToken } from "../../libs/api";
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
      const res = await API.post("/auth/cs/login", form);
      setAuthToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/cs/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return { handleChange, handleLogin };
}
