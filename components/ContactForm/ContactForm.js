import { ValidationError, useForm } from "@formspree/react";
import { Input } from "../Input";

export const ContactForm = ({ formId }) => {
    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="max-w-5xl mx-auto my-5">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    className="border-2 border-slate-400 p-1 hover:border-slate-500"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <div>
                    <button className="btn" type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}