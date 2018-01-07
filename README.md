# react-bs4grid

A Bootstrap 4 implementation for React.

[https://getbootstrap.com/docs/4.0/layout/grid/](https://getbootstrap.com/docs/4.0/layout/grid/)

## Examples


### Simple 12 column across

```js
 <Container>
    <Row>
        <Col>
            One Column
        </Col>
    </Row>
</Container>
```

### Columns without props are spanned equally.
```js
    <Container>
        <Row>
            <Col>One</Col>
            <Col>Two</Col>
        </Row>
    </Container>
```
*Note:* By default, on mobile resolutions, columns become stacked. You can override this behaviour by adding the `responsive={false}` prop to `<Row>`. ie  `<Row responsive={false}>`.

### Non equal columns

```js
<Container>
    <Row>
        <Col w={6} md={4}>
            .col-6 .col-md-4
        </Col>
        <Col w={6} md={8}>
            .col-6 .col-md-8
        </Col>
    </Row>
</Container>
```

Bootstrap 4 grid is '*mobile-first*'. So, responsive classes like `*xs` are replaced with the `col-{width}` class. In my experience, you're mostly stacking your columns on mobile anyway, so apply the `w` prop only when you want adjacent columns in your mobile view. (note: The `w` prop is an alias for `width`, they're interchangable.) `w="auto"` will work as well.

==Responsive widths are `sm`, `md`, `lg`, `xl`==. See the BS4 docs for more info.

### Fluid layout

Use the `fluid` prop on your `<Container>`.

```js
<Container>
    <Row>
        <Col md={4}>Larry!</Col>
        <Col md={4}>Curly!</Col>
        <Col md={4}>Moe!</Col>
    </Row>
</Container>
```


### Removing the guttering

Use the `noGutters` prop on `<Row>` to remove the padding from each Col.

```js
<Container debug>
    <Row noGutters>
        <Col md={4}>Larry</Col>
        <Col md={4}>Curly</Col>
        <Col md={4}>Moe</Col>
    </Row>
</Container>
```

### Horizonally aligning cols

Use the `justifyContent` prop in `<Row>`. Supported values are `start|end|center|between|around`.

```js
<Container>
    <Row justifyContent="center">
        <Col sm={5}>
            5 columns wide and centered.
        </Col>
    </Row>
</Container>
```


### Vertically aligning Rows and Col Content.

Use the `alignItems` prop in `<Row>`. Row needs to be styled with a height before it will take effect.

```js
<Container>
    <Row alignItems="center" justifyContent="center" style={{height: "100vh"}}>
        <Col sm="5">Hello World</Col>
    </Row>
</Container>
 ```

Same concept will work for `<Col>`. (as well as `alignSelf`)

```js
<Container>
    <Row>
        <Col style={{height: 200}}>
        	Hello
        </Col>
        <Col alignItems="center">
            center of Col
        </Col>
        <Col alignItems="end">
            bottom of Col
        </Col>
    </Row>
</Container>
```

### Debugging

Adding the `debug` prop within container will add borders to Cols.


## Props

### `<Container>`

| prop | type | description
|------|------|------------|
| fluid |bool|  turns off the container width restriction. 100% of the width of the container. Default `false` |
| noGutters |bool | Turns off all guttering for all Rows. Default `false` |
| debug |bool | Will draw borders around your Cols, to help you figure out what's going on. |
| styles	|obj | applies react css styles |
| className |string | appends custom classes |

### `<Row>`

| prop | type |  description
|------|------|------------|
| noGutters |bool|  Turns off guttering (default false) |
| justifyContent | string | Determines how child `<Col>`s are positioned horizontally. Options are `start`, `center`, `end`, `around`, `between` |
| alignItems |string| Determines how child `<Col>`s are positioned vertically. Options are `start`, `center`, `end`  |
| responsive |bool | Disable default responsive behaviour |
| styles	|obj | applies react css styles |
| className |string| appends custom classes |

### `<Col>`

| prop | type | description
|------|------|------------|
| noGutter |bool|  Turns off guttering for that Col. Default `false`. |
| alignItems |string|  Determines how content is vertically aligned. Options are `start`, `center`, `end`  |
| push       |string| Align col. Effective when width="auto" |
| w (or width)| any  | Generic width. Options are 1-12 or `auto` |
| sm / md / lg / xl | any | Width based on breakpoint. Options are 1-12 or `auto` |
| styles	|obj | applies react css styles |
| className |string | appends custom classes |

## Shortcuts
Since gridding your app can get slightly verbose, there are some shortcuts to slightly unverbose your verbose problem.

Example, ommitting Col/Rol inside a Container will automatically insert them:

```js
<Container>
    HELLO WORLD
</Container>
```

Some props can be inherited too. Like example, you can do this:

```js
<Container sm={8} md={6} lg={4} xl={3} justifyContent="center">
    HELLO WORLD
</Container>
```

This is shorthand for this:

```js
<Container>
    <Row justifyContent="center">
        <Col sm={8} md={6} lg={4} xl={3}>
            HELLO WORLD
        </Col>
    </Row>
</Container>
```


## Some use-cases

### Navigation Bar (non-responsive)

The logo container is only as wide as the logo. Nav section stretches as much as it needs to. Sign up section pushed to the far right.

```js
<Container fluid style={{background:"#eee"}}>
    <Row>
        <Col>
            <Row alignItems="center" responsive={false}>
                <Col w="auto">
                    <h1>Logo</h1>
                </Col>
                <Col w="auto">
                    Page 1 : Page 2 : Page 3 : Page 4
                </Col>
                <Col w="auto" push="left">
                    Sign Up
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
```

### Content horizontally and vertically centred

```js
<Container>
    <Row alignItems="center" justifyContent="center" style={{height: "100vh"}} >
        <Col w={5}>
            <div>
                In the middle
            </div>
        </Col>
    </Row>
</Container>
```












