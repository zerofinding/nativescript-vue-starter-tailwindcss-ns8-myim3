<template>
  <Page class="h-screen w-screen">
    <ActionBar class="text-white bg-myim3-red">
      <GridLayout columns="32, *">
        <label
        col="0"
        horizontalAlignment="left"
        verticalAlignment="center"
        fontSize="16"
        @tap="$navigateBack">
          <FormattedString>
            <Span class="fas text-white" text.decode="&#xf053; " />
          </FormattedString>
        </label>
        <label
        col="1"
        horizontalAlignment="left"
        verticalAlignment="center"
        fontSize="17"
        :text="pages"
        class="text-white" />
      </GridLayout>
    </ActionBar>

    <GridLayout>
      <Label class="info" fontSize="16">
        <FormattedString>
          <Span class="fas" text.decode="&#xf054; " />
          <Span :text="message" />
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  props: {
    pages: String,
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  }
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.text-white {
  @include colorize($color: white);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>