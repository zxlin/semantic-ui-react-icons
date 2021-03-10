# Semantic-UI-React-Icons

This package aims to monkey patch in new Font Awesome icons as provided by Fomantic-UI.

## Usage

Install the `semantic-ui-react-icons` package using your favorite package manager, e.g. `yarn` or `npm`

```JSX
import * as SUI from 'semantic-ui-react/dist/es/lib/SUI';
import patchSUIRIcons from 'semantic-ui-react-icons';

patchSUIRIcons(SUI);
```

## Current Versions

Fomantic-UI: 2.8.7

Semantic-UI-React: 2.0.3

686 New icons (and aliases) included.

## Generate new icons list

```
node src/build.js
```
