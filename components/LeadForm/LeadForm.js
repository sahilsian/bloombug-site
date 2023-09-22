import { ValidationError, useForm } from "@formspree/react";
import { Input } from "../Input";

export const LeadForm = ({ formId }) => {
    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="mt-20">
            <form className="flex gap-5" onSubmit={handleSubmit}>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <div>
                    <button className="btn" type="submit" disabled={state.submitting}>
                        Find Hotels
                    </button>
                </div>

            </form>
        </div>
    )
}