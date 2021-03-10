
import DogService from '../service/DogService.js'

/**
 * Dog service instance for loading images & breeds.
 *
 * @type {DogService}
 */
const dogService = new DogService()

/**
 * Checks if a given response is a success response.
 *
 * @private
 *
 * @param {Object} response Response object.
 *
 * @returns {Boolean}
 */
const isSuccessResponse = (response) => {
  return response.status === 'success'
}

/**
 * Loads dog images from underlying service.
 *
 * @async
 *
 * @param {*} context Vuex store context.
 * @param {Object} options Options
 * @param {String} options.breed Name of breed.
 * @param {String} [options.subBreed] Name of sub breed. Optional
 */
export const loadImages = async(context, { breed, subBreed }) => {
  const response = await dogService.getDogImages(breed, subBreed)

  if (!isSuccessResponse(response)) {
    context.commit('SET_ERROR', response)
  } else {
    context.commit('SET_IMAGES', response.message)
  }
}

/**
 * Loads dog breeds from underlying service. If breed is specified, it will load breed's sub breeds.
 *
 * @async
 *
 * @param {*} context Vuex store context.
 * @param {Object} options Options
 * @param {String} [options.breed] Name of breed, to load sub breeds. Optional.
 */
export const loadBreeds = async(context, breed) => {
  const response = await dogService.getBreeds(breed)

  if (!isSuccessResponse(response)) {
    context.commit('SET_ERROR', response)
  } else {
    const mutation = breed ? 'SET_SUB_BREEDS' : 'SET_BREEDS'

    context.commit(mutation, response.message)
  }
}
