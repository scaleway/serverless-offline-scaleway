export default class HttpEventDefinition {
  constructor(rawHttpEventDefinition) {
    this.method = '*'
    this.path = rawHttpEventDefinition.path
  }
}
