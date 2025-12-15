// Client rendered component
'use client'

// @ts-nocheck

// Imports
import { useActionState } from "react";
import { newsletterSignup } from "@/app/actions";
import { useFormStatus } from "react-dom";

// Response message
const ResponseMessage = ({ state }) => {
  return (
    <>
      {state.success === true && (
        <p className="text-green-400">You have now signed up.</p>
      )}
      {state.success === false && (
        <p>Something went wrong. Please try again</p>
      )}
    </>
  );
};

// Submit button
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`border p-1 bg-blue-400 ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={pending}
    >
      {pending ? 'Submitting..' : 'Signup'}
    </button>
  );
};

// Signup form
const SignupForm = () => {
  const [state, postEmail] = useActionState(newsletterSignup, {
    success: null,
    errors: {},
    fields: {},
  });
  console.log(state);

  return (
    <>
      <ResponseMessage state={state} />
      <form action={postEmail}>
        {state.errors?.emailAdress && (
          <p className="text-red-800">{state.errors.emailAdress}</p>
        )}
        <input
          type='email'
          name='email'
          placeholder="Your email"
          className="border p-1"
        />
        <SubmitButton />
      </form>
    </>
  );
};

export default SignupForm;
