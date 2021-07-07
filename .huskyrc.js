'use strict'

module.exports = {
  hooks: {
    'pre-push': 'npm build',
  },
}
