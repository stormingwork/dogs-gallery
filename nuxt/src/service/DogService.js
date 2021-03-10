import axios from 'axios'

/**
 * Service for calling Dog API.
 */
class DogService {
  /**
   * Constructor of the Dog Service.
   *
   * @param {Object} [config] Configuration for the service.
   * @param {String} [config.baseUrl='https://dog.ceo/api'] Url of the Dog API.
   */
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || 'https://dog.ceo/api'
  }

  /**
   * API Get method.
   *
   * @protected
   *
   * @param {String} path Endpoint path
   *
   * @returns {Promise<*>}
   */
  _get(path) {
    return axios.get(`${this.baseUrl}/${path}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.data)
  }

  /**
   * Returns the endpoint for a given breed and sub breed.
   * Or the endpoint for all breeds, if no breed is specified.
   *
   * @protected
   *
   * @param {String} [breed] Name of breed. Optional
   * @param {String} [subBreed] Name of sub breed. Optional.
   *
   * @returns {String}
   */
  _getBreedEndpoint(breed, subBreed) {
    if (!breed) {
      return 'breeds'
    }

    let endpoint = `breed/${breed}`

    if (subBreed) {
      endpoint += `/${subBreed}`
    }

    return endpoint
  }

  /**
   * Returns the random image endpoint based on the given image count, breed and dog sub breed.
   *
   * @protected
   *
   * @param {Number} [imageCount=1] How many random images to return. Default: 1
   * @param {String} [breedName] Of which breed to return random images. Optional.
   * @param {String} [subBreed] Of which sub breed to return random images. Optional.
   *
   * @returns {String}
   */
  _getRandomDogImagesEndpoint(imageCount = 1, breed, subBreed) {
    let endpoint = this._getBreedEndpoint(breed, subBreed)

    endpoint += '/image/random'

    if (imageCount > 1) {
      endpoint += `/${imageCount}`
    }

    return endpoint
  }

  /**
   * Returns available dog breeds. If a breed is given, returns available sub breeds.
   *
   * @async
   *
   * @param {String} [breed] Breed name for which to get sub breeds. Optional.
   *
   * @returns {Promise<Object>}
   */
  async getBreeds(breed) {
    let endpoint = `${this._getBreedEndpoint(breed)}/list`

    if (!breed) {
      endpoint += '/all'
    }

    try {
      return await this._get(endpoint)
    } catch (e) {
      console.error(e)
    }

    return null
  }

  /**
   * Returns random dog image/s.
   *
   * @async
   *
   * @param {Number} [imageCount=1] How many random images to return. Default: 1
   * @param {String} [breedName] Of which breed to return random images. Optional.
   * @param {String} [subBreed] Of which sub breed to return random images. Optional.
   *
   * @returns {Promise<Object>}
   */
  async getRandomDogImage(imageCount = 1, breed, subBreed) {
    const endpoint = this._getRandomDogImagesEndpoint(imageCount, breed, subBreed)

    try {
      return await this._get(endpoint)
    } catch (e) {
      console.error(e)
    }

    return null
  }

  /**
   * Returns dog images of a given breed (and sub breed)
   *
   * @async
   *
   * @param {String} breed Name of breed.
   * @param {String} [subBreed] Name of sub breed. Optional.
   *
   * @returns {Promise<Object>}
   */
  async getDogImages(breed, subBreed) {
    const endpoint = `${this._getBreedEndpoint(breed, subBreed)}/images`

    try {
      return await this._get(endpoint)
    } catch (e) {
      console.error(e)
    }

    return null
  }
}

export default DogService
