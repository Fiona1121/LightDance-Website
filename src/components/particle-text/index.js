import React, { useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Environment from "./Environment";

const style = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    display: "block",
    top: 0,
    left: 0,
    zIndex: "-9999",
};

// "      NTUEE\nLIGHTDANCE"
export default function ParticleText({ text }) {
    const preload = () => {
        let manager = new THREE.LoadingManager();
        manager.onLoad = function () {
            const environment = new Environment(typo, particle, text);
        };

        var typo = null;
        const loader = new FontLoader(manager);
        const font = loader.load(
            "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json",
            function (font) {
                typo = font;
            }
        );
        const particle = new THREE.TextureLoader(manager).load(
            "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
        );
    };
    useEffect(() => preload(), []);
    return <div id="magic" style={style}></div>;
}
