<template>
   <div style="padding: 0" :style="{maxHeight: '100%', height: height}">
      <div id="root" :style="{maxHeight: '100%', height: height}" style="display: flex;justify-content: center"
           class="header">
         <div class="header__meta">
            <slot name="header">
               <div></div>
            </slot>
         </div>
         <div class="container">
            <slot name="content">
               <div></div>
            </slot>
         </div>
         <div class="header__scroll">
            <slot name="footer">
               <div></div>
            </slot>
         </div>
         <canvas :id="'particles-container-' + id" :style="{background: background}"
                 class="header__background"></canvas>
      </div>
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
         scaleWidth: {
            type: Number,
            required: false,
            default: 1
         },
         scaleHeight: {
            type: Number,
            required: false,
            default: 1
         },
         height: {
            type: String,
            required: false,
            default: 'inherit'
         },
         id: {
            type: String,
            required: false,
            default: ''
         }
      },
      computed: {
         particles() {
            return document.getElementById('particles-container-' + this.id).getContext("2d");
         },
      },
      mounted() {
         Particles.init({
            selector: '#particles-container-' + this.id,
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
   .container {
      padding: 0;
      text-align: center;
      margin-top: -15%;
      position: absolute;
      align-content: center;
      align-self: center;
      align-items: center;
   }

   .header {
      left: 0;
      top: 0;
      width: 100%;
      max-width: inherit;
      display: block;
      position: absolute;
   }

   .header .header__background {
      position: relative;
      display: block;
   }

   .header .header__meta {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
   }

   .header .header__meta li {
      display: inline-block;
   }

   .header .header__meta li:after {
      display: inline-block;
      content: "";
      width: 1px;
      height: 10px;
      margin: 0 13px 0 17px;
      opacity: 0.46;
   }

   .header .container {
      z-index: 10;
   }

   .header .header__scroll {
      position: absolute;
      width: 110px;
      bottom: 0;
      margin: 0;
      text-align: center;
      z-index: 10;
   }
</style>
