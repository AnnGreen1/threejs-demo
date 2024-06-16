<template>
    <div>

    </div>
</template>

<script setup>
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const text= ' three.js自带的文字几何体'
const line = new THREE.TextGeometry(text, parameters);

scene.add(line);
renderer.render(scene, camera);
</script>

<style lang="scss" scoped></style>