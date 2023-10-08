import { API } from "../../libs/api";
import { ChangeEvent, useEffect, useState } from "react";
import { IPijetUrut } from "../../interfaces/kape/IPijet";
import { useNavigate } from "react-router-dom";

export function usePijetUrut() {
  const navigate = useNavigate();
  const [pijetUrutLaki, setPijetUrutLaki] = useState<IPijetUrut>();
  const [pijetUrutWanita, setPijetUrutWanita] = useState<IPijetUrut>();
  const [updatePijet, setUpdatePijet] = useState({
    name: "name",
    email: "email",
    address: "address",
    phone: "phone",
    district: "district",
    gender: "gender",
    image: "string",
    isOpened: false,
  });

  function handleChangeUpdateIsOpened(event: ChangeEvent<HTMLInputElement>) {
    setUpdatePijet({
      ...updatePijet,
      isOpened: event.target.value === "true",
    });
  }
  async function handleUpdate(id: number) {
    try {
      const res = await API.post(`/kape/${id}`, updatePijet);
      console.log("ini datanya", res.data);
      navigate("kape/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  async function getPijetUrutLaki() {
    try {
      const res = await API.get("/kape/male", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setPijetUrutLaki(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  // async function getPijetUrutLaki() {
  //   try {
  //     const res = await API.get("/kape/male");
  //     setPijetUrutLaki(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function getPijetUrutWanita() {
    try {
      const res = await API.get("/kape/female", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setPijetUrutWanita(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPijetUrutLaki();
    getPijetUrutWanita();
  }, []);

  return { pijetUrutLaki, pijetUrutWanita, handleChangeUpdateIsOpened, handleUpdate };
}
