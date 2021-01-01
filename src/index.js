import "./styles.css";
import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app").append(renderer.domElement);
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
const scene = new THREE.Scene();
camera.position.z = 120;

const objects =[];

const sphereGeometry = new THREE.SphereBufferGeometry(1,40,40);
const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xffff00});

const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
sunMesh.scale.set(5,5,5);
scene.add(sunMesh);

objects.push(sunMesh);

const light = new THREE.PointLight(0xFFFFFF, 3);
scene.add(light);

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.render(scene, camera);
