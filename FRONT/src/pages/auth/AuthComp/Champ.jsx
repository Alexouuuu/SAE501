import { useId, useState } from "react";

export const fieldClassName =
    "mt-2 w-full rounded-md border border-gray-500 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/30";
const fieldErrorClassName = "border-red-700 focus:border-red-700 focus:ring-red-700/20";

export function MessageErreur({ id, children }) {
    if (!children) return null;
    return (
        <p id={id} className="mt-1.5 text-sm font-medium text-red-700">
            {children}
        </p>
    );
}

export function Facultatif() {
    return <span className="font-normal text-gray-600"> (facultatif)</span>;
}

export default function Champ({
    label,
    name,
    type = "text",
    required = true,
    aide,
    erreur,
    ...props
}) {
    const id = useId();
    const [visible, setVisible] = useState(false);
    const estMotDePasse = type === "password";
    const aideId = aide ? `${id}-aide` : undefined;
    const erreurId = erreur ? `${id}-erreur` : undefined;
    const descriptions = [aideId, erreurId].filter(Boolean).join(" ") || undefined;

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-800">
                {label}
                {!required && <Facultatif />}
            </label>
            <div className="relative">
                <input
                    id={id}
                    className={`${fieldClassName} ${erreur ? fieldErrorClassName : ""} ${estMotDePasse ? "pr-24" : ""}`}
                    name={name}
                    type={estMotDePasse && visible ? "text" : type}
                    required={required}
                    aria-invalid={erreur ? true : undefined}
                    aria-describedby={descriptions}
                    {...props}
                />
                {estMotDePasse && (
                    <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        aria-pressed={visible}
                        className="absolute inset-y-0 right-0 mt-2 cursor-pointer rounded-r-md px-4 text-sm font-semibold text-[#212684] underline-offset-4 hover:underline hover:decoration-[#92c56e] hover:decoration-2"
                    >
                        {visible ? "Masquer" : "Afficher"}
                        <span className="sr-only"> le mot de passe</span>
                    </button>
                )}
            </div>
            {aide && (
                <p id={aideId} className="mt-1.5 text-sm leading-6 text-gray-600">
                    {aide}
                </p>
            )}
            <MessageErreur id={erreurId}>{erreur}</MessageErreur>
        </div>
    );
}
