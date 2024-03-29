# [fluentui-react-grid](https://github.com/JB1905/fluentui-react-grid)

[![NPM version](https://img.shields.io/npm/v/fluentui-react-grid?style=flat-square)](https://www.npmjs.com/package/fluentui-react-grid)
[![NPM downloads](https://img.shields.io/npm/dm/fluentui-react-grid?style=flat-square)](https://www.npmjs.com/package/fluentui-react-grid)
[![NPM license](https://img.shields.io/npm/l/fluentui-react-grid?style=flat-square)](https://www.npmjs.com/package/fluentui-react-grid)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/fluentui-react-grid?style=flat-square)](https://codecov.io/gh/JB1905/fluentui-react-grid)
[![Travis](https://img.shields.io/travis/com/JB1905/fluentui-react-grid/main?style=flat-square)](https://app.travis-ci.com/github/JB1905/fluentui-react-grid)
[![Bundle size](https://img.shields.io/bundlephobia/min/fluentui-react-grid?style=flat-square)](https://bundlephobia.com/result?p=fluentui-react-grid)

## About

React components for Fluent UI layout styles

### Demo

[**Playground – play with the library in Storybook**](https://jb1905.github.io/fluentui-react-grid/)

### Alternatives

- [Fluent UI styles](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout)

## Contents

- [How to Install](#how-to-install)
- [Components](#components)
  - [Grid](#grid)
  - [Row](#row)
  - [Col](#col)
- [Example](#example)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install fluentui-react-grid
```

Or Yarn:

```sh
$ yarn add fluentui-react-grid
```

You also need to include CSS styles (in the HTML header section, e.g. in index.html):

```html
<link
  rel="stylesheet"
  href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"
/>
```

## Getting Started

**Import the default component and use it as Compound Component:**

```jsx
import Grid from 'fluentui-react-grid';

// ...

const App = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>Col content here...</Grid.Col>
        {/* ... */}
      </Grid.Row>
      {/* ... */}
    </Grid>
  );
};

// ...
```

**Or import all components:**

```jsx
import { Grid, Row, Col } from 'fluentui-react-grid';

// ...

const App = () => {
  return (
    <Grid>
      <Row>
        <Col>Col content here...</Col>
        {/* ... */}
      </Row>
      {/* ... */}
    </Grid>
  );
};

// ...
```

## Components

### Grid

#### Available options

[HTML div element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

_By default grid order is `dir="ltr"` – (order from left to right). You can change it to `dir="rtl"` – (right to left/reversed order) or set `dir="auto"` to remove (it will break the layout)_

### Row

#### Available options

[HTML div element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

### Col

#### Available options

[HTML div element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) and dedicated params based on Fluent UI class names

[Check corresponding Fluent UI class names here](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout)

| Name              | Type                            |
| ----------------- | ------------------------------- |
| **sizeSm**        | number or string (between 1-12) |
| **sizeMd**        | number or string (between 1-12) |
| **sizeLg**        | number or string (between 1-12) |
| **sizeXl**        | number or string (between 1-12) |
| **sizeXxl**       | number or string (between 1-12) |
| **sizeXxxl**      | number or string (between 1-12) |
| **smPush**        | number or string (between 1-12) |
| **mdPush**        | number or string (between 1-12) |
| **lgPush**        | number or string (between 1-12) |
| **xlPush**        | number or string (between 1-12) |
| **xxlPush**       | number or string (between 1-12) |
| **xxxlPush**      | number or string (between 1-12) |
| **smPull**        | number or string (between 1-12) |
| **mdPull**        | number or string (between 1-12) |
| **lgPull**        | number or string (between 1-12) |
| **xlPull**        | number or string (between 1-12) |
| **xxlPull**       | number or string (between 1-12) |
| **xxxlPull**      | number or string (between 1-12) |
| **hiddenSm**      | boolean                         |
| **hiddenMd**      | boolean                         |
| **hiddenMdDown**  | boolean                         |
| **hiddenMdUp**    | boolean                         |
| **hiddenLg**      | boolean                         |
| **hiddenLgDown**  | boolean                         |
| **hiddenLgUp**    | boolean                         |
| **hiddenXl**      | boolean                         |
| **hiddenXlDown**  | boolean                         |
| **hiddenXlUp**    | boolean                         |
| **hiddenXxl**     | boolean                         |
| **hiddenXxlDown** | boolean                         |
| **hiddenXxlUp**   | boolean                         |
| **hiddenXxxl**    | boolean                         |

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

### Push and pull

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

### Without Compound Components

```jsx
<Grid>
  <Row>
    <Col sizeSm="6" sizeMd={4} sizeLg={2}>
      <DemoBlock>A</DemoBlock>
    </Col>

    <Col sizeSm={6} sizeMd="8" sizeLg={10}>
      <DemoBlock>B</DemoBlock>
    </Col>
  </Row>
</Grid>
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
