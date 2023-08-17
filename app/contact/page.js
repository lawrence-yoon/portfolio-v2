"use client";
import React from "react";

import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkzrprn");
  if (state.succeeded) {
    return (
      <p className="mx-auto">
        Thank you for your message. I will get to you as soon as I can.
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg p-4 gap-2 mx-auto"
    >
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="bg-gray-500 p-2 border"
        placeholder="example@email.com"
        autoFocus
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        className="bg-gray-500 border p-2"
        placeholder="
      Type message here..."
        rows="4"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="self-end border rounded-md w-fit px-6 py-2"
      >
        Submit
      </button>
    </form>
  );
}

export default function ContactPage() {
  return <ContactForm />;
}
