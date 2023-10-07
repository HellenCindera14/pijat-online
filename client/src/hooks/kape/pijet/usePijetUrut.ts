import { API } from './../../../libs/api';
import { useEffect, useState } from 'react';
import { IPijetUrut } from '../../../interfaces/kape/IPijet';

export function usePijetUrut() {
    const [pijetUrutLaki, setPijetUrutLaki] = useState<IPijetUrut>()
    const [pijetUrutWanita, setPijetUrutWanita] = useState<IPijetUrut>()

    async function getPijetUrutLaki() {
        try {
            const res = await API.get('/kape/male')
            setPijetUrutLaki(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function getPijetUrutWanita() {
        try {
            const res = await API.get('/kape/female')
            setPijetUrutWanita(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPijetUrutLaki()
        getPijetUrutWanita()
    }, [])

    return { pijetUrutLaki, pijetUrutWanita }
}