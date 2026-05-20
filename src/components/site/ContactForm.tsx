import { useState } from "react";
import { z } from "zod";

type StepKey =
  | "name"
  | "email"
  | "number"
  | "projectType"
  | "projectLocation"
  | "description"
  | "source";

type FormState = Record<StepKey, string>;

type Step = {
  key: StepKey;
  label: string;
  hint: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  schema: z.ZodTypeAny;
};

const steps: Step[] = [
  {
    key: "name",
    label: "Your name",
    hint: "Let's start with the basics — what should we call you?",
    placeholder: "Full name",
    type: "text",
    schema: z.string().trim().min(2, "Please enter your name").max(100),
  },
  {
    key: "email",
    label: "Email address",
    hint: "Where should we reply?",
    placeholder: "you@example.com",
    type: "email",
    schema: z.string().trim().email("Enter a valid email").max(255),
  },
  {
    key: "number",
    label: "Phone number",
    hint: "Useful if we need to reach you quickly.",
    placeholder: "+254 ...",
    type: "tel",
    schema: z.string().trim().min(7, "Enter a valid phone number").max(30),
  },
  {
    key: "projectType",
    label: "Project type",
    hint: "Residential, hospitality, masterplan, restoration…",
    placeholder: "e.g. Residential",
    type: "text",
    schema: z.string().trim().min(2, "Tell us the type of project").max(120),
  },
  {
    key: "projectLocation",
    label: "Project location",
    hint: "City and country.",
    placeholder: "Nairobi, Kenya",
    type: "text",
    schema: z.string().trim().min(2, "Where is the project?").max(160),
  },
  {
    key: "description",
    label: "Brief description",
    hint: "A few sentences about the project — site, scope, ambition.",
    placeholder: "Tell us about the project…",
    type: "textarea",
    schema: z.string().trim().min(10, "A short description helps us reply well").max(2000),
  },
  {
    key: "source",
    label: "How did you find us?",
    hint: "Referral, search, publication, exhibition…",
    placeholder: "e.g. Referred by a colleague",
    type: "text",
    schema: z.string().trim().min(2, "Let us know how you found us").max(200),
  },
];

const empty: FormState = {
  name: "",
  email: "",
  number: "",
  projectType: "",
  projectLocation: "",
  description: "",
  source: "",
};

export function ContactForm() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<FormState>(empty);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const total = steps.length;
  const step = steps[index];
  const value = data[step?.key] ?? "";
  const isLast = index === total - 1;

  function update(v: string) {
    setData((d) => ({ ...d, [step.key]: v }));
    if (error) setError(null);
  }

  function next() {
    const result = step.schema.safeParse(value);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid value");
      return;
    }
    setError(null);
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => Math.min(total - 1, i + 1));
  }

  function back() {
    setError(null);
    setIndex((i) => Math.max(0, i - 1));
  }

  if (done) {
    return (
      <div className="md:h-full flex flex-col justify-center border border-white/15 rounded-3xl p-10 md:p-16 backdrop-blur-sm bg-white/5">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-6">Thank you</p>
        <h3 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
          Your message is on its way.
        </h3>
        <p className="text-white/75 font-light text-lg">
          We'll be in touch shortly at <span className="text-white">{data.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="md:h-full flex flex-col border border-white/15 rounded-3xl p-10 md:p-14 backdrop-blur-sm bg-white/5">
      {/* Heading at the top */}
      <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-4">
        Step {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="text-3xl md:text-4xl font-extralight leading-tight text-white mb-8">
        {step.label}
      </h3>

      {/* Step counter + progress */}
      <div className="flex items-center gap-6 mb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 shrink-0">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-white/60 transition-all duration-500"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Body grows to fill available height */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-white/65 font-light text-base md:text-lg mb-6">{step.hint}</p>

        {step.type === "textarea" ? (
          <textarea
            autoFocus
            value={value}
            onChange={(e) => update(e.target.value)}
            placeholder={step.placeholder}
            rows={8}
            className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-4 text-xl md:text-2xl font-extralight placeholder:text-white/30 resize-none"
          />
        ) : (
          <input
            autoFocus
            type={step.type}
            value={value}
            onChange={(e) => update(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                next();
              }
            }}
            placeholder={step.placeholder}
            className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-4 text-2xl md:text-3xl font-extralight placeholder:text-white/30"
          />
        )}

        {error && (
          <p className="mt-4 text-sm text-white/85 font-light">{error}</p>
        )}
      </div>

      {/* Actions pinned to bottom */}
      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={index === 0}
          className="pk-glass-hover inline-flex items-center gap-2 border border-white/25 rounded-full px-5 py-3 text-xs tracking-[0.22em] uppercase font-light text-white/80 disabled:opacity-30 disabled:pointer-events-none"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={next}
          className="pk-glass-hover inline-flex items-center gap-3 border border-white/60 rounded-full px-7 py-3 text-xs tracking-[0.22em] uppercase font-light text-white"
        >
          <span>{isLast ? "Send Message" : "Next"}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
