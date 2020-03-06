// var AFRAME = require('aframe-core');
// var NoClickLookControls = require('aframe-no-click-look-controls');
// AFRAME.registerComponent('no-click-look-controls', NoClickLookControls);


// window.addEventListener("mousemove", (event) => {
//   var x = event.clientX;     // Get the horizontal coordinate
//   var y = event.clientY;
// })


// AFRAME.registerComponent('rotation-reader', {
//   tick: function () {
//     // `this.el` is the element.
//     // `object3D` is the three.js object.

//     // `rotation` is a three.js Euler using radians. `quaternion` also available.
//     console.log(this.el.object3D.rotation);

//     // `position` is a three.js Vector3.
//     console.log(this.el.object3D.position);
//   }
// });

// import 'aframe'
// import 'aframe-mouse-cursor-component'

const scene = document.querySelector("#aframeScene");
const cubeButton = document.querySelector("#cubeButton");
const sidePanel = document.querySelector(".sidePanel");
const editSceneButton = document.querySelector("#editSceneButton");
const sidePanelOptions = document.querySelector(".sidePanelOptions");
const height = document.querySelector("#height");

editSceneButton.addEventListener("click", (event) => {
  editSceneButton.style.display = "none";
  sidePanel.style.display = "block";
});

cubeButton.addEventListener("click", (event) => {
  console.log("box inserted!")
  scene.insertAdjacentHTML("beforeend", `<a-box id="testBox" position="-1 0.5 -3" height="1" width="1" depth="1" rotation="0 45 0" color="#4CC3D9" shadow></a-box>`)
  sidePanel.style.display = "none";
  sidePanelOptions.style.display = "block";
});

height.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    console.log("enter pressed!")
    const box = document.querySelector("#testBox");
    box.attributes.height.value = height.value;
    // console.log(testBox.height)
  }
})

