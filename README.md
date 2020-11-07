# [fluentui-react-grid](https://github.com/JB1905/fluentui-react-grid) (WIP)

[![NPM version](https://img.shields.io/npm/v/fluentui-react-grid?style=flat-square)](https://www.npmjs.com/package/fluentui-react-grid)
[![NPM downloads](https://img.shields.io/npm/dm/fluentui-react-grid?style=flat-square)](https://www.npmjs.com/package/fluentui-react-grid)
[![NPM license](https://img.shields.io/npm/l/fluentui-react-grid?style=flat-square)](https://www.npmjs.com/package/fluentui-react-grid)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/fluentui-react-grid?style=flat-square)](https://codecov.io/gh/JB1905/fluentui-react-grid)
[![Travis](https://img.shields.io/travis/JB1905/fluentui-react-grid/master?style=flat-square)](https://travis-ci.org/JB1905/fluentui-react-grid)
[![Bundle size](https://img.shields.io/bundlephobia/min/fluentui-react-grid?style=flat-square)](https://bundlephobia.com/result?p=fluentui-react-grid)

## About

React components for Fluent UI layout styles

### Alternatives

- [Fluent UI styles](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout)

## Contents

- [Demo](#demo)
- [How to Install](#how-to-install)
- [Components](#components)
  - [Grid](#grid)
  - [Row](#row)
  - [Col](#col)
- [Example](#example)

## Demo

[**Playground – play with library in Storybook**](https://jb1905.github.com/fluentui-react-grid/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install fluentui-react-grid
```

Or Yarn:

```sh
$ yarn add fluentui-react-grid
```

You also need to add CSS styles:

```html
<link
  rel="stylesheet"
  href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"
/>
```

## Components

### Grid

#### Available options

HTML div element props

### Row

#### Available options

HTML div element props

### Col

#### Available options

HTML div element props and dedicated params based on Fluent UI class names

| Param           | Type    | Description |
| --------------- | ------- | ----------- |
| `sizeSm`        | number  |             |
| `sizeMd`        | number  |             |
| `sizeLg`        | number  |             |
| `sizeXl`        | number  |             |
| `sizeXxl`       | number  |             |
| `sizeXxxl`      | number  |             |
| `smPush`        | number  |             |
| `mdPush`        | number  |             |
| `lgPush`        | number  |             |
| `xlPush`        | number  |             |
| `xxlPush`       | number  |             |
| `xxxlPush`      | number  |             |
| `smPull`        | number  |             |
| `mdPull`        | number  |             |
| `lgPull`        | number  |             |
| `xlPull`        | number  |             |
| `xxlPull`       | number  |             |
| `xxxlPull`      | number  |             |
| `hiddenSm`      | boolean |             |
| `hiddenMd`      | boolean |             |
| `hiddenMdDown`  | boolean |             |
| `hiddenMdUp`    | boolean |             |
| `hiddenLg`      | boolean |             |
| `hiddenLgDown`  | boolean |             |
| `hiddenLgUp`    | boolean |             |
| `hiddenXl`      | boolean |             |
| `hiddenXlDown`  | boolean |             |
| `hiddenXlUp`    | boolean |             |
| `hiddenXxl`     | boolean |             |
| `hiddenXxlDown` | boolean |             |
| `hiddenXxlUp`   | boolean |             |
| `hiddenXxxl`    | boolean |             |

## Example

### Basics

```jsx
<Grid>
  <Grid.Row>
    <Grid.Col sizeSm={6} sizeMd={4} sizeLg={2}>
      A
    </Grid.Col>

    <Grid.Col sizeSm={6} sizeMd={6} sizeLg={10}>
      B
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Inheritance

```jsx
<Grid>
  <Grid.Row>
    <Grid.Col sizeSm={12} sizeLg={4}>
      Example
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Push and Pull

```jsx
<Grid>
  <Grid.Row>
    <Grid.Col sizeSm={4} smPush={8}>
      First in code
    </Grid.Col>

    <Grid.Col sizeSm={8} smPull={4}>
      Second in code
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Visibility

```jsx
<Grid>
  <Grid.Row>
    <Grid.Col sizeSm={12} hiddenXxlUp>
      Visible on smaller screens
    </Grid.Col>

    <Grid.Col sizeSm={12} hiddenXlDown>
      Visible on larger screens
    </Grid.Col>
  </Grid.Row>
</Grid>
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
