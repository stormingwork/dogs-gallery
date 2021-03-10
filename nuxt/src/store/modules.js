
export const state = () => ({
  /**
   * Available dog breeds.
   *
   * @type {Object}
   */
  breeds: {},
  /**
   * Available dog sub breeds.
   *
   * @type {Array<String>}
   */
  subBreeds: [],
  /**
   * Available dog images.
   *
   * @type {Array<String>}
   */
  images: [],
  /**
   * Error state, if not null
   *
   * @type {Object}
   */
  error: null
})

/**
 * Vuex Store mutations
 */
export const mutations = {
  /**
   * Sets dog breeds in store.
   *
   * @param {*} state Vuex store state
   * @param {*} breeds Breeds to set.
   */
  SET_BREEDS(state, breeds) {
    state.breeds = breeds
  },

  /**
   * Sets dog sub breeds in store.
   *
   * @param {*} state Vuex store state
   * @param {*} subBreeds Sub breeds to set.
   */
  SET_SUB_BREEDS(state, subBreeds) {
    state.subBreeds = subBreeds
  },

  /**
   * Sets dog images in store.
   *
   * @param {*} state Vuex store state
   * @param {Array<String>} images Dog images to set.
   */
  SET_IMAGES(state, images) {
    state.images = images
  },

  /**
   * Sets error state in store. If error state null, clears error state.
   *
   * @param {*} state Vuex store state
   * @param {*} error Error state to set. If null, clears error state.
   */
  SET_ERROR(state, error) {
    console.error(error)
    state.error = error
  }
}
