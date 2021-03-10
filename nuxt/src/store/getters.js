/**
 * Returns available dog images.
 *
 * @param {*} state Vuex store state.
 * @returns {Array<String>}
 */
export const getImages = state => {
  return state.images
}

/**
 * Returns available dog breeds.
 *
 * @param {*} state Vuex store state.
 * @returns {Array<String>}
 */
export const getBreeds = state => {
  return Object.keys(state.breeds)
}

/**
 * Returns available dog sub breeds.
 *
 * @param {*} state Vuex store state.
 * @returns {Array<String>}
 */
export const getSubBreeds = state => breed => {
  if (!breed) return state.subBreeds

  return state.breeds[breed]
}
