<template>
  <div class="filter-bar">
    <div class="filter-breed filter">
      Breed:
      <select v-model="selectedBreed">
        <option
          v-for="breed in breeds"
          :key="breed"
          :value="breed">
            {{breed}}
          </option>
      </select>
    </div>
    <div class="filter-sub-breed filter" v-if="subBreeds.length > 0">
      Sub-breed:
      <select v-model="selectedSubBreed">
        <option
          v-for="subBreed in subBreeds"
          :key="subBreed"
          :value="subBreed">
          {{subBreed}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      selectedBreed: null,
      selectedSubBreed: null
    }
  },
  watch: {
    selectedBreed(breed) {
      this.loadImages({ breed })
    },
    selectedSubBreed(subBreed) {
      this.loadImages({
        breed: this.selectedBreed,
        subBreed
      })
    }
  },
  computed: {
    ...mapGetters({
      breeds: 'getBreeds',
      getSubBreeds: 'getSubBreeds'
    }),
    subBreeds() {
      if (!this.selectedBreed) return []

      return this.getSubBreeds(this.selectedBreed)
    }
  },
  methods: {
    ...mapActions({
      loadImages: 'loadImages'
    })
  },
  async created() {
    await this.$store.dispatch('loadBreeds')

    this.selectedBreed = this.breeds[0]
  }
}
</script>

<style scoped>
.filter-bar {
  background-color: #edeae1;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.42);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.42);
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.42);
}

@media only screen and (max-width: 500px) {
  .filter-bar {
    flex-direction: column;
  }
}

.filter {
  margin: 5px 20px;
}

select {
  border: 0;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}
</style>
