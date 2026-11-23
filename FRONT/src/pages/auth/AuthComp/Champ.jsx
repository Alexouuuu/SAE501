const fieldClassName = "mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20";

export default function Champ({ label, name, type = "text", autoComplete, minLength, required = true }) {
    return (
        <label className="block text-sm font-medium text-gray-800">
            {label}
            <input
                className={fieldClassName}
                name={name}
                type={type}
                autoComplete={autoComplete}
                minLength={minLength}
                required={required}
            />
        </label>
    );
}
