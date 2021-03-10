<template>
  <div class="tile-container">
    <tile-image
      v-for="(image) in images"
      :key="getImageKey(image)"
      :img-src="image"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TileImage from './TileImage.vue'

export default {
  components: {
    TileImage
  },
  computed: {
    ...mapGetters({
        images: 'getImages'
    })
  },
  methods: {
    getImageKey(image) {
      const imageFileName = image.substring(image.lastIndexOf('/') + 1)

      return imageFileName.split('.')[0]
    }
  }
}
</script>

<style scoped>
.tile-container {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 300px;
  padding-top: 70px;
}
</style>
