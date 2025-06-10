particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
