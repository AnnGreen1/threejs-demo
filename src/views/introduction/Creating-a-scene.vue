<template>
    <div>

    </div>
</template>

<script setup>
import * as THREE from 'three';

// 场景
const scene = new THREE.Scene();
// 相机   PerspectiveCamera（透视摄像机）
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// 将 renderer（渲染器）的dom元素（renderer.domElement）添加到我们的 HTML 文档中。这就是渲染器用来显示场景给我们看的 <canvas> 元素。
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);// 创建一个立方体
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });// 绿色
const cube = new THREE.Mesh(geometry, material);// 网格，包含一个几何体以及作用在此几何体上的材质
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;// 每帧都会执行
    cube.rotation.y += 0.01;// 每帧都会执行

    renderer.render(scene, camera);
}
animate();
</script>

<style lang="scss" scoped></style>