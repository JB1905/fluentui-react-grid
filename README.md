# [fluentui-react-grid](https://github.com/JB1905/fluentui-react-grid)

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

[**Playground – play with library in Storybook**](https://jb1905.github.io/fluentui-react-grid/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install fluentui-react-grid
```

Or Yarn:

```sh
$ yarn add fluentui-react-grid
```

You also need to include CSS styles (in HTML head section e.g.: in index.html file):

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

*You need to add `dir="ltr"` – (order from left to right) or `dir="rtl"` – (right to left/reversed order) for correct grid positioning*

### Row

#### Available options

HTML div element props

### Col

#### Available options

HTML div element props and dedicated params based on Fluent UI class names

[Check corresponding Fulent UI class names here](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout)

| Param           | Type                            |
| --------------- | ------------------------------- |
| `sizeSm`        | number or string (between 1-12) |
| `sizeMd`        | number or string (between 1-12) |
| `sizeLg`        | number or string (between 1-12) |
| `sizeXl`        | number or string (between 1-12) |
| `sizeXxl`       | number or string (between 1-12) |
| `sizeXxxl`      | number or string (between 1-12) |
| `smPush`        | number or string (between 1-12) |
| `mdPush`        | number or string (between 1-12) |
| `lgPush`        | number or string (between 1-12) |
| `xlPush`        | number or string (between 1-12) |
| `xxlPush`       | number or string (between 1-12) |
| `xxxlPush`      | number or string (between 1-12) |
| `smPull`        | number or string (between 1-12) |
| `mdPull`        | number or string (between 1-12) |
| `lgPull`        | number or string (between 1-12) |
| `xlPull`        | number or string (between 1-12) |
| `xxlPull`       | number or string (between 1-12) |
| `xxxlPull`      | number or string (between 1-12) |
| `hiddenSm`      | boolean                         |
| `hiddenMd`      | boolean                         |
| `hiddenMdDown`  | boolean                         |
| `hiddenMdUp`    | boolean                         |
| `hiddenLg`      | boolean                         |
| `hiddenLgDown`  | boolean                         |
| `hiddenLgUp`    | boolean                         |
| `hiddenXl`      | boolean                         |
| `hiddenXlDown`  | boolean                         |
| `hiddenXlUp`    | boolean                         |
| `hiddenXxl`     | boolean                         |
| `hiddenXxlDown` | boolean                         |
| `hiddenXxlUp`   | boolean                         |
| `hiddenXxxl`    | boolean                         |

## Example

### Basics

```jsx
<Grid dir="ltr">
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
<Grid dir="ltr">
  <Grid.Row>
    <Grid.Col sizeSm={12} sizeLg={4}>
      Example
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Push and pull

```jsx
<Grid dir="ltr">
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
<Grid dir="ltr">
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
