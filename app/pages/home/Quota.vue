<template>
  <FlexboxLayout
    flexDirection="column">
    <GridLayout columns="*, 10" height="21">
      <label
      col="0"
      :text="title"
      fontSize="12"
      class="font-semibold truncate" />
      <label
      col="1"
      horizontalAlignment="right"
      verticalAlignment="middle"
      textWrap="true"
      fontSize="10">
        <formattedString>
          <span class="fas truncate text-gray-400" text.decode="&#xf054; " />
        </formattedString>
      </label>
    </GridLayout>

    <label
    height="50"
    horizontalAlignment="left"
    verticalAlignment="middle"
    textWrap="true"
    fontSize="14"
    :text="score"
    :class="classStyle" />
  </FlexboxLayout>
</template>

<script>
export default {
  props: {
    title: String,
    score: String,
    classStyle: String,
  }
};
</script>

<style scoped></style>