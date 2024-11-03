import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';

//renderer
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
    //canvas: canvas,
    canvas,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.shadowMap.enabled = true;

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

//camera
const camera = new THREE.PerspectiveCamera(
    60,//fov
    window.innerWidth / window.innerHeight,//aspect
    1,//near
    500//far
);
//camera x,y,z
camera.position.set(70, 120, 0);
scene.add(camera);

//controls
const controls = new OrbitControls( camera, renderer.domElement ); //mouseclick cam controls

//Light1
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight('white', 2);//directionallight
dirLight.position.set(-10, 20, 10);
dirLight.castShadow = true;

//light2
//const spotLight = new THREE.SpotLight( 0xffffff, 60, 10 ,10 );
//const spotLightHelper = new THREE.SpotLightHelper(spotLight)
//spotLight.position.set( 140, 30, 1 );

scene.add(dirLight, ambientLight);

//textures
const textureLoader = new THREE.TextureLoader();

const textureleather = textureLoader.load("../texture/leather.jpg");
const textureleather2 = textureLoader.load("../texture/leather2.jpg");
const texturepokeball = textureLoader.load("../texture/poke.jpg");

//mesh

//cushion blue1 top
const b1 = new THREE.Mesh(
    new THREE.BoxGeometry(6, 2, 6),//gemoetry
    //new THREE.MeshBasicMaterial({color: 'blue'})//materials test
    new THREE.MeshPhongMaterial({
        color: '#5ad6fa',
        side: THREE.DoubleSide
    })
);
//dust.rotation.z = THREE.MathUtils.degToRad(-90);
b1.position.x = 3;
b1.position.y = 1.7;
b1.position.z = -34.5;
b1.castShadow = true;
b1.receiveShadow = true;

//cushion blue1 top stand
const b1s = new THREE.Mesh(
    new THREE.BoxGeometry(6.7, 2, 6.7),
    new THREE.MeshPhongMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
b1s.position.x = 3;
b1s.position.y = 1;
b1s.position.z = -34.5;
b1s.castShadow = true;
b1s.receiveShadow = true;

//cushion yellow1 top
const y1 = new THREE.Mesh(
    new THREE.BoxGeometry(6, 2, 6),//gemoetry
    //new THREE.MeshBasicMaterial({color: 'blue'})//materials test
    new THREE.MeshPhongMaterial({
        color: '#fbfd76',
        side: THREE.DoubleSide
    })
);
y1.position.x = 3;
y1.position.y = 1.7;
y1.position.z = -26;
y1.castShadow = true;
y1.receiveShadow = true;

//cushion yellow1 top stand
const y1s = new THREE.Mesh(
    new THREE.BoxGeometry(6.7, 2, 6.7),
    new THREE.MeshPhongMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
y1s.position.x = 3;
y1s.position.y = 1;
y1s.position.z = -26;
y1s.castShadow = true;
y1s.receiveShadow = true;

//cushion blue2 right
const b2 = new THREE.Mesh(
    new THREE.BoxGeometry(6, 2, 6),
    new THREE.MeshPhongMaterial({
        color: '#5ad6fa',
        side: THREE.DoubleSide
    })
);
b2.position.x = 19;
b2.position.y = 1.7;
b2.position.z = -45;
b2.castShadow = true;
b2.receiveShadow = true;

//cushion blue2 right stand
const b2s = new THREE.Mesh(
    new THREE.BoxGeometry(6.7, 2, 6.7),
    new THREE.MeshPhongMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
b2s.position.x = 19;
b2s.position.y = 1;
b2s.position.z = -45;
b2s.castShadow = true;
b2s.receiveShadow = true;

//cushion ywllow2 right
const y2s = new THREE.Mesh(
    new THREE.BoxGeometry(6, 2, 6),
    new THREE.MeshPhongMaterial({
        color: '#fbfd76',
        side: THREE.DoubleSide
    })
);
y2s.position.x = 11;
y2s.position.y = 1.7;
y2s.position.z = -45;
y2s.castShadow = true;
y2s.receiveShadow = true;

//cushion ywllow2 right stand
const y2 = new THREE.Mesh(
    new THREE.BoxGeometry(6.7, 2, 6.7),
    new THREE.MeshPhongMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
y2.position.x = 11;
y2.position.y = 1;
y2.position.z = -45;
y2.castShadow = true;
y2.receiveShadow = true;

//glass table
const gt = new THREE.Mesh(
    new THREE.BoxGeometry(13, 1, 13),
    new THREE.MeshLambertMaterial({
        color: '#b7ecf1',
        side: THREE.DoubleSide
    })
);
gt.position.x = 15;
gt.position.y = 3;
gt.position.z = -30;
gt.castShadow = true;
gt.receiveShadow = true;

//glass table stand
const gt1 = new THREE.Mesh(
    new THREE.BoxGeometry(13.7, 3, 13.7),
    new THREE.MeshLambertMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
gt1.position.x = 15;
gt1.position.y = 1;
gt1.position.z = -30;
gt1.castShadow = true;
gt1.receiveShadow = true;

//counter front stand
const cf = new THREE.Mesh(
    new THREE.BoxGeometry(9, 3.5, 47),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
cf.position.x = -13;
cf.position.y = 1.5;
cf.position.z = 1;
cf.castShadow = true;
cf.receiveShadow = true;

//counter front
const cfs = new THREE.Mesh(
    new THREE.BoxGeometry(9.7, 1, 47.7),
    new THREE.MeshLambertMaterial({
        color: '#f46248',
        side: THREE.DoubleSide
    })
);
cfs.position.x = -13;
cfs.position.y = 3;
cfs.position.z = 1;
cfs.castShadow = true;
cfs.receiveShadow = true;

//counter side right stand
const cfr = new THREE.Mesh(
    new THREE.BoxGeometry(17, 3.5, 9),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
cfr.position.x = -22;
cfr.position.y = 1.5;
cfr.position.z = -18;
cfr.castShadow = true;
cfr.receiveShadow = true;

//counter side right
const cfrs = new THREE.Mesh(
    new THREE.BoxGeometry(17, 1, 9.7),
    new THREE.MeshLambertMaterial({
        color: '#f46248',
        side: THREE.DoubleSide
    })
);
cfrs.position.x = -22;
cfrs.position.y = 3;
cfrs.position.z = -18;
cfrs.castShadow = true;
cfrs.receiveShadow = true;

//counter side left stand
const cfl = new THREE.Mesh(
    new THREE.BoxGeometry(17, 3.5, 9),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
cfl.position.x = -22;
cfl.position.y = 1.5;
cfl.position.z = 20;
cfl.castShadow = true;
cfl.receiveShadow = true;

//counter side left
const cfls = new THREE.Mesh(
    new THREE.BoxGeometry(17, 1, 9.7),
    new THREE.MeshLambertMaterial({
        color: '#f46248',
        side: THREE.DoubleSide
    })
);
cfls.position.x = -22;
cfls.position.y = 3;
cfls.position.z = 20;
cfls.castShadow = true;
cfls.receiveShadow = true;

//talk counter
const talk = new THREE.Mesh(
    new THREE.BoxGeometry(6, 1, 7),
    new THREE.MeshLambertMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
talk.position.x = -13;
talk.position.y = 3.2;
talk.position.z = 1;
talk.castShadow = true;
talk.receiveShadow = true;

//mat
const mat = new THREE.Mesh(
    new THREE.BoxGeometry(8, .5, 13),
    new THREE.MeshLambertMaterial({
        color: '#eb5338',
        side: THREE.DoubleSide
    })
);
mat.position.x = 25;
mat.position.y = .2;
mat.position.z = -1;
mat.castShadow = true;
mat.receiveShadow = true;

//shelf
const shelf = new THREE.Mesh(
    new THREE.BoxGeometry(7, 15, 15),
    new THREE.MeshLambertMaterial({
        color: '#74e790',
        side: THREE.DoubleSide
    })
);
shelf.position.x = -26;
shelf.position.y = 7;
shelf.position.z = 33;
shelf.castShadow = true;
shelf.receiveShadow = true;

//pot1
const pot1 = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 2, 2),
    new THREE.MeshLambertMaterial({
        color: 'white',
        side: THREE.DoubleSide
    })
);
pot1.position.x = -26;
pot1.position.y = 1;
pot1.position.z = 45;
pot1.castShadow = true;
pot1.receiveShadow = true;

//stem1
const stem1 = new THREE.Mesh(
    new THREE.CylinderGeometry(.5, .5, 7),
    new THREE.MeshLambertMaterial({
        color: '#ba9462',
        side: THREE.DoubleSide
    })
);
stem1.position.x = -26;
stem1.position.y = 5;
stem1.position.z = 45;
stem1.castShadow = true;
stem1.receiveShadow = true;

//bush1
const bush1 = new THREE.Mesh(
    new THREE.SphereGeometry(3),
    new THREE.MeshLambertMaterial({
        color: '#8ae160',
        side: THREE.DoubleSide
    })
);
bush1.position.x = -26;
bush1.position.y = 9;
bush1.position.z = 45;
bush1.castShadow = true;
bush1.receiveShadow = true;

//potleft
const pot2 = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 1, 1),
    new THREE.MeshLambertMaterial({
        color: '#dfb76e',
        side: THREE.DoubleSide
    })
);
pot2.position.x = -13;
pot2.position.y = 3.7;
pot2.position.z = 20;
pot2.castShadow = true;
pot2.receiveShadow = true;

//bush2
const bush2 = new THREE.Mesh(
    new THREE.SphereGeometry(2),
    new THREE.MeshLambertMaterial({
        color: '#8ae160',
        side: THREE.DoubleSide
    })
);
bush2.position.x = -13;
bush2.position.y = 5.5;
bush2.position.z = 20;
bush2.castShadow = true;
bush2.receiveShadow = true;

//potright
const pot3 = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 1, 1),
    new THREE.MeshLambertMaterial({
        color: '#dfb76e',
        side: THREE.DoubleSide
    })
);
pot3.position.x = -13;
pot3.position.y = 3.7;
pot3.position.z = -18;
pot3.castShadow = true;
pot3.receiveShadow = true;

//bush3
const bush3 = new THREE.Mesh(
    new THREE.SphereGeometry(2),
    new THREE.MeshLambertMaterial({
        color: '#8ae160',
        side: THREE.DoubleSide
    })
);
bush3.position.x = -13;
bush3.position.y = 5.5;
bush3.position.z = -18;
bush3.castShadow = true;
bush3.receiveShadow = true;

//counter for nurse pc
const nursepc = new THREE.Mesh(
    new THREE.BoxGeometry(15, 1, 9),
    new THREE.MeshLambertMaterial({
        color: '#d0aa78',
        side: THREE.DoubleSide
    })
);
nursepc.position.x = -22;
nursepc.position.y = 2.5;
nursepc.position.z = -11;
nursepc.castShadow = true;
nursepc.receiveShadow = true;

//nurse pc
const nursepc1 = new THREE.Mesh(
    new THREE.BoxGeometry(4, 4, 4),
    new THREE.MeshLambertMaterial({
        color: '#f2efeb',
        side: THREE.DoubleSide
    })
);
nursepc1.position.x = -23;
nursepc1.position.y = 5.7;
nursepc1.position.z = -11;
nursepc1.castShadow = true;
nursepc1.receiveShadow = true;

//nurse pc back
const nursepc2 = new THREE.Mesh(
    new THREE.BoxGeometry(6, 6, 4),
    new THREE.MeshLambertMaterial({
        color: '#f2efeb',
        side: THREE.DoubleSide
    })
);
nursepc2.position.x = -23;
nursepc2.position.y = 5.7;
nursepc2.position.z = -10;
nursepc2.castShadow = true;
nursepc2.receiveShadow = true;

//healing station left
const hsl = new THREE.Mesh(
    new THREE.BoxGeometry(8, 5, 5),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
hsl.rotation.x = THREE.MathUtils.degToRad(-45);
hsl.position.x = -24;
hsl.position.y = 1.7;
hsl.position.z = 12;
hsl.castShadow = true;
hsl.receiveShadow = true;

//healing station right
const hsr = new THREE.Mesh(
    new THREE.BoxGeometry(8, 5, 5),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
hsr.rotation.x = THREE.MathUtils.degToRad(-45);
hsr.position.x = -24;
hsr.position.y = 1.5;
hsr.position.z = 7;
hsr.castShadow = true;
hsr.receiveShadow = true;

//healsing station healing bit
const hs = new THREE.Mesh(
    new THREE.BoxGeometry(8, 1, 5.7),
    new THREE.MeshLambertMaterial({
        color: 'black',
        side: THREE.DoubleSide
    })
);
hs.position.x = -24;
hs.position.y = 4;
hs.position.z = 9.5;
hs.castShadow = true;
hs.receiveShadow = true;

//healsing station back bit
const hsb = new THREE.Mesh(
    new THREE.BoxGeometry(1, 5, 8),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
hsb.position.x = -28;
hsb.position.y = 4;
hsb.position.z = 9.5;
hsb.castShadow = true;
hsb.receiveShadow = true;

//healsing station front
const hsfront = new THREE.Mesh(
    new THREE.BoxGeometry(1, 3, 8),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
hsfront.position.x = -20;
hsfront.position.y = 3.7;
hsfront.position.z = 9.5;
hsfront.castShadow = true;
hsfront.receiveShadow = true;

//pc base
const pc = new THREE.Mesh(
    new THREE.BoxGeometry(5, 17, 8),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
pc.position.x = -26;
pc.position.y = 4;
pc.position.z = -27.5;
pc.castShadow = true;
pc.receiveShadow = true;

//pc screen
const pcscreen = new THREE.Mesh(
    new THREE.SphereGeometry(4,3),
    new THREE.MeshLambertMaterial({
        color: 'black',
        side: THREE.DoubleSide
    })
);
pcscreen.position.x = -25;
pcscreen.position.y = 8.5;
pcscreen.position.z = -27.5;
pcscreen.castShadow = true;
pcscreen.receiveShadow = true;

//pc back
const pcback = new THREE.Mesh(
    new THREE.BoxGeometry(5, 14, 6),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
pcback.position.x = -28;
pcback.position.y = 4;
pcback.position.z = -27.5;
pcback.castShadow = true;
pcback.receiveShadow = true;

//pc key
const pckey = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 7),
    new THREE.MeshLambertMaterial({
        color: '#d4e2e6',
        side: THREE.DoubleSide
    })
);
pckey.position.x = -24;
pckey.position.y = 2;
pckey.position.z = -27.5;
pckey.castShadow = true;
pckey.receiveShadow = true;

//screen
const screen = new THREE.Mesh(
    new THREE.BoxGeometry(1, 6, 9),
    new THREE.MeshLambertMaterial({
        color: '#ededea',
        side: THREE.DoubleSide
    })
);
screen.position.x = -30.3;
screen.position.y = 11;
screen.position.z = -1.5;
screen.castShadow = true;
screen.receiveShadow = true;

//screen2
const screen2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 5.3, 8.3),
    new THREE.MeshLambertMaterial({
        color: 'black',
        side: THREE.DoubleSide
    })
);
screen2.position.x = -30;
screen2.position.y = 11;
screen2.position.z = -1.5;
screen2.castShadow = true;
screen2.receiveShadow = true;

//map
const map = new THREE.Mesh(
    new THREE.BoxGeometry(1, 5, 8),
    new THREE.MeshLambertMaterial({
        color: '#dabb82',
        side: THREE.DoubleSide
    })
);
map.position.x = -30.5;
map.position.y = 9;
map.position.z = -40;
map.castShadow = true;
map.receiveShadow = true;

//map1
const map1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 4.5, 7.5),
    new THREE.MeshLambertMaterial({
        color: '#eefae6',
        side: THREE.DoubleSide
    })
);
map1.position.x = -30.1;
map1.position.y = 9;
map1.position.z = -40;
map1.castShadow = true;
map1.receiveShadow = true;

//wall dec bot
const walldec = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 7),
    new THREE.MeshBasicMaterial({
        color: '#ec7d6d',
        side: THREE.DoubleSide
    })
);
walldec.rotation.y = THREE.MathUtils.degToRad(-90);
walldec.position.y = 0;
walldec.position.x = -30;
walldec.castShadow = true;
walldec.receiveShadow = true;

//wall dec top
const walldect = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 1),
    new THREE.MeshBasicMaterial({
        color: '#ec7d6d',
        side: THREE.DoubleSide
    })
);
walldect.rotation.y = THREE.MathUtils.degToRad(-90);
walldect.position.y = 13.5;
walldect.position.x = -30;
walldect.castShadow = true;
walldect.receiveShadow = true;

//wall dec top2
const walldect2 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 1),
    new THREE.MeshBasicMaterial({
        color: '#ec7d6d',
        side: THREE.DoubleSide
    })
);
walldect2.rotation.y = THREE.MathUtils.degToRad(-90);
walldect2.position.y = 15;
walldect2.position.x = -30;
walldect2.castShadow = true;
walldect2.receiveShadow = true;

//wall dec top3
const walldect3 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 1),
    new THREE.MeshBasicMaterial({
        color: '#ec7d6d',
        side: THREE.DoubleSide
    })
);
walldect3.rotation.y = THREE.MathUtils.degToRad(-90);
walldect3.position.y = 4.5;
walldect3.position.x = -30;
walldect3.castShadow = true;
walldect3.receiveShadow = true;

//wall
const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 30),
    new THREE.MeshBasicMaterial({
        color: '#f6eca0',
        side: THREE.DoubleSide
    })
);
wall.rotation.y = THREE.MathUtils.degToRad(-90);
wall.position.y = 0;
wall.position.x = -30.3;
wall.castShadow = true;
wall.receiveShadow = true;

//floor
const groundMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 100),
    new THREE.MeshLambertMaterial({
        color: '#f0efbb',
        side: THREE.DoubleSide
    })
);
groundMesh.rotation.x = THREE.MathUtils.degToRad(-90);
groundMesh.position.y = 0;
groundMesh.castShadow = true;
groundMesh.receiveShadow = true;


scene.add(map1, map, screen2, screen, pckey, pcscreen, pcback, pc, walldect3, walldect2, walldect, wall, walldec, hsfront, hsb, hs, hsr, hsl, nursepc2, nursepc1, nursepc, bush3, bush2, bush1, stem1, pot3, pot2, pot1, shelf, mat, talk, cfl, cfls, cfr, cfrs, cf, cfs, b1, b1s, y1, y1s, gt, gt1, b2, b2s, y2, y2s, groundMesh);//all scenes

//draw/animate
//let boxMeshY = 1; sample 1
const clock = new THREE.Clock();
function draw() {

    //boxMeshY += 0.01; /sample 1
    //boxMesh.position.y = boxMeshY; //sampe 1
    //console.log(boxMeshY); //sample 1
    renderer.render(scene, camera);
    controls.update();
    //window.requestAnimationFrame(draw); //this or tje one below 
    renderer.setAnimationLoop(draw);
}

draw();

function setLayout() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//events
window.addEventListener( 'resize', setLayout);
