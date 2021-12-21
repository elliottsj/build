# Snapshot report for `packages/build/tests/install/tests.mjs`

The actual snapshot is saved in `tests.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## Functions: install dependencies nested

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/dir␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/dir␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/dir/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/dir␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/dir/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. @netlify/plugin-functions-install-core (onPreBuild event)  ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Installing functions dependencies␊
    ␊
    (@netlify/plugin-functions-install-core onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      2. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - function/index.js␊
    ␊
    ␊
    (Functions bundling completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: ignore package.json inside node_modules

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/modules␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/modules␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/modules/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/modules␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/modules/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. @netlify/plugin-functions-install-core (onPreBuild event)  ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    ␊
    (@netlify/plugin-functions-install-core onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      2. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - test.js␊
    ␊
    ␊
    (Functions bundling completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: install dependencies with npm

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/functions_npm␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/functions_npm␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/functions_npm/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/functions_npm␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/functions_npm/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. @netlify/plugin-functions-install-core (onPreBuild event)  ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Installing functions dependencies␊
    ␊
    (@netlify/plugin-functions-install-core onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      2. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    (Functions bundling completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: install dependencies with Yarn locally

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/functions_yarn␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: 'true'␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/functions_yarn␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/functions_yarn/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/functions_yarn␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/functions_yarn/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. @netlify/plugin-functions-install-core (onPreBuild event)  ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Installing functions dependencies␊
    ␊
    (@netlify/plugin-functions-install-core onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      2. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    (Functions bundling completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: install dependencies with Yarn in CI

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      deployId: functions_yarn_ci␊
      mode: buildbot␊
      repositoryRoot: packages/build/tests/install/fixtures/functions_yarn_ci␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: 'true'␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/functions_yarn_ci␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/functions_yarn_ci/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/functions_yarn_ci␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/functions_yarn_ci/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. @netlify/plugin-functions-install-core (onPreBuild event)  ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Installing functions dependencies␊
    ␊
    (@netlify/plugin-functions-install-core onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      2. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    (Functions bundling completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: does not install dependencies unless opting in

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/optional␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/optional␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/optional/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/optional␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/optional/functions␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      A Netlify Function is using "math-avg" but that dependency has not been installed yet.␊
    ␊
      By default, dependencies inside a Netlify Function's "package.json" are not automatically installed.␊
      There are several ways to fix this problem:␊
        - Removing your Function's "package.json" and adding the dependencies to the project's top-level "package.json" instead. This is the fastest and safest solution.␊
        - Running "npm install" or "yarn" inside your Netlify Function in your build command.␊
        - Adding the following plugin to your "netlify.toml":␊
    ␊
      [[plugins]]␊
      package = "@netlify/plugin-functions-install-core"␊
    ␊
      In file "packages/build/tests/install/fixtures/optional/functions/index.js"␊
      Cannot find module 'math-avg'␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/optional␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/optional/functions`

## Functions: does not install dependencies unless opting in (with esbuild)

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/optional-esbuild␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/optional-esbuild␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/optional-esbuild/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/optional-esbuild␊
        publishOrigin: default␊
      functions:␊
        '*':␊
          node_bundler: esbuild␊
      functionsDirectory: packages/build/tests/install/fixtures/optional-esbuild/functions␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      A Netlify Function is using "math-avg" but that dependency has not been installed yet.␊
    ␊
      By default, dependencies inside a Netlify Function's "package.json" are not automatically installed.␊
      There are several ways to fix this problem:␊
        - Removing your Function's "package.json" and adding the dependencies to the project's top-level "package.json" instead. This is the fastest and safest solution.␊
        - Running "npm install" or "yarn" inside your Netlify Function in your build command.␊
        - Adding the following plugin to your "netlify.toml":␊
    ␊
      [[plugins]]␊
      package = "@netlify/plugin-functions-install-core"␊
    ␊
      Build failed with 1 error:␊
      packages/build/tests/install/fixtures/optional-esbuild/functions/index.js error: Could not resolve "math-avg"␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/optional-esbuild␊
        publishOrigin: default␊
      functions:␊
        '*':␊
          node_bundler: esbuild␊
      functionsDirectory: packages/build/tests/install/fixtures/optional-esbuild/functions`

## Functions: does not install dependencies unless opting in (with esbuild, many dependencies)

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/optional-many-esbuild␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/optional-many-esbuild␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/optional-many-esbuild/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/optional-many-esbuild␊
        publishOrigin: default␊
      functions:␊
        '*':␊
          node_bundler: esbuild␊
      functionsDirectory: packages/build/tests/install/fixtures/optional-many-esbuild/functions␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      A Netlify Function is using dependencies that have not been installed yet: "math-avg", "sharp"␊
    ␊
      By default, dependencies inside a Netlify Function's "package.json" are not automatically installed.␊
      There are several ways to fix this problem:␊
        - Removing your Function's "package.json" and adding the dependencies to the project's top-level "package.json" instead. This is the fastest and safest solution.␊
        - Running "npm install" or "yarn" inside your Netlify Function in your build command.␊
        - Adding the following plugin to your "netlify.toml":␊
    ␊
      [[plugins]]␊
      package = "@netlify/plugin-functions-install-core"␊
    ␊
      Build failed with 2 errors:␊
      packages/build/tests/install/fixtures/optional-many-esbuild/functions/index.js error: Could not resolve "math-avg"␊
      packages/build/tests/install/fixtures/optional-many-esbuild/functions/index.js error: Could not resolve "sharp"␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/optional-many-esbuild␊
        publishOrigin: default␊
      functions:␊
        '*':␊
          node_bundler: esbuild␊
      functionsDirectory: packages/build/tests/install/fixtures/optional-many-esbuild/functions`

## Functions: does not print warnings when dependency was mispelled

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/mispelled_dep␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/mispelled_dep␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/mispelled_dep/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/mispelled_dep␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/mispelled_dep/functions␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      A Netlify Function failed to require one of its dependencies.␊
      Please make sure it is present in the site's top-level "package.json".␊
    ␊
      In file "packages/build/tests/install/fixtures/mispelled_dep/functions/index.js"␊
      Cannot find module 'math-avg-mispelled'␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/mispelled_dep␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/mispelled_dep/functions`

## Functions: does not print warnings when dependency was local

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/local_dep␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/local_dep␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/local_dep/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/local_dep␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/local_dep/functions␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. Functions bundling                                         ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Packaging Functions from functions directory:␊
     - index.js␊
    ␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      A Netlify Function failed to require a local file.␊
      Please make sure the file exists and its path is correctly spelled.␊
    ␊
      In file "packages/build/tests/install/fixtures/local_dep/functions/index.js"␊
      Cannot find module './missing.js' from 'packages/build/tests/install/fixtures/local_dep/functions'␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/local_dep␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/local_dep/functions`

## Functions: install dependencies handles errors

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/functions_error␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/functions_error␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/functions_error/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/functions_error␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/functions_error/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'␊
    ␊
    > Context␊
      production␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. @netlify/plugin-functions-install-core (onPreBuild event)  ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    Installing functions dependencies␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      Error while installing dependencies in packages/build/tests/install/fixtures/functions_error/functions␊
      npm ERR! code ENOVERSIONS␊
      npm ERR! No versions available for math-avg-does-not-exist␊
    ␊
      Plugin details␊
      Package:        @netlify/plugin-functions-install-core␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/functions_error␊
        publishOrigin: default␊
      functionsDirectory: packages/build/tests/install/fixtures/functions_error/functions␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-functions-install-core'`

## Install local plugin dependencies: with npm

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/npm␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/npm␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/npm/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/npm␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js␊
    ␊
    > Context␊
      production␊
    ␊
    > Installing local plugins dependencies␊
       - ./plugin/main.js␊
    ␊
    > Loading plugins␊
       - ./plugin/main.js@1.0.0 from netlify.toml␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. ./plugin/main.js (onPreBuild event)                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    1.5␊
    ␊
    (./plugin/main.js onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Install local plugin dependencies: propagate errors

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/error␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/error␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/error/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/error␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js␊
    ␊
    > Context␊
      production␊
    ␊
    > Installing local plugins dependencies␊
       - ./plugin/main.js␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Dependencies installation error                               ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      Error while installing dependencies in packages/build/tests/install/fixtures/error/plugin␊
      npm ERR! code ENOVERSIONS␊
      npm ERR! No versions available for this-dependency-does-not-exist␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/error␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js`

## Install local plugin dependencies: already installed

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/already␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/already␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/already/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/already␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js␊
    ␊
    > Context␊
      production␊
    ␊
    > Installing local plugins dependencies␊
       - ./plugin/main.js␊
    ␊
    > Loading plugins␊
       - ./plugin/main.js@1.0.0 from netlify.toml␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. ./plugin/main.js (onPreBuild event)                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    1.5␊
    ␊
    (./plugin/main.js onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Install local plugin dependencies: no package.json

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/no_package␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/no_package␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/no_package/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/no_package␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - ./plugin/main.js@1.0.0 from netlify.toml␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Plugin "./plugin/main.js" internal error                      ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      Could not import plugin:␊
      Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'math-avg' imported from packages/build/tests/install/fixtures/no_package/plugin/main.js␊
    ␊
      Plugin details␊
      Package:        ./plugin/main.js␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "./plugin/main.js" from netlify.toml␊
    STACK TRACE␊
    ␊
      Error properties␊
      { code: 'ERR_MODULE_NOT_FOUND' }␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/no_package␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js`

## Install local plugin dependencies: no root package.json

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /tmp-dir␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      /tmp-dir␊
    ␊
    > Config file␊
      /tmp-dir/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: /tmp-dir␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: '@netlify/plugin-local-install-core'␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.mjs␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - ./plugin/main.mjs from netlify.toml␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      1. ./plugin/main.mjs (onPreBuild event)                       ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    test␊
    ␊
    (./plugin/main.mjs onPreBuild completed in 1ms)␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build Complete                                        ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    (Netlify Build completed in 1ms)`

## Install local plugin dependencies: missing plugin in netlify.toml

> Snapshot 1

    `␊
    ────────────────────────────────────────────────────────────────␊
      Netlify Build                                                 ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: packages/build/tests/install/fixtures/local_missing␊
      testOpts:␊
        pluginsListUrl: test␊
        silentLingeringProcesses: true␊
    ␊
    > Current directory␊
      packages/build/tests/install/fixtures/local_missing␊
    ␊
    > Config file␊
      packages/build/tests/install/fixtures/local_missing/netlify.toml␊
    ␊
    > Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/local_missing␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - ./plugin/main.js@1.0.0 from netlify.toml␊
    ␊
    ────────────────────────────────────────────────────────────────␊
      Plugin "./plugin/main.js" internal error                      ␊
    ────────────────────────────────────────────────────────────────␊
    ␊
      Error message␊
      Could not import plugin:␊
      Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'math-avg' imported from packages/build/tests/install/fixtures/local_missing/plugin/main.js␊
    ␊
      Plugin details␊
      Package:        ./plugin/main.js␊
      Version:        1.0.0␊
      Repository:     test␊
    ␊
      Error location␊
      While loading "./plugin/main.js" from netlify.toml␊
    STACK TRACE␊
    ␊
      Error properties␊
      { code: 'ERR_MODULE_NOT_FOUND' }␊
    ␊
      Resolved config␊
      build:␊
        publish: packages/build/tests/install/fixtures/local_missing␊
        publishOrigin: default␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: ./plugin/main.js`