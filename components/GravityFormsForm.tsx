
import { gql } from "@apollo/client";
import client from "../lib/client";
import { GravityFormsForm as GravityFormsFormType, FormField, FieldError } from "../generated/graphql";
import useGravityForm from "../hooks/useGravityForm"
import GravityFormsField from "./GravityFormsField";
import { useEffect, useState } from "react";
import Router from "next/router";
import { sendGTMEvent } from '@next/third-parties/google'

const SUBMIT_FORM = gql`
  mutation submitForm($formId: Int!, $fieldValues: [FieldValuesInput]) {
    submitGfForm(input: {
      formId: $formId
      fieldValues: $fieldValues
    }) {
      entryId
      errors {
        id
        message
      }
    }
  }
`;

interface Props {
  form: GravityFormsFormType;
  id: number
}

export default function GravityFormsForm({ form, id }: Props) {
  const { state } = useGravityForm();
  const [newData, setData] = useState(null)

  const sendForm = async () => {
    
    const response = await fetch(`/api/submit-form`, {
      method: "POST",
      body: JSON.stringify({id, state})
    });
    const data = await response.json();
    setData(data.result)
    if(data.result?.submitGfForm.errors == null) {
      sendGTMEvent({ event: 'formSubmission', value: id });
      response.ok ? Router.push('/thank-you') : null
    }

  }


  const haveEntryId = newData?.submitGfForm?.entryId;
  const haveFieldErrors = newData?.submitGfForm?.errors?.length;
  const wasSuccessfullySubmitted = haveEntryId && !haveFieldErrors;
  const defaultConfirmation = form.confirmations?.find(confirmation => confirmation?.isDefault);
  const formFields = form.formFields?.nodes || [];

  function getFieldErrors(id: number): FieldError[] {
    if (!haveFieldErrors) return [];
    return newData.submitGfForm.errors.filter((error: FieldError) => error.id === id);
  }

  if (wasSuccessfullySubmitted) {
    sendGTMEvent({ event: 'buttonClicked'})
    return <p>{defaultConfirmation?.message || 'Form successfully submitted - thank you.'}</p>
  }

    
  
  return (
    <form method="post" className="flex flex-col gap-2" onSubmit={(e)=> {
      e.preventDefault()
      sendForm()
      }}>
      {/* <p className="text-xs text-left text-white opacity-70 mb-3">Required Fields Labeled with *</p> */}
      {formFields.map(field =>
        <GravityFormsField
          key={field?.id}
          field={field as FormField}
          fieldErrors={getFieldErrors(Number(field?.id))}
        />
      )
      }
      
      <button className="btn-submit" type="submit">
        {form?.button?.text || 'Submit'}
      </button>
      
      
      <p className="text-[10px] text-center text-[#ffffffcc] mt-2">By opting into the web form above you are providing consent for Bloombug to contact you back for your quote.</p>

      {(newData && newData.submitGfForm.errors == null) && (
        <div className={" text-center p-3 mt-2 rounded-lg"}>Thank you for submitting, you will be redirected to our thank you screen shortly.</div>
      )}

      {newData?.error ? (
        <p className="error-message">{newData.error.message}</p>
      ) : null}
      
    </form>
  );
}
