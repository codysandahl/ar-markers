/**
 * Track a marker, but the model persists even if the marker disappears
 * NOTE: to throttle, see https://aframe.io/docs/1.2.0/core/utils.html#aframe-utils-throttletick-function-t-dt-minimuminterval-optionalcontext
 */
AFRAME.registerComponent('tracker', {
  schema: {
    marker: { type: 'selector' },
    rotation: { type: 'boolean', default: true },
    position: { type: 'boolean', default: true }
  },

  init: function () {
  },

  tick: function(time, timeDelta) {
    if (this.data.marker.getAttribute("visible")) {
      this.el.setAttribute("visible", true);
      if (this.data.position) {
        this.el.setAttribute("position", this.data.marker.getAttribute("position"));
      }
      if (this.data.rotation) {
        this.el.setAttribute("rotation", this.data.marker.getAttribute("rotation"));
      }
    }
  }
});
