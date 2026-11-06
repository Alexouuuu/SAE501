export default function Champs({ label, name, type = "text", value, onChange, required = false }){
    return(

        <label className="block text-sm font-medium text-gray-700">
            {label}
            <input name={name} type={type} required={required} value={value} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
        </label>

    )
}