<template>
  <FlexboxLayout
  flexDirection="column"
  android:borderRadius="10"
  androidElevation="6"
  android:backgroundColor="white"
  marginTop="-15"
  class="rounded-lg p-1 mb-3 border-gray-200"
  style="border-width: 1;width: 94%;">

    <FlexboxLayout
    flexDirection="rows"
    justifyContent="space-between"
    alignItems="center"
    class="px-2 pt-2">
      <label
      textWrap="true"
      fontSize="22"
      text="ZEROFINDING"
      style="font-weight: 100;" />
      <label
      horizontalAlignment="left"
      verticalAlignment="middle"
      textWrap="true"
      fontSize="16"
      class="px-2"
      @tap="handleTap('Profile')">
        <formattedString>
          <span class="fas" text.decode="&#xf054;" />
        </formattedString>
      </label>
    </FlexboxLayout>

    <FlexboxLayout
    flexDirection="rows"
    justifyContent="space-between"
    class="px-2">
      <label
      textWrap="true"
      fontSize="15"
      text="081345678889"
      class="font-bold" />
      <FlexboxLayout
      flexDirection="column"
      justifyContent="center">
        <label
        textWrap="true"
        text="PREPAID"
        class="rounded-2xl bg-white px-1 text-center text-myim3-red border-myim3-red px-2"
        style="border-width: 1;font-size: 8;" />
      </FlexboxLayout>
      <label
      textWrap="true"
      fontSize="12"
      text="Berlaku s/d 29 Des 22"
      class="text-gray-500" />
    </FlexboxLayout>

    <FlexboxLayout
    flexDirection="column"
    justifyContent="center"
    class="mx-2 mt-2 border-t border-gray-300">
      <GridLayout columns="*, 135" class="py-1">
        <label
        col="0"
        textWrap="true"
        fontSize="14"
        class="font-semibold truncate"
        text="Reward Spesial Hanya Untuk Kamu!" />
        <label
        col="1"
        horizontalAlignment="right"
        verticalAlignment="middle"
        textWrap="true"
        class="px-1 font-bold text-myim3-red"
        @tap="handleTap('IMPoin')">
          <formattedString>
            <span fontSize="14" text="Daftar IMPoin " />
            <span fontSize="12" class="fas" text.decode="&#xf054; " />
          </formattedString>
        </label>
      </GridLayout>
    </FlexboxLayout>

    <FlexboxLayout
    flexDirection="column"
    class="mx-2 mt-2 border-t border-b border-gray-300">
      <GridLayout columns="*, 150" class="py-1">
        <FlexboxLayout
        col="0"
        flexDirection="column">
          <label
          textWrap="true"
          fontSize="14"
          class="font-semibold truncate"
          text="SISA PULSA" />
          <label
          textWrap="true"
          fontSize="22"
          text="Rp. 202.110"
          style="font-weight: 100;" />
        </FlexboxLayout>
        <label
        col="1"
        horizontalAlignment="right"
        verticalAlignment="middle"
        androidElevation="3"
        textWrap="true"
        fontSize="12"
        text="ISI ULANG"
        class="rounded-2xl text-white text-center mr-2 bg-myim3-red border-myim3-red font-bold px-4 py-1"
        style="border-width: 1;"
        @tap="handleTap('Isi Ulang')" />
      </GridLayout>
    </FlexboxLayout>

    <FlexboxLayout
    flexDirection="rows"
    justifyContent="space-around"
    class="mx-2 my-2">
      <FlexboxLayout
      flexDirection="column"
      class="border-r border-gray-300 px-2"
      @tap="handleTap('Data')">
        <Quota
        title="DATA"
        score="21 GB"
        classStyle="text-lg pt-4 text-myim3-blue" />
      </FlexboxLayout>

      <FlexboxLayout
      flexDirection="column"
      class="border-r border-gray-300 px-2"
      @tap="handleTap('Nelpon')">
        <Quota
        title="NELPON"
        score="0"
        classStyle="text-lg pt-4 text-myim3-red" />
      </FlexboxLayout>

      <FlexboxLayout
      flexDirection="column"
      class="border-r border-gray-300 px-2"
      @tap="handleTap('SMS')">
        <Quota
        title="SMS"
        score="0"
        classStyle="text-lg pt-4 text-myim3-red" />
      </FlexboxLayout>

      <FlexboxLayout
      flexDirection="column"
      class="px-2"
      @tap="handleTap('Kredit')">
        <Quota
        title="KREDIT"
        score="0"
        classStyle="text-lg pt-4 text-myim3-red" />
      </FlexboxLayout>
    </FlexboxLayout>

  </FlexboxLayout>
</template>

<script>
import Quota from './Quota.vue';
import Welcome from "../Welcome.vue";

export default {
  components: {
    Quota,
    Welcome
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
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

<style scoped lang="scss"></style>