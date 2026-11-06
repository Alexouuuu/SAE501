// export async function api(path, options = {}) {
//     const response = await fetch(path, {
//         ...options,
//         headers: {
//             ...(options.body ? { "Content-Type": "application/json" } : {}),
//             ...options.headers,
//         },
//     });

//     if (!response.ok) {
//         const detail = await response.text();
//         throw new Error(detail || `Erreur HTTP ${response.status}`);
//     }

//     if (response.status === 204) return null;
//     return response.json();
// }