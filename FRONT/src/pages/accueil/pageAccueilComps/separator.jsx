import "../accueil.css";

export default function Separator() {
    return (
        <svg
            className="shape-divider"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
        >
            <path
                fill="#2f2a85"
                d="M0 0h1440v48c-180 42-360 54-540 17S540 24 360 40 120 86 0 64V0Z"
            />
        </svg>
    );
}
