import GravityForm from '../GravityForm';
import getGravityForm from "../../lib/gravity-forms";
import { GravityFormsForm } from "../../generated/graphql";
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const GravityFormsComponent = ( { formId }) => {
    const [form, setForm] = useState()
    const getForm = async() => {
        const response = await fetch(`/api/get-form`, {
            method: "POST",
            body: JSON.stringify(formId),
        });
        const data = await response.json();
        setForm(data.result)
    }

    useEffect(()=> {
        getForm()
    }, [])
    return (
        form ? (
        <div className='rounded-lg'>
            <GravityForm id={formId} form={form} />
        </div>
        )
        :
        (
            <div className='flex justify-center'>
                <ClipLoader
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#FFFFFF"
                ></ClipLoader>
            </div>
        )
    )
}