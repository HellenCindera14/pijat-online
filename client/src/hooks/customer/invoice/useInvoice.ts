import { API } from './../../../libs/api';
import { useEffect, useState } from 'react';
import { IInvoiceHistory } from '../../../interfaces/customer/IInvoice';
export function useInvoice() {
    const [invoiceHistory, setInvoiceHistory] = useState<IInvoiceHistory[]>([])

    async function getInvoiceHistory() {
        try {
            const res = await API.get('/invoiceHistory')
            setInvoiceHistory(res.data)
        } catch (err) {
            console.log(err)        
        }
    }

    useEffect(() => {
        getInvoiceHistory()
    },[])

    return { invoiceHistory }
}