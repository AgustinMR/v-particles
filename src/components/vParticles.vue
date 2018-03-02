<template>
   <canvas :style="{backgroundColor: background}" id="particles-container">s</canvas>
</template>
<script>
   import "../lib/particles.min";

   export default {
      name: "v-particles",
      props: {
         maxParticles: {
            type: Number,
            required: false,
            default: 127
         },
         sizeVariations: {
            type: Number,
            required: false,
            default: 3
         },
         speed: {
            type: Number,
            required: false,
            default: 0.4
         },
         color: {
            type: [String, Array],
            required: false,
            default: "#a34242"
         },
         background: {
            type: String,
            required: false,
            default: "#FAFBFC"
         },
         minDistance: {
            type: Number,
            required: false,
            default: 77
         },
         connectParticles: {
            type: Boolean,
            required: false,
            default: true
         },
         responsive: {
            type: Array,
            required: false,
            default: [
               {
                  breakpoint: 768,
                  options: {
                     maxParticles: 200,
                     connectParticles: true
                  }
               }, {
                  breakpoint: 425,
                  options: {
                     maxParticles: 100,
                     connectParticles: true
                  }
               }, {
                  breakpoint: 320,
                  options: {
                     maxParticles: 0 // disables particles.js
                  }
               }
            ]
         }
      },
      mounted() {
         Particles.init({
            selector: '#particles-container',
            maxParticles: this.maxParticles,
            sizeVariations: this.sizeVariations,
            speed: this.speed,
            color: this.color,
            minDistance: this.minDistance,
            connectParticles: this.connectParticles,
            responsive: this.responsive
         });
      }
   }
</script>

<style scoped>
   #particles-container {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
   }
</style>
