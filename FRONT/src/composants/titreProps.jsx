import { useEffect } from "react";

export default function TitreProps({ titre }) {
    useEffect(() => {
        document.title = `${titre} - JPO 2026 - Gustave Eiffel`;
    }, [titre]);

    return null;
}