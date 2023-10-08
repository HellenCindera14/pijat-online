import { API } from "../../libs/api";
import { useEffect, useState } from "react";
import { IPijetUrut } from "../../interfaces/customer/IPijet";

export function usePijetUrut(district: string) {
  const [pijetUrutLaki, setPijetUrutLaki] = useState<IPijetUrut[]>([]);
  const [pijetUrutWanita, setPijetUrutWanita] = useState<IPijetUrut[]>([]);

  async function getPijetUrutLaki() {
    try {
      const res = await API.get(`/kape/L?district=${district}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setPijetUrutLaki(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPijetUrutWanita() {
    try {
      const res = await API.get(`/kape/P?district=${district}`, {
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
  }, [district]);

  return { pijetUrutLaki, pijetUrutWanita };
}
