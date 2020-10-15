import React from 'react'
import Particles from 'react-particles-js'

const MyParts = () => (<Particles
  style={{position: 'fixed', top:0, width: "100%", zIndex:-1}}
  height="1000px"
  params={{
    fpsLimit: 60,
    emitters: {
      direction: "random",
      size: {
        width: 50,
        height: 50
      },
      position: {
        x: 50,
        y: 50
      },
      rate: {
        delay: 3,
        quantity: 1
      }
    },
    particles: {
      number: {
        value: 2
      },
      color: {
        value: [
          "#3998D0",
          "#2EB6AF",
          "#A9BD33",
          "#FEC73B",
          "#F89930",
          "#F45623",
          "#D62E32",
          "#EB586E",
          "#9952CF"
        ]
      },
      shape: {
        type: "circle"
      },
      // opacity: {
      //   value: .5,
      //   random: {
      //     enable: true,
      //     minimumValue: 0.3
      //   }
      // },
      size: {
        value: 50,
        anim: {
          enable: true,
          speed: 1,
          size_min: 2,
          sync: true,
          startValue: "max",
          destroy: "min"
        }
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "destroy",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0
          }
        },
        repulse: {
          distance: 100
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
    }}
   />
)
export default MyParts;
