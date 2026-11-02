import { useState } from "react";

const faqItems = [
    {
        question: "Question",
        answer: "Question",
    },
    {
        question: "Question",
        answer: "Question",
    },
    {
        question: "Question",
        answer: "Question",
    },
];

export default function sectionFAQ({ items = faqItems, title = "FAQ - Questions fréquentes" }) {
    const [openId, setOpenId] = useState(null);

    return (
        <section className="mx-auto my-8 px-4">
            {title && <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">{title}</h2>}
            <div className="space-y-4">
                {items.map((item, id) => {
                    const isOpen = openId === id;
                    return (
                        <div key={id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                            <button type="button" onClick={() => setOpenId(isOpen ? null : id)} aria-expanded={isOpen} className="cursor-pointer flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:bg-gray-100">
                                {item.question}<span className="ml-2 text-gray-900">{isOpen ? "−" : "+"}</span>
                            </button>
                            {isOpen && <p className="border-t border-gray-200 px-6 py-4 text-gray-600">{item.answer}</p>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}