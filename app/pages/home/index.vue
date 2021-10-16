<template>
  <page actionBarHidden="true">
    <ScrollView
    orientation="vertical"
    class="bg-white"
    ref="scrollView"
    @scroll="onScroll">
      <StackLayout>

        <DockLayout
        stretchLastChild="false"
        height="255"
        ref="topView">
          <GridLayout dock="top">
            <CarouselVue id="hero" :datas="dummyCarousels" />
          </GridLayout>
        </DockLayout>

        <Dashboard />
        <Ligas />
        <Jerseys />

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { dummyCarousels } from '../../datas';
import { CarouselVue } from '../../components';

import Dashboard from './Dashboard';
import Ligas from './Ligas.vue';
import Jerseys from './Jerseys.vue';

export default {
  data() {
    return {
      dummyCarousels,
    };
  },
  components: {
    CarouselVue,
    Dashboard,
    Ligas,
    Jerseys
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  },
  methods: {
    onScroll: function() {
      //access to the native event
      const scrollView = this.$refs.scrollView.nativeView;
      const topView = this.$refs.topView.nativeView;

      // if the offset is less than the height of the header.
      if (scrollView.verticalOffset < 150) {
        const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
        if (scrollView.ios) {
          // iOS adjust the position with an animation to create a smother scrolling effect. 
          topView.animate({ translate: { x: 0, y: offset } }).then(() => {}, () => {});
        } else {
          // Android, animations are jerky so instead just adjust the position without animation.
          topView.translateY = Math.floor(offset);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>