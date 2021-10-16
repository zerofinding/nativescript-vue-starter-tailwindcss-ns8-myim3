<template>
  <Carousel
  :id="id"
  ios:indicatorOffset="0,-30"
  ios:finite="true"
  ios:bounce="false"
  showIndicator="true"
  indicatorAnimation="WORM"
  indicatorColor="#43b883"
  indicatorColorUnselected="#3e556e"
  height="100%"
  width="100%"
  debug="false"
  @pageChanged="myChangeEvent"
  style="z-index: -1;">
    
    <template v-for="(field, counter) in datas">
      <CarouselItem :id="id+counter" verticalAlignment="middle">
        <GridLayout>
          <Image :src="field.gambar" stretch="aspectFill" />
        </GridLayout>
      </CarouselItem>
    </template>

  </Carousel>
</template>

<script>
export default {
  props: {
    id: String,
    datas: Object,
  },
  methods: {
    onTextRecognitionResult() {
      // console.log('onTextRecognitionResult');
    },
    myChangeEvent: function(args) {
      // var changeEventText = 'Page changed to index: ' + args.index;
      // console.log(changeEventText);
    }
  }
};
</script>

<style scoped></style>