export default function Loading() {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#3c3792] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-[#3c3792] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-[#3c3792] rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}

// a utiliser pour le chargement d'un composant quand le state est en false, mais il faudrait utiliser des squelettes