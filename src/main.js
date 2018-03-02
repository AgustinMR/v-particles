import vParticles from '@/components/vParticles';

const install = Vue => {
   Vue.component(vParticles.name, vParticles);
};

vParticles.install = install;

if (typeof window !== 'undefined' && window.Vue) {
   window.Vue.use(vParticles);
}

export default vParticles;
