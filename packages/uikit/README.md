# Metaviralswap UIkit

[![Version](https://img.shields.io/npm/v/@metaviralswap/uikit)](https://www.npmjs.com/package/@metaviralswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@metaviralswap/uikit)](https://www.npmjs.com/package/@metaviralswap/uikit)

Metaviralswap UIkit is a set of React components and hooks used to build pages on Metaviralswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @metaviralswap/uikit`

***Note**: In case you want to use the older version of the Metaviralswap UIkit, you should install @metaviralswap-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Theme

Before using MetaViral UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@metaviralswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@metaviralswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://metaviralswap.github.io/pancake-uikit/)
