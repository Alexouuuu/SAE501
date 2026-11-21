const MAP_URL =
    "https://www.google.com/maps/d/u/0/embed?mid=1CL_CfHqV1qgPkJAHlLORT95OJFVJYCc&ehbc=2E312F&noprof=1";

export default function MapGoogle({
    className = "block h-full w-full rounded-lg border-0 shadow-lg",
    title = "Carte Google Maps de l'IUT de Meaux",
}) {
    return (
        <iframe
            src={MAP_URL}
            title={title}
            className={className}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
        />
    );
}
