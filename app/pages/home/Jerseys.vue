<template>
  <FlexboxLayout flexDirection="column" class="my-4">
    <label textWrap="true" class="ml-3 mb-1 text-gray-900">
      <FormattedString>
        <span text="Pilih " class="font-semibold text-xl truncate" />
        <span text="Jersey" class="font-extrabold text-xl truncate" />
      </FormattedString>
    </label>

    <FlexboxLayout
    flexWrap="wrap"
    justifyContent="space-between"
    alignItems="flex-start"
    class="mx-1">
      <template v-for="(field, counter) in dummyJerseys">
        <CardJersey :field="field" />
      </template>
    </FlexboxLayout>

  </FlexboxLayout>
</template>

<script>
import { dummyJerseys } from '../../datas';

import { CardJersey } from '../../components';
import Welcome from "../Welcome.vue";

export default {
  data() {
    return {
      dummyJerseys
    };
  },
  components: {
    CardJersey,
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