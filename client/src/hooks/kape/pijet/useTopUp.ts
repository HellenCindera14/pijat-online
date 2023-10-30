import { ITopUp } from "../../../interfaces/kape/ITopUp";
import { useEffect, useState } from 'react';
import { API } from "../../../libs/api";

export function useTopUp() {
    const [topUp, setTopUp] = useState<ITopUp>()

    async function getTopUp() {
        try {
            const res = await API.patch('/kape/topup')
            setTopUp (res.data)
        }catch (err) {
            console.log(err)
        }
        
    }
    useEffect(() => {
        getTopUp()
    }, [])

    return { topUp }


}

