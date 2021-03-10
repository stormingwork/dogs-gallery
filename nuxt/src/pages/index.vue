
<template>
  <div class="main">
    <FilterBar />
    <TileContainer />
  </div>
</template>
<script>
import FilterBar from '~/components/FilterBar.vue'
import TileContainer from '~/components/TileContainer.vue'

export default {
  components: {
    FilterBar,
    TileContainer
  }
}
</script>
