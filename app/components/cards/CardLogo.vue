<template>
  <FlexboxLayout
  android:borderRadius="10"
  androidElevation="6"
  android:backgroundColor="white"
  class="rounded-lg my-4 mx-1 p-2 border-gray-200"
  style="border-width: 1;"
  @tap="handleTap(field.nama)">
    <image
    :src="field.gambar"
    stretch="aspectFit"
    loadMode="async"
    class="rounded-lg" />
  </FlexboxLayout>
</template>

<script>
import Welcome from "../../pages/Welcome.vue";

export default {
  props: {
    field: Object,
  },
  components: {
    Welcome
  },
  methods: {
    handleTap(page) {
      this.$navigateTo(Welcome, {
        props: { pages: page },
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
    },
  }
};
</script>

<style scoped></style>