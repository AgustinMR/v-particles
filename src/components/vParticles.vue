<template>
   <div class="container">
      <div>
         <slot>
            <div></div>
         </slot>
      </div>
      <canvas
         id="particles-container"
         :style="{
         backgroundColor: background,
         maxHeight: height,
         maxWidth: width,
         position: position
      }"
      ></canvas>
   </div>
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
            default: 4
         },
         speed: {
            type: Number,
            required: false,
            default: 0.5
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
            default: 93
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
                     maxParticles: 0
                  }
               }
            ]
         },
         height: {
            type: String,
            required: false,
            default: 'auto',
         },
         width: {
            type: String,
            required: false,
            default: 'auto'
         },
         position: {
            type: String,
            required: false,
            default: 'absolute'
         },
         scaleWidth: {
            type: Number,
            required: false,
            default: 1
         },
         scaleHeight: {
            type: Number,
            required: false,
            default: 1
         }
      },
      computed: {
         particles() {
            return document.getElementById("particles-container").getContext("2d");
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
      },
      watch: {
         scaleWidth(newValue) {
            if (newValue !== undefined && newValue > 0)
               this.particles.scale(newValue, this.scaleHeight);
         },
         scaleHeight(newValue) {
            if (newValue !== undefined && newValue > 0)
               this.particles.scale(this.scaleWidth, newValue);
         }
      }
   }
</script>

<style scoped>
   #particles-container {
      padding: 0;
      top: 0;
      left: 0;
      z-index: -1;
   }

   .container {
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>
