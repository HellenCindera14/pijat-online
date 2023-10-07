import { API } from './../../libs/api';
import { useEffect, useState } from 'react';
import { ISeller } from '../../interfaces/admin/ISeller';
export function useSeller() {
    const [sellerMale, setSellerMale] = useState<ISeller[]>([])
    const [sellerFemale, setSellerFemale] = useState<ISeller[]>([])

    async function getSellerMale() {
        try {
            const res = await API.get('/kape/L')
            setSellerMale(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function getSellerFemale() {
        try {
            const res = await API.get('/kape/L')
            setSellerFemale(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSellerMale()
        getSellerFemale()
    }, [])

    return { sellerMale, sellerFemale }
}