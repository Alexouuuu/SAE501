import { Link } from 'react-router-dom';

export default function Navbar() {
    const Pages = [
        { id: 1, name: 'Accueil', url: '/' },
        { id: 2, name: 'Visite Virtuelle', url: '/visite-virtuelle' },
        { id: 3, name: 'Evenements', url: '/evenements' },
        { id: 4, name: 'Nous contacter', url: '/contact' },
    ];

    // { id: 1, name: 'Mon Compte', url: '/mon-compte' },
    return (
        <nav className="border-b border-black">
            <div className="flex flex-row items-center justify-between px-6 py-4">
                {/*Logo */}
                <div className="flex items-center">
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-10 w-auto" />
                </div>

                <section className="flex flex-row gap-4">
                    <div className="flex items-center gap-4">
                        <select
                            onChange={(e) => { if (e.target.value) window.location.href = e.target.value; }}
                            className="border border-black rounded px-3 py-2 bg-white text-black cursor-pointer text-sm focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Menu des pages</option>
                            {Pages.map((page) => (
                                <option key={page.id} value={page.url}>
                                    {page.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <span className="flex items-center justify-center w-10 h-10 border border-black rounded-full"></span>
                    </div>
                </section>
            </div>
        </nav>
    )
}