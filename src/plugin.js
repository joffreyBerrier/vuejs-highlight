import highlight from './Highlight.vue';

module.exports = {
  install(Vue, options) {
    Vue.component('highlight', highlight);
  }
};