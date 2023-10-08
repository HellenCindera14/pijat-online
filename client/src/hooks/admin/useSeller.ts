import { API } from './../../libs/api';
import { useEffect, useState } from 'react';
import { ISeller } from '../../interfaces/admin/ISeller';
export function useSeller(district: any) {
    const [sellerMale, setSellerMale] = useState<ISeller[]>([])
    const [sellerFemale, setSellerFemale] = useState<ISeller[]>([])

    async function getSellerMale() {
        try {
            const res = await API.get(`/kape/L?district=${district}`,  {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            setSellerMale(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function getSellerFemale() {
        try {
            const res = await API.get(`/kape/P?district=${district}`,  {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            setSellerFemale(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSellerMale()
        getSellerFemale()
    }, [district])

    return { sellerMale, sellerFemale }
}