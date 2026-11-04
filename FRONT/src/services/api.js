export async function api(path, options = {}) {
    const response = await fetch(path, {
        ...options,
        headers: {
            ...(options.body ? { "Content-Type": "application/json" } : {}),
            ...options.headers,
        },
    });

    if (!response.ok) {
        const detail = await response.text();
        throw new Error(detail || `Erreur HTTP ${response.status}`);
    }

    if (response.status === 204) return null;
    return response.json();
}

export function datePourChamp(value) {
    if (!value) return "";
    const date = new Date(value);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
}

export function dateDepuisChamp(value) {
    return value ? new Date(value).toISOString() : null;
}

export function dateEtHeure(value) {
    if (!value) return "Date à préciser";
    return new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "long",
        timeStyle: "short",
    }).format(new Date(value));
}
