import Vue from 'nativescript-vue'

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

import Home from './pages/home/'

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
