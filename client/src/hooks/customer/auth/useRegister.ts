import { ChangeEvent, useState } from 'react';
import { IRegister } from '../../../interfaces/customer/IAuth';
import { API } from '../../../libs/api';
import { useNavigate } from 'react-router';
export function useRegister() {
    const navigate = useNavigate()
    const [form, setForm] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    async function handleRegister() {
        try {
            await API.post("/register", form)
            navigate("/cs/login")
        } catch (err) {
            console.log(err)
        }
    }

    return { handleChange, handleRegister }
}