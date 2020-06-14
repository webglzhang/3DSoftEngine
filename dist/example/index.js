///<reference path="../math/babylon.math.ts"/>
///<reference path="../render/SoftEngine.ts"/>
var canvas;
var device;
var mesh;
var meshes = [];
var mera;
document.addEventListener("DOMContentLoaded", init, false);
function init() {
    canvas = document.getElementById("frontBuffer");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mesh = new SoftEngine.Mesh("Cube", 8);
    meshes.push(mesh);
    mera = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);
    mesh.Vertices[0] = new BABYLON.Vector3(-1, 1, 1);
    mesh.Vertices[1] = new BABYLON.Vector3(1, 1, 1);
    mesh.Vertices[2] = new BABYLON.Vector3(-1, -1, 1);
    mesh.Vertices[3] = new BABYLON.Vector3(-1, -1, -1);
    mesh.Vertices[4] = new BABYLON.Vector3(-1, 1, -1);
    mesh.Vertices[5] = new BABYLON.Vector3(1, 1, -1);
    mesh.Vertices[6] = new BABYLON.Vector3(1, -1, 1);
    mesh.Vertices[7] = new BABYLON.Vector3(1, -1, -1);
    mera.Position = new BABYLON.Vector3(0, 0, 10);
    mera.Target = new BABYLON.Vector3(0, 0, 0);
    // Calling the HTML5 rendering loop
    requestAnimationFrame(drawingLoop);
}
// Rendering loop handler
function drawingLoop() {
    device.clear();
    // rotating slightly the cube during each frame rendered
    mesh.Rotation.x += 0.01;
    mesh.Rotation.y += 0.01;
    // Doing the various matrix operations
    device.render(mera, meshes);
    // Flushing the back buffer into the front buffer
    device.present();
    // Calling the HTML5 rendering loop recursively
    requestAnimationFrame(drawingLoop);
}
