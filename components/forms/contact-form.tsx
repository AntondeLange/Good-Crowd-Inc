"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { contactEnquiryOptions } from "@/lib/site-content";

type FormErrors = Partial<Record<"name" | "email" | "type" | "message" | "consent", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validate(formData: FormData) {
  const errors: FormErrors = {};
  const name = getValue(formData, "name");
  const email = getValue(formData, "email");
  const type = getValue(formData, "type");
  const message = getValue(formData, "message");
  const consent = formData.get("consent");

  if (!name) errors.name = "Enter your name.";
  if (!email) errors.email = "Enter your email address.";
  else if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (!type) errors.type = "Choose the option that best describes you.";
  if (!message) errors.message = "Enter a short message.";
  if (consent !== "on") errors.consent = "Confirm that you understand this form is not sending enquiries yet.";

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(new FormData(event.currentTarget));
    setErrors(nextErrors);
    setStatus(Object.keys(nextErrors).length === 0 ? "ready" : "idle");
  }

  return (
    <form className="rounded-crowd border border-crowd-brown/10 bg-crowd-cream p-5 shadow-crowd md:p-8" aria-label="Contact form" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id={`${formId}-name`} label="Name" name="name" autoComplete="name" error={errors.name} required />
        <FormField id={`${formId}-organisation`} label="Organisation" name="organisation" autoComplete="organization" />
        <FormField id={`${formId}-email`} label="Email" name="email" type="email" autoComplete="email" error={errors.email} required />
        <FormField id={`${formId}-phone`} label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="mt-5">
        <label htmlFor={`${formId}-type`} className="block text-sm font-black">I am a <span className="text-crowd-brown">(required)</span></label>
        <select id={`${formId}-type`} name="type" defaultValue="" required aria-invalid={errors.type ? "true" : undefined} aria-describedby={errors.type ? `${formId}-type-error` : undefined} className="mt-2 block min-h-12 w-full rounded-2xl border border-crowd-brown/20 bg-white px-4 py-3 text-crowd-brown outline-none transition duration-crowd ease-crowd focus:border-crowd-brown focus:ring-4 focus:ring-crowd-focus/25">
          <option value="" disabled>Select one</option>
          {contactEnquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        {errors.type ? <p id={`${formId}-type-error`} className="mt-2 text-sm font-bold text-crowd-brown">{errors.type}</p> : null}
      </div>

      <div className="mt-5">
        <label htmlFor={`${formId}-message`} className="block text-sm font-black">Message <span className="text-crowd-brown">(required)</span></label>
        <textarea id={`${formId}-message`} name="message" rows={6} required aria-invalid={errors.message ? "true" : undefined} aria-describedby={errors.message ? `${formId}-message-error` : undefined} className="mt-2 block min-h-36 w-full rounded-2xl border border-crowd-brown/20 bg-white px-4 py-3 text-crowd-brown outline-none transition duration-crowd ease-crowd focus:border-crowd-brown focus:ring-4 focus:ring-crowd-focus/25" />
        {errors.message ? <p id={`${formId}-message-error`} className="mt-2 text-sm font-bold text-crowd-brown">{errors.message}</p> : null}
      </div>

      <div className="mt-5 rounded-[1.25rem] border border-crowd-brown/10 bg-crowd-mist p-4">
        <label className="flex gap-3 text-sm leading-6 text-crowd-brown/75">
          <input type="checkbox" name="consent" required aria-invalid={errors.consent ? "true" : undefined} aria-describedby={errors.consent ? `${formId}-consent-error` : undefined} className="mt-1 h-5 w-5 shrink-0 rounded border-crowd-brown/30 text-crowd-brown focus:ring-crowd-focus" />
          <span>I understand this preview form checks my enquiry details but does not send them yet.</span>
        </label>
        {errors.consent ? <p id={`${formId}-consent-error`} className="mt-2 text-sm font-bold text-crowd-brown">{errors.consent}</p> : null}
      </div>

      <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-crowd-brown px-6 text-sm font-bold text-crowd-cream shadow-crowd transition duration-crowd ease-crowd hover:bg-crowd-earth focus-visible:bg-crowd-earth focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus">Check enquiry details</button>

      <p className="mt-4 text-sm leading-6 text-crowd-brown/65">Online enquiry delivery is not active yet. For now, this form can be used to check the information you intend to provide.</p>

      {status === "ready" ? <p role="status" className="mt-4 rounded-[1rem] border border-crowd-brown/10 bg-crowd-sand px-4 py-3 text-sm font-bold leading-6 text-crowd-brown">Your enquiry details pass the form checks. Nothing has been sent.</p> : null}
    </form>
  );
}

function FormField({ id, label, name, type = "text", autoComplete, error, required = false }: { id: string; label: string; name: string; type?: string; autoComplete?: string; error?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-black">{label} {required ? <span className="text-crowd-brown">(required)</span> : null}</label>
      <input id={id} name={name} type={type} autoComplete={autoComplete} required={required} aria-invalid={error ? "true" : undefined} aria-describedby={error ? `${id}-error` : undefined} className="mt-2 block min-h-12 w-full rounded-2xl border border-crowd-brown/20 bg-white px-4 py-3 text-crowd-brown outline-none transition duration-crowd ease-crowd focus:border-crowd-brown focus:ring-4 focus:ring-crowd-focus/25" />
      {error ? <p id={`${id}-error`} className="mt-2 text-sm font-bold text-crowd-brown">{error}</p> : null}
    </div>
  );
}
