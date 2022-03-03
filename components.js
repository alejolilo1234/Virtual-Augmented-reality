AFRAME.registerComponent("disabled-button", {
  init: function() {
    var el = this.el;
    el.setAttribute("opacity", ".5");
    el.classList.remove("clickable");
  }
});