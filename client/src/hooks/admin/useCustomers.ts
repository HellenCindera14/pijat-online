import { API } from './../../libs/api';
import { useEffect, useState } from 'react';
import { ICustomer } from '../../interfaces/admin/ICustomer';
export function useCustomers() {
    const [customerMale, setCustomerMale] = useState<ICustomer[]>([])
    const [customerFemale, setCustomerFemale] = useState<ICustomer[]>([])

    async function getCustomerMale() {
        try {
            const res = await API.get('/cs/L')
            setCustomerMale(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getCustomerFemale() {
        try {
            const res = await API.get('/cs/P')
            setCustomerFemale(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCustomerMale()
        getCustomerFemale()
    },[])

    return { customerMale, customerFemale }
}