<template>
  <FlexboxLayout
  flexDirection="column"
  justifyContent="space-around"
  androidElevation="6"
  android:backgroundColor="white"
  class="rounded-lg my-3 mx-2 border-gray-200"
  style="border-width: 1;"
  @tap="handleTap(field.nama)">
    <WrapLayout
    width="154"
    height="215"
    class="text-center"
    style="padding-top: 30px;">
      <image
      :src="field.gambar[0]"
      stretch="aspectFit"
      loadMode="async"
      class="rounded-lg" />
      <label
      horizontalAlignment="center"
      verticalAlignment="center"
      textWrap="false"
      fontSize="14"
      :text="field.nama"
      class="mx-2 my-2 mb-2 px-1 text-gray-900 truncate" />
    </WrapLayout>
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