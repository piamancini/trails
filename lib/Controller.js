/**
 * Trails Controller Class.
 */
module.exports = class TrailsController {

  constructor (app) {
    Object.defineProperty(this, 'app', {
      enumerable: false,
      writable: false,
      value: app
    })
  }

  /**
   * Return the id of this controller
   */
  get id () {
    return this.constructor.name.replace(/(\w+)Controller/, '$1').toLowerCase()
  }

  /**
   * Return a reference to the Trails logger
   */
  get log () {
    return this.app.log
  }

  /**
   * Return a reference to the Trails configuration map.
   */
  get config () {
    return this.app.config
  }

  get services () {
    return this.app.services
  }
}
