export default function UsersGestion() {
    // Tableau des comptes

    // il faudra créer une pagination
    return (
        <section>
            <div className="mb-6 max-w-7xl">
                <h2 className="text-2xl font-bold text-gray-900">Comptes élèves</h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-212.5 border-collapse text-left text-sm">
                    <thead className="bg-gray-50 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Nom</th>
                            <th className="px-4 py-3 font-semibold">Prénom</th>
                            <th className="px-4 py-3 font-semibold">E-mail</th>
                            <th className="px-4 py-3 font-semibold">Sexe</th>
                            <th className="px-4 py-3 font-semibold">Ville</th>
                            <th className="px-4 py-3 font-semibold">Filière</th>
                            <th className="px-4 py-3 text-center font-semibold">Présence JPO</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* Affiche l'état vide lorsqu'aucun compte local n'est défini. */}
                        <tr><td colSpan="7" className="px-4 py-8 text-center text-gray-500">Aucun compte élève pour le moment.</td></tr>
                    </tbody>
                </table>
            </div>
        </section>

    );
}