import React from 'react'
import Particles from 'react-particles-js';
function Particle() {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "opacity": 0.02
                    },
                    "move": {
                        "direction": "right",
                        "speed": 10
                    },
                    "size": {
                        "value": 2
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 10,
                            "opacity_min": 0.5
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />
    )
}

export default Particle;
