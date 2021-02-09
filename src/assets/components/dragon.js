var Dragon = {
  dragon: null,
  sceneEl: null,

  isReady: function() {
    return (this.dragon !== null);
  },

  getDragon: function() {
    if (this.dragon) return this.dragon;
    this.dragon = this.createDragon();
    this.sceneEl = document.querySelector('a-scene');
    this.sceneEl.appendChild(this.dragon);
    return this.dragon;
  },

  createDragon: function () {
    var newDragon = document.createElement('a-entity');
    newDragon.setAttribute('gltf-model', '#dragon');
    newDragon.setAttribute('scale', { 'x': 0.03, 'y': 0.03, 'z': 0.03 });
    newDragon.setAttribute('animation-mixer', 'clip: *;');
    newDragon.setAttribute('look-at', '[camera]');
    console.log('createDragon', newDragon);
    return newDragon;
  }
};

AFRAME.registerComponent('dragon', {
  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      //console.log('markerFound', markerId, marker);
      var dragon = Dragon.getDragon();
      dragon.setAttribute('position', marker.getAttribute('position'));
      // TODO: walking animation
    });

    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      //console.log('markerLost', markerId);
      // TODO: idle animation
    });
  },

  tick: function() {
    if (!Dragon.isReady()) return; // no dragon yet
    var marker = this.el;
    var rotation = marker.getAttribute('rotation');
    var dragon = Dragon.getDragon();
    dragon.setAttribute('position', marker.getAttribute('position'));
  }
});
