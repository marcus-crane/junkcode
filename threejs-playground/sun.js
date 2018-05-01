const THREE = require('three')

// *** SCENE ***

const scene = new THREE.Scene()

const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000)
camera.position.z = 75
scene.add(camera)

// *** GENERAL OBJECTS ***

const normalCube = new THREE.BoxGeometry(1, 1, 1)
const xMonolith = new THREE.BoxGeometry(6, 2, 1)
const yMonolith = new THREE.BoxGeometry(2, 6, 1)
const material = new THREE.MeshNormalMaterial()

// *** ADDING THE CENTRAL CUBE ***

const cube = new THREE.Mesh(normalCube, material)
scene.add(cube)

// *** INITIALISING THE MONOLITHS ***

const monolithLeft = new THREE.Mesh(xMonolith, material)
const monolithTop = new THREE.Mesh(yMonolith, material)
const monolithRight = new THREE.Mesh(xMonolith, material)
const monolithBottom = new THREE.Mesh(yMonolith, material)

// *** ADDING THE MONOLITHS TO THE SCENE (RELATIVE TO THE CENTER CUBE) ***

cube.add(monolithLeft)
cube.add(monolithTop)
cube.add(monolithRight)
cube.add(monolithBottom)

// *** POSITIONING THE MONOLITHS ***

monolithLeft.position.set(-5, 0, 0)
monolithTop.position.set(0, 5, 0)
monolithRight.position.set(5, 0, 0)
monolithBottom.position.set(0, -5, 0)

// *** RENDERER ***

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// *** ANIMATION ***

const clock = new THREE.Clock()

const animate = () => {
  requestAnimationFrame(animate)

  let t = clock.getElapsedTime()

  monolithLeft.position.x = Math.cos(0.5) * 10
  monolithTop.position.x = Math.cos(0.5) * 10
  monolithRight.position.x = Math.cos(0.5) * 10
  monolithBottom.position.x = Math.cos(0.5) * 10

  renderer.render(scene, camera)
}

animate()
