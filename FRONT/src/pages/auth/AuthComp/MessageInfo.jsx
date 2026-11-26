// Message d'information neutre (ex. service pas encore disponible)
export default function MessageInfo({ children }) {
    return (
        <p
            className="mt-5 rounded-md border border-[#212684]/30 bg-[#212684]/5 p-4 text-sm leading-6 text-gray-900"
            role="status"
            aria-live="polite"
        >
            {children}
        </p>
    );
}
