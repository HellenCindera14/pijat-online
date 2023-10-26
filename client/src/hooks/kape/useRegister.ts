import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { API, setAuthToken } from "../../libs/api";
import { IRegister } from "../../interfaces/kape/IAuth";
export function useRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      const res = await API.post("/auth/kape/register", form);
      setAuthToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/kape/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return { handleChange, handleRegister };
}
