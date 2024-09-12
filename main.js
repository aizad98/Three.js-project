

import * as THREE from 'three';
 
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'
console.log(gsap)
const gui = new dat.GUI()
console.log(OrbitControls)
const world={
  plane:{
    width:400,
    height:400,
    widthSegments:50,
    heightSegments:50,
  }
}

gui.add(world.plane,"width",1,500).onChange(generatePlane)
gui.add(world.plane,"height",1,500).onChange(generatePlane)
gui.add(world.plane,"heightSegments",1,100).onChange(generatePlane)
gui.add(world.plane,"widthSegments",1,100).onChange(generatePlane)


function generatePlane(){
  planemesh.geometry.dispose()
  planemesh.geometry = new THREE.PlaneGeometry
  (world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments
    )
//vertice position randomization
let randomValues =[]
const {array} = planemesh.geometry.attributes.position
for(let i=0; i<array.length; i ++ ){

  if ( i % 3 ===0){
  const x =array[i]
  const y = array[i +1 ]
  const z = array [i +2]
  array[i] = x + (Math.random() -0.5) * 3
  array[i +1] = y + (Math.random() -0.5) *3
  array[i +2] = z + (Math.random() -0.5)*4
  }
 randomValues.push(Math.random() *
Math.PI *2)
  // array [i + 2] = z + 3
  // console.log(array[i])
}

planemesh.geometry.attributes.position.randomValues = 
randomValues
planemesh.geometry.attributes.position.
originalPosition =
planemesh.geometry.attributes.position.array


const colors =[]
for(let i=0; i<planemesh.geometry.attributes.position.count; i++){
  colors.push(0,0.19,0.5)
}
planemesh.geometry.setAttribute('color',
  new THREE.BufferAttribute(new 
    Float32Array(colors),3
  )
)
}
//raycaster
const raycaster = new THREE.Raycaster()

// Create a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

const renderer = new THREE.WebGLRenderer();
// Set the renderer size to fill the entire window
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio)//it will give clean look to the box

// Append the renderer's DOM element to the body
document.body.appendChild(renderer.domElement);

new OrbitControls(camera,renderer.domElement)
// Position the camera so we can see the scene
camera.position.z = 50; // Move the camera back along the Z-axis


// animate(); // Start the animation/render loop
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
// scene.add(cube);

const planeGemoetry = new THREE.PlaneGeometry(
  world.plane.height,
  world.plane.width,
  world.plane.heightSegments,
  world.plane.widthSegments)
const planematerial = new THREE.MeshPhongMaterial({ 
  // color: 0xff0000,
  side:THREE.DoubleSide, //we will able to see the both side of the plane whiel rotating
 flatShading:true,
 vertexColors:true
});
const planemesh  = new THREE.Mesh(planeGemoetry,planematerial);
scene.add(planemesh)

console.log(planemesh.geometry.attributes.position.array)
generatePlane()

const light = new THREE.DirectionalLight(
  0xffffff,1
)
light.position.set(0,1.1,1)
scene.add(light)

const backlight = new THREE.DirectionalLight(
  0xffffff,1
)
backlight.position.set(0,0,-1)
scene.add(backlight)

const mouse = {
  x: undefined,
  y:undefined
}
// Render the scene (black background should appear)
let frame =0
function animate(){
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y +=0.01;
  // planemesh.rotation.x += 0.01;
  renderer.render(scene,camera)
  raycaster.setFromCamera(mouse,camera)

 frame += 0.01
 const{array,
  originalPosition,
  randomValues} = planemesh.geometry.attributes.position
 
 for (let i =0; i< array.length; i+= 3){

  //x
  array[i] = originalPosition [i] + 
  Math.cos(frame + randomValues[i]) * 0.01

  //y
  array[i +1] = originalPosition [i+1] + 
  Math.sin(frame + randomValues[i +1]) * 0.005
  // if(i === 0){
  //   console.log(Math.cos(frame))
  // }
  planemesh.geometry.attributes.position.needsUpdate = true
 }

  const intersects = raycaster.intersectObject(planemesh)
  if(intersects.length > 0){
    // console.log(intersects[0].face)
    const {color} = intersects[0].object.geometry.attributes

   //vertices1 
    color.setX(intersects[0].face.a,0.1)
    color.setY(intersects[0].face.a,0.5)
    color.setZ(intersects[0].face.a,1)
    //vertices2
    color.setX(intersects[0].face.b,0.1)
    color.setY(intersects[0].face.b,0.5)
    color.setZ(intersects[0].face.b,1)
    //vertices3
    color.setX(intersects[0].face.c,0.1)
    color.setY(intersects[0].face.c,0.5)
    color.setZ(intersects[0].face.c,1)
    intersects[0].object.geometry.attributes
    .color.needsUpdate= true


    const initialColor = {
      r:0,
      g:0.19,
      b:0.5
    }
    
    const hoverColor = {
      r:0.1,
      g:0.5,
      b:1
    }

    gsap.to(hoverColor,{
      r:initialColor.r,
      g:initialColor.g,
      b:initialColor.b,
      duration:1,
     onUpdate:()=>{
      color.setX(intersects[0].face.a,hoverColor.r)
      color.setY(intersects[0].face.a,hoverColor.g)
      color.setZ(intersects[0].face.a,hoverColor.b)
      //vertices2
      color.setX(intersects[0].face.b,hoverColor.r)
      color.setY(intersects[0].face.b,hoverColor.g)
      color.setZ(intersects[0].face.b,hoverColor.b)
      //vertices3
      color.setX(intersects[0].face.c,hoverColor.r)
      color.setY(intersects[0].face.c,hoverColor.g)
      color.setZ(intersects[0].face.c,hoverColor.b)
     }
    })
  }
}
animate();

addEventListener('mousemove',(Event)=>{
   mouse.x=(Event.clientX/innerWidth)*2-1
   mouse.y=-(Event.clientY/innerWidth)*2+1
})
console.log(mouse)