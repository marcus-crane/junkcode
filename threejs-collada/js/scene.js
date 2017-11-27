if (!Detector.webgl) Detector.addGetWebGLMessage();

var container, clock;
var camera, scene, renderer, character;

init();
animate();

function init() {
    container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 2000);
    camera.position.set(8, 10, 8);
    camera.lookAt(new THREE.Vector3(0, 3, 0));

    scene = new THREE.Scene()

    clock = new THREE.Clock()

    // Loading manager
    var loadingManager = new THREE.LoadingManager(function() {
        scene.add(character);
    })

    // Collada
    var loader = new THREE.ColladaLoader(loadingManager);
    loader.load('./models/character.dae', function(collada) {
        character = collada.scene;
    })
}