import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../libs/api';
import { IRegister } from '../../interfaces/kape/IAuth';
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
            await API.post("/kape/create", form)
            navigate("/cs/login")
        } catch (err) {
            console.log(err)
        }
    }

    return { handleChange, handleRegister }
}