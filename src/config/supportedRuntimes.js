// native runtime support for AWS
// https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html

// GO
export const supportedGo = new Set([])

// NODE.JS
export const supportedNodejs = new Set(['node10', 'node8'])

// PROVIDED
export const supportedProvided = new Set(['provided'])

// PYTHON
export const supportedPython = new Set(['python', 'python3'])

// RUBY
export const supportedRuby = new Set(['ruby2.5', 'ruby2.7'])

// deprecated runtimes
// https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html
export const supportedRuntimes = new Set([
  ...supportedGo,
  ...supportedNodejs,
  ...supportedProvided,
  ...supportedPython,
  ...supportedRuby,
])
