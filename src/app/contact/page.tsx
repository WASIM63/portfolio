"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData { name: string; email: string; message: string }
type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const email = process.env.NEXT_PUBLIC_EMAIL_ID;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (!response.ok) throw new Error("Failed to send message");
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="page-shell section-shell">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow">Get in touch</p>
        <h1 className="section-title text-4xl sm:text-5xl">Let&apos;s connect about backend engineering.</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Have a question about my work or want to exchange ideas about backend engineering? Send a note and I&apos;ll get back to you soon.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-5">
          <div className="surface-card p-6"><FaEnvelope className="text-xl text-primary" /><h2 className="mt-4 font-semibold">Email</h2><a href={email ? `mailto:${email}` : undefined} className="mt-1 block text-sm text-[var(--muted)] hover:text-primary">{email || "Email available on request"}</a></div>
          <div className="surface-card p-6"><FaMapMarkerAlt className="text-xl text-primary" /><h2 className="mt-4 font-semibold">Location</h2><p className="mt-1 text-sm text-[var(--muted)]">India · Working remotely</p></div>
        </div>
        <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Name<input required name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-normal outline-none focus:border-primary" /></label>
            <label className="text-sm font-medium">Email<input required type="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-normal outline-none focus:border-primary" /></label>
          </div>
          <label className="mt-5 block text-sm font-medium">Message<textarea required name="message" rows={6} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-normal outline-none focus:border-primary" /></label>
          <button type="submit" disabled={status === "loading"} className="btn btn-primary mt-6 w-full sm:w-auto">{status === "loading" ? "Sending..." : "Send message"}</button>
          <p role="status" className={`mt-4 text-sm ${status === "error" ? "text-red-500" : "text-emerald-500"}`}>{status === "success" ? "Message sent successfully. Thanks for reaching out!" : status === "error" ? "Something went wrong. Please try again." : ""}</p>
        </form>
      </div>
    </section>
  );
}
