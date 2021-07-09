export default {
  apiKey: {
    usage:
      'Defines the API key value to be used for endpoints marked as private. Defaults to a random hash.',
    type: 'string',
  },
  corsAllowHeaders: {
    usage:
      'Used to build the Access-Control-Allow-Headers header for CORS support.',
    type: 'string',
  },
  corsAllowOrigin: {
    usage:
      'Used to build the Access-Control-Allow-Origin header for CORS support.',
    type: 'string',
  },
  corsDisallowCredentials: {
    usage:
      'Used to override the Access-Control-Allow-Credentials default (which is true) to false.',
    type: 'boolean',
  },
  corsExposedHeaders: {
    usage:
      'Used to build the Access-Control-Exposed-Headers response header for CORS support',
    type: 'string',
  },
  disableCookieValidation: {
    usage: 'Used to disable cookie-validation on hapi.js-server',
    type: 'boolean',
  },
  enforceSecureCookies: {
    usage: 'Enforce secure cookies',
    type: 'boolean',
  },
  hideStackTraces: {
    usage: 'Hide the stack trace on lambda failure. Default: false',
    type: 'boolean',
  },
  host: {
    shortcut: 'o',
    usage: 'The host name to listen on. Default: localhost',
    type: 'string',
  },
  httpPort: {
    usage: 'HTTP port to listen on. Default: 3000',
    type: 'string',
  },
  httpsProtocol: {
    shortcut: 'H',
    usage:
      'To enable HTTPS, specify directory (relative to your cwd, typically your project dir) for both cert.pem and key.pem files.',
    type: 'string',
  },
  lambdaPort: {
    usage: 'Lambda http port to listen on. Default: 3002',
    type: 'string',
  },
  noPrependStageInUrl: {
    usage: "Don't prepend http routes with the stage.",
    type: 'boolean',
  },
  noAuth: {
    usage: 'Turns off all authorizers',
    type: 'boolean',
  },
  noTimeout: {
    shortcut: 't',
    usage: 'Disables the timeout feature.',
    type: 'boolean',
  },
  printOutput: {
    usage: 'Outputs your lambda response to the terminal.',
    type: 'boolean',
  },
  resourceRoutes: {
    usage: 'Turns on loading of your HTTP proxy settings from serverless.yml.',
    type: 'boolean',
  },
  useChildProcesses: {
    usage: 'Uses separate node processes for handlers',
    type: 'boolean',
  },
  useWorkerThreads: {
    usage:
      'Uses worker threads for handlers. Requires node.js v11.7.0 or higher',
    type: 'boolean',
  },
  websocketPort: {
    usage: 'Websocket port to listen on. Default: 3001',
    type: 'string',
  },
  useDocker: {
    usage: 'Uses docker for node/python/ruby',
    type: 'boolean',
  },
}
