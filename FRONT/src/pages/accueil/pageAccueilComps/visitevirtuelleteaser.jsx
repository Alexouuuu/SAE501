// maxime derènes

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// const img = "/images/placeholder.webp";

import {
    AmbientLight,
    Box3,
    DirectionalLight,
    Group,
    PerspectiveCamera,
    Scene,
    Timer,
    Vector3,
    WebGLRenderer,
} from "three";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { FaLocationArrow } from "react-icons/fa";

// aide de l'ia :
function disposerModele(model) {
    model.traverse((object) => {
        if (!object.isMesh) return;

        object.geometry.dispose();
        const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
        materials.forEach((material) => {
            Object.values(material).forEach((value) => {
                if (value?.isTexture) value.dispose();
            });
            material.dispose();
        });
    });
}

// aide de l'ia :
function ApercuIut3D() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const scene = new Scene();
        const camera = new PerspectiveCamera(25, 1, 0.1, 100);
        camera.position.set(0, 1.4, 4.5);
        camera.lookAt(0, 0, 0);

        scene.add(new AmbientLight(0xffffff, 1.5));
        const directionalLight = new DirectionalLight(0xffffff, 2.5);
        directionalLight.position.set(4, 5, 4);
        scene.add(directionalLight);

        const rotationPivot = new Group();
        scene.add(rotationPivot);

        const renderer = new WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.domElement.style.display = "block";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.width = "100%";
        container.appendChild(renderer.domElement);

        const timer = new Timer();
        timer.connect(document);
        const dracoLoader = new DRACOLoader();
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        let frameId;
        let model;
        let disposed = false;

        const resize = () => {
            const { width, height } = container.getBoundingClientRect();
            if (!width || !height) return;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        resize();

        const animate = (timestamp) => {
            timer.update(timestamp);
            rotationPivot.rotation.y += timer.getDelta() * 0.18;
            renderer.render(scene, camera);
            frameId = window.requestAnimationFrame(animate);
        };
        frameId = window.requestAnimationFrame(animate);

        loader.load(
            "/model/iut_site_compress.glb",
            (gltf) => {
                model = gltf.scene;
                if (disposed) {
                    disposerModele(model);
                    return;
                }

                const bounds = new Box3().setFromObject(model);
                const center = bounds.getCenter(new Vector3());
                const size = bounds.getSize(new Vector3());
                const maxDimension = Math.max(size.x, size.y, size.z);
                const scale = maxDimension > 0 ? 2.2 / maxDimension : 1;

                model.position.set(
                    -center.x * scale,
                    -center.y * scale,
                    -center.z * scale
                );
                model.scale.setScalar(scale);
                rotationPivot.add(model);
            },
            undefined,
            (error) => {
                if (!disposed) {
                    console.error("Impossible de charger le modele 3D de l'IUT.", error);
                }
            }
        );

        return () => {
            disposed = true;
            window.cancelAnimationFrame(frameId);
            resizeObserver.disconnect();
            timer.dispose();
            dracoLoader.dispose();
            if (model) disposerModele(model);
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-full w-full"
            role="img"
            aria-label="Modèle 3D de l'IUT de Meaux"
        />
    );
}

export default function visiteVirtuelleTeaser() {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">

                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                    {/* <img
                        src={img}
                        alt="Illustration du parcours Développement web et dispositifs interactifs"
                        className="h-full w-full rounded-2xl object-cover"
                    /> */}
                    <ApercuIut3D />
                </div>

                <div>
                    <h3>
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#2f2a85]">
                            Visite virtuelle
                        </span>
                    </h3>
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2f2a85] sm:text-4xl lg:text-5xl">
                        Envie de découvrir l'IUT de Meaux ?
                    </h2>
                    <p className="mt-5 max-w-3xl leading-7 text-slate-600 sm:text-lg">
                        Explorez nos salles, nos couloirs, nos studios et espaces de création comme si vous y étiez grâce à notre <span className="font-semibold text-[#2f2a85]">visite 3D interactive</span> accessible directement depuis le site.
                    </p>
                    <Link
                        to="/visite-virtuelle"
                        className="group mx-auto mt-7 flex w-fit items-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85] md:mx-0"
                    >
                        Commencer la visite
                        <FaLocationArrow color="white" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                </div>

            </div>
        </section>
    )
}