const THREE = require('three')

// SCENE

let scene = new THREE.Scene()

// Setting out aspect ratio to be 100% of the browser window
const aspectRatio = window.innerWidth / window.innerHeight

// Our camera will have an FoV of 75 with a near of 1 and far of 10K
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 1, 10000 )
// Our camera will live at 450 on the z index
camera.position.z = 1500
// and now we add our camera to the scene
scene.add(camera)

// NUCLEUS OBJECT

// Our nucleus shape will be a large sphere with width of 20, height of 20 and radius of 100
const bigSphere = new THREE.SphereGeometry( 100, 20, 20 )
// It will have a regular mesh
const cover = new THREE.MeshNormalMaterial()
// now we make our nucleus by applying the mesh to our geometry
const nucleus = new THREE.Mesh(bigSphere, cover)
// and we add it to our scene!
scene.add(nucleus)

// ELECTRON 1

// Create a small electron with a radius, width and height of 20
const smallSphere = new THREE.SphereGeometry( 20, 20, 20 )
// Apply our previous MeshNormalMaterial to the sphere
const electron1 = new THREE.Mesh(smallSphere, cover)
// add our electron to the nucleus
nucleus.add(electron1)
// Set the position of our electron
electron1.position.set( -150, 150, 0 )

// ELECTRON 2
const electron2 = new THREE.Mesh(smallSphere, cover)
nucleus.add(electron2)
electron2.position.set(150, 150, 0)

// ELECTRON 3
const electron3 = new THREE.Mesh(smallSphere, cover)
nucleus.add(electron3)
electron3.position.set(0, 0, 150)

// RENDERER

const renderer = new THREE.WebGLRenderer()
// Set our renderer to take up the entire browser window
renderer.setSize(window.innerWidth, window.innerHeight)
// Append our renderer to the DOM
document.body.appendChild(renderer.domElement)
// and pass our scene and camera into the renderer

// ANIMATION

// Our clock will let us keep track of  re
const clock = new THREE.Clock()

const animate = () => {
  requestAnimationFrame(animate)

  let t = clock.getElapsedTime()
  // We pass our renderer into the animate function to ensure it called every frame
  renderer.render(scene, camera)

  // MOTION

  // Orbit from bottom right to top left

  electron1.position.x = Math.cos(5*t) * -75
  electron1.position.y = Math.sin(5*t) * 150
  electron1.position.z = Math.cos(5*t) * 150

  // Orbit from top right to bottom left

  electron2.position.x = Math.sin(5*t) * 150
  electron2.position.y = Math.cos(5*t) * 100
  electron2.position.z = Math.sin(5*t) * 150

  // Offset the timer by 1.5 seconds
  let tOffset = 2 + clock.getElapsedTime()

  // Orbit from bottom to top

  electron3.position.x = Math.sin(5*tOffset) * 0
  electron3.position.y = Math.sin(5*tOffset) * 300
}

animate()
