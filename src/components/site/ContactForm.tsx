import { useState } from "react";
import { z as zod } from "zod";

const formSchema = zod.object({
  firstName: zod.string().trim().min(2, "First name is required"),
  lastName: zod.string().trim().min(2, "Last name is required"),
  country: zod.string().trim().min(2, "Country is required"),
  phoneNumber: zod.string().trim().min(7, "Valid phone number is required"),
  email: zod.string().trim().email("Please enter a valid email address"),
  projectType: zod.string().min(1, "Please select a project type"),
  message: zod.string().trim().min(10, "Please describe your project (minimum 10 characters)"),
  subscribe: zod.boolean().optional(),
});

type FormState = {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  message: string;
  subscribe: boolean;
};

const emptyState: FormState = {
  firstName: "",
  lastName: "",
  country: "",
  phoneNumber: "",
  email: "",
  projectType: "Architecture", // default selected
  message: "",
  subscribe: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(emptyState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    "Architecture",
    "Interior Design",
    "Master Planning",
    "Restoration",
    "Others",
  ];

  function handleChange(key: keyof FormState, value: any) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof FormState;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="w-full flex flex-col justify-center border border-white/15 rounded-3xl p-10 md:p-14 backdrop-blur-md bg-white/[0.02] shadow-2xl transition-all duration-500">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-6">THANK YOU</p>
        <h3 className="text-4xl md:text-5xl font-extralight leading-tight mb-6 text-white">
          Your project inquiry is on its way.
        </h3>
        <p className="text-white/70 font-light text-lg leading-relaxed mb-6">
          We will review your project details and get back to you shortly at <span className="text-white font-normal">{formData.email}</span>.
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setFormData(emptyState);
              setIsSubmitted(false);
            }}
            className="pk-glass-hover inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-light text-white transition-all"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md bg-white/[0.02] shadow-2xl transition-all">
      <h3 className="text-3xl md:text-4xl font-extralight leading-tight text-white mb-3">
        Tell Us What your project needs
      </h3>
      <p className="text-white/60 font-light text-sm md:text-base mb-8">
        Our team is ready to assist you with every detail, big or small.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="e.g. John"
              className={`w-full rounded-full border bg-white/[0.01] px-5 py-3 text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all text-sm font-light ${
                errors.firstName ? "border-red-500/50" : "border-white/15"
              }`}
            />
            {errors.firstName && (
              <span className="text-xs text-red-400 font-light pl-2">{errors.firstName}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="e.g. Doe"
              className={`w-full rounded-full border bg-white/[0.01] px-5 py-3 text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all text-sm font-light ${
                errors.lastName ? "border-red-500/50" : "border-white/15"
              }`}
            />
            {errors.lastName && (
              <span className="text-xs text-red-400 font-light pl-2">{errors.lastName}</span>
            )}
          </div>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              placeholder="e.g. Kenya"
              className={`w-full rounded-full border bg-white/[0.01] px-5 py-3 text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all text-sm font-light ${
                errors.country ? "border-red-500/50" : "border-white/15"
              }`}
            />
            {errors.country && (
              <span className="text-xs text-red-400 font-light pl-2">{errors.country}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              placeholder="e.g. +254 722 000 000"
              className={`w-full rounded-full border bg-white/[0.01] px-5 py-3 text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all text-sm font-light ${
                errors.phoneNumber ? "border-red-500/50" : "border-white/15"
              }`}
            />
            {errors.phoneNumber && (
              <span className="text-xs text-red-400 font-light pl-2">{errors.phoneNumber}</span>
            )}
          </div>
        </div>

        {/* Email Address (Full Width) */}
        <div className="space-y-1.5">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="e.g. john.doe@example.com"
            className={`w-full rounded-full border bg-white/[0.01] px-5 py-3 text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all text-sm font-light ${
              errors.email ? "border-red-500/50" : "border-white/15"
            }`}
          />
          {errors.email && (
            <span className="text-xs text-red-400 font-light pl-2">{errors.email}</span>
          )}
        </div>

        {/* Project Type Options */}
        <div className="space-y-3">
          <p className="text-xs tracking-widest text-white/50 uppercase font-light">
            Project Type
          </p>
          <div className="flex flex-wrap gap-2.5">
            {projectTypes.map((type) => {
              const isSelected = formData.projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange("projectType", type)}
                  className={`px-5 py-2.5 text-xs tracking-wider rounded-full border transition-all duration-300 font-light ${
                    isSelected
                      ? "bg-white text-black border-white shadow-lg scale-[1.03]"
                      : "bg-transparent text-white/60 border-white/15 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          {errors.projectType && (
            <span className="text-xs text-red-400 font-light pl-2">{errors.projectType}</span>
          )}
        </div>

        {/* Message Input (Message Bubble) */}
        <div className="space-y-1.5">
          <textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Tell us about your project ambition, site, or scope..."
            rows={5}
            className={`w-full rounded-2xl border bg-white/[0.01] p-5 text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none transition-all text-sm font-light resize-none ${
              errors.message ? "border-red-500/50" : "border-white/15"
            }`}
          />
          {errors.message && (
            <span className="text-xs text-red-400 font-light pl-2">{errors.message}</span>
          )}
        </div>

        {/* Newsletter Subscription Checkbox */}
        <div className="flex items-center gap-3">
          <label className="relative flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.subscribe}
              onChange={(e) => handleChange("subscribe", e.target.checked)}
              className="peer sr-only"
            />
            <div className="h-5 w-5 rounded border border-white/20 bg-transparent flex items-center justify-center peer-checked:bg-white peer-checked:border-white transition-all">
              {formData.subscribe && (
                <svg
                  className="h-3 w-3 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="ml-3 text-xs md:text-sm text-white/50 font-light tracking-wide peer-checked:text-white/80 transition-colors">
              I'd like to receive exclusive offers and updates
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-full bg-white text-black hover:bg-white/95 font-normal py-4 px-6 transition-all duration-300 text-sm tracking-[0.15em] uppercase hover:scale-[1.01] active:scale-[0.99] shadow-lg flex items-center justify-center gap-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
