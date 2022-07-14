Experimentation with standalone components, angular libraries, and theming components.

Building the library with `ng build --watch`

Then just naively importing the library into the test-app with `cp -r ../component-lib/dist/components ./node-modules/ && ng serve` 

`npm link` could likely be used for local dev or ideally the library directory is pushed to a registry
