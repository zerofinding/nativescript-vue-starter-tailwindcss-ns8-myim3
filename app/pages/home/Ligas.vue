<template>
  <FlexboxLayout flexDirection="column" class="mt-4">
    <label textWrap="true" class="ml-3 mb-1 text-gray-900">
      <FormattedString>
        <span text="Pilih " class="font-semibold text-xl truncate" />
        <span text="Liga" class="font-extrabold text-xl truncate" />
      </FormattedString>
    </label>

    <FlexboxLayout
    flexDirection="row"
    justifyContent="space-between"
    alignItems="flex-start"
    height="100"
    class="px-2">
      <template v-for="(field, counter) in dummyLigas">
        <CardLogo :field="field" />
      </template>
    </FlexboxLayout>

  </FlexboxLayout>
</template>

<script>
import { dummyLigas } from '../../datas';

import { CardLogo } from '../../components';
import Welcome from "../Welcome.vue";

export default {
  data() {
    return {
      dummyLigas
    };
  },
  components: {
    CardLogo,
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