# Serverless Offline for Scaleway Serverless

This [Serverless](https://github.com/serverless/serverless) plugin emulates Scaleway Serverless Platform on your local machine to speed up your development cycles.
To do so, it starts an HTTP server that handles the request's lifecycle and invokes your handlers.

By using this project, you may develop functions quickly and easily locally before deploying them to Scaleway Serverless platform.

**Disclaimer**: 
This plugin is a fork of [AWS AGW emulation plugin: serverless-offline](https://github.com/dherault/serverless-offline), although we changed some things from the base project to adapt this plugin to Scaleway Serverless Platform.

## Features

* Node.js and Python λ runtimes.

**Please note** that Golang runtime is not supported by this plugin yet.

## Requirements

In order to use this project you will need:
- Node.js (version 8 and/or version 10)
- [Serverless Framework](https://serverless.com)
- Python (optional): in case you're working with python runtimes, this plugin will invoke either `python` (for python2) or `python3` binaries from your `PATH` to execute your handlers locally.

## Installation

First, add Serverless Offline to your project:

```bash
npm install serverless-offline-scaleway --save-dev
```

Then inside your project's `serverless.yml` file add following entry to the plugins section: `serverless-offline-scaleway`. If there is no plugin section you will need to add it to the file.

It should look something like this:

```yaml
plugins:
  - serverless-offline-scaleway
```

You can check wether you have successfully installed the plugin by running the serverless command line:

```bash
serverless
```

the console should display _Offline_ as one of the plugins now available in your Serverless project.

## Usage and command line options

In your project root run:

`serverless offline` or `sls offline`.

to list all the options for the plugin run:

`sls offline --help`

Any of the CLI options can be added to your `serverless.yml`. For example:

```
custom:
  serverless-offline-scaleway:
    host: "0.0.0.0"
    port: 4000
    printOutput: true
```

Options passed on the command line override YAML options.

By default you can send your requests to `http://localhost:3000/`. Please note that:

* You'll need to restart the plugin if you modify your `serverless.yml` or any of the default velocity template files.
* The event object passed to your λs has one extra key: `{ isOffline: true }`. Also, `process.env.IS_OFFLINE` is `true`.

You can use [serverless-dotenv-plugin](https://github.com/colynb/serverless-dotenv-plugin) to load environment variables from your `.env` file.

## Debug process

Serverless offline plugin will respond to the overall framework settings and output additional information to the console in debug mode. In order to do this you will have to set the `SLS_DEBUG` environmental variable. You can run the following in the command line to switch to debug mode execution.

> Unix: `export SLS_DEBUG=*`

> Windows: `SET SLS_DEBUG=*`

Interactive debugging is also possible for your project if you have installed the node-inspector module and chrome browser. You can then run the following command line inside your project's root.

Initial installation:
`npm install -g node-inspector`

For each debug run:
`node-debug sls offline`

The system will start in wait status. This will also automatically start the chrome browser and wait for you to set breakpoints for inspection. Set the breakpoints as needed and, then, click the play button for the debugging to continue.

Depending on the breakpoint, you may need to call the URL path for your function in seperate browser window for your serverless function to be run and made available for debugging.

## Load your environment variables

We recommend using [serverless-dotenv-plugin](https://github.com/colynb/serverless-dotenv-plugin) to load environment variables from .env files.

## Usage with Webpack (serverless-webpack plugin)

Use [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) to compile and bundle your ES-next code.

Run `serverless offline start`. In comparison with `serverless offline`, the `start` command will fire an `init` and a `end` lifecycle hook which is needed for serverless-offline to switch off resources.

Add plugins to your `serverless.yml` file:

```yaml
plugins:
  - serverless-webpack
  - serverless-offline #serverless-offline needs to be last in the list
```

## Contributing

Everyone is free to contribute by sending PRs or open Issues. Read the [Contributing Guidelines](./CONTRIBUTING.md) to get started.

As [Scaleway Functions (=> GO register)](https://www.scaleway.com/en/betas/#serverless) is only in early access phase, we (Scaleway) are the main contributors, and we shall review your PRs and answer your questions/enhance the codebase according to users's feedbacks.

You may contact us on our [Community Slack Channels](https://slack.online.net/).

## License

This project is MIT licensed.
