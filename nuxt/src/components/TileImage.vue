
<template>
  <div class="tile-image">
    <img v-lazy="imgSrc">
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  min-width: 300px;
  object-fit: cover;
}

img[lazy="loaded"] {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.42);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.42);
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.42);
}
</style>
