import { useId } from "react";
import { MessageErreur } from "./Champ";

export default function CaseACocher({ name, required = false, erreur, children }) {
    const id = useId();
    const erreurId = erreur ? `${id}-erreur` : undefined;

    return (
        <div>
            <div className="flex items-start gap-3">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    required={required}
                    aria-invalid={erreur ? true : undefined}
                    aria-describedby={erreurId}
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#212684]"
                />
                <label htmlFor={id} className="cursor-pointer text-sm leading-6 text-gray-700">
                    {children}
                </label>
            </div>
            <MessageErreur id={erreurId}>{erreur}</MessageErreur>
        </div>
    );
}
