import React from 'react';
// import { Container, Row, Col } from '../lib';
import {Container, Row, Col} from '../src';

import './css.scss';

export const Normal = () => (
  <Container debug>
    <Row>
      <Col>
        One Column
      </Col>
    </Row>
  </Container>
);

export const TwoCols = () => (
  <Container debug>
    <Row>
      <Col w={6} md={4}>
        .col-6 .col-md-4
      </Col>
      <Col w={6} md={8}>
        .col-6 .col-md-8
      </Col>
    </Row>

    <Row responsive>
      <Col>
        (RESPONSIVE) .col-sm-6
      </Col>
      <Col>
        (RESPONSIVE) .col-sm-6
      </Col>
    </Row>
  </Container>
);

export const JustifyContent = () => (
  <Container debug>
    <Row justifyContent="center">
      <Col sm={5}>
        justifyContent="center"
      </Col>
    </Row>
    <Row justifyContent="end">
      <Col sm={5}>
        <div>justifyContent="end"</div>
      </Col>

    </Row>
    <Row justifyContent="start">
      <Col sm={5}>
        justifyContent="start"
      </Col>
    </Row>

    <Row justifyContent="around">
      <Col sm={4}>
        justifyContent="around"
      </Col>
      <Col sm={4}>
        justifyContent="around"
      </Col>
    </Row>

    <Row justifyContent="between">
      <Col sm={3}>
        justifyContent="between"
      </Col>
      <Col sm={3}>
        justifyContent="between"
      </Col>
    </Row>

  </Container>
);

export const NoGutter = () => (
  <div>
    <Container debug fluid noGutters>
      <Row><h2>With No-Guttering</h2></Row>
      <Row noGutters>
        <Col md={4}>Larry!</Col>
        <Col md={4}>Curly</Col>
        <Col md={4}>Moe!</Col>
      </Row>
    </Container>
    <Container debug>
      <Row><h2>Without</h2></Row>
      <Row noGutters alignItems="center" style={{background: '#eee'}}>
        <Col md="auto"><h3>Logo</h3></Col>
        <Col md="auto">Curly</Col>
        <Col md="auto" push="left">
          <div className="box2">push="center" md="auto"</div>
        </Col>
      </Row>
      <Row><h2>Col Only</h2></Row>
      <Row>
        <Col md={4}>Larry!</Col>
        <Col md={4} noGutter>noGutter</Col>
        <Col md={4}>Moe!</Col>
      </Row>
    </Container>
  </div>
);

export const Fluid = () => (
  <div>
    <h2>Container.fluid prop</h2>
    <Container debug fluid>
      <Row>
        <Col md={4}>Larry!</Col>
        <Col md={4}>Curly!</Col>
        <Col md={4}>Moe!</Col>
      </Row>
    </Container>


    <h2>Container.fluid, noGutters prop</h2>
    <Container debug fluid noGutters>
      <Row>
        <Col md={4}>Larry</Col>
        <Col md={4}>Curly</Col>
        <Col md={4}>Moe</Col>
      </Row>
    </Container>

    <h2>Stuff</h2>

    <Container sm={8} md={6} lg={4} xl={3} justifyContent="center" debug>
      HELLO WORLD
    </Container>

    <Container debug>
      <Row justifyContent="center">
        <Col sm={8} md={6} lg={4} xl={3}>
          HELLO WORLD
        </Col>
      </Row>
    </Container>

  </div>
);

export const AutoWidths = () => (
  <div>
    <Container debug>

      <Row style={{textAlign: 'center'}}>
        <p><strong>Stacked for mobile</strong>
          <em> &lt;Row responsive=true&gt; (this is default)</em>
        </p>
      </Row>


      <Row justifyContent="center">
        <Col sm="auto">1</Col>
        <Col sm="auto">2</Col>
        <Col sm="auto">Three</Col>
        <Col sm="auto">This is a four</Col>
        <Col sm="auto">.</Col>
        <Col sm="auto">Six</Col>
      </Row>

      <Row style={{textAlign: 'center'}}>
        <p><strong>Not Responsive</strong>
          <em> &lt;Row responsive=false&gt;</em>
        </p>
      </Row>

      <Row justifyContent="center" responsive={false}>
        <Col sm="auto">1</Col>
        <Col sm="auto">2</Col>
        <Col sm="auto">Three</Col>
        <Col sm="auto">This is a four</Col>
        <Col sm="auto">.</Col>
        <Col sm="auto">Six</Col>
      </Row>
    </Container>
  </div>
);


export const VertAlign = () => (
  <Container>
    <Row noGutters alignItems="center" justifyContent="center" style={{height: '100vh'}}>
      <Col sm="5">
        <div className="box">
          Hello World!
        </div>
      </Col>
    </Row>
  </Container>
);

export const VertAlignCols = () => (
  <Container fluid noGutters debug>
    <Row>
      <Col style={{height: 200}}>Hello</Col>
      <Col alignItems="center">
        center
      </Col>
      <Col alignItems="end">
        center
      </Col>
    </Row>
  </Container>
);

export const UseCasesNavBar = () => (
  <div>
    <Container><h3>Navbar</h3></Container>
    <Container fluid debug style={{background: '#eee'}}>
      <Row>
        <Col>
          <Row alignItems="center" responsive={false}>
            <Col w="auto">
              <h2>Logo</h2>
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
  </div>
);

export const UseCasesMiddleBox = () => (
  <div>
    <Container debug>
      <Row alignItems="center" justifyContent="center" style={{height: '100vh'}}>
        <Col w={5}>
          <div style={{border: '1px solid black', padding: 20}}>
            Middle Content
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export const Emptys = () => (
  <div>
    <Container debug/>
  </div>
);

export const Loops = () => {
  const stuff = [7, 6, 5, 4, 3, 2, 1];
  return (
    <Container debug>
      <Row>
        {stuff.map((num, key) => (
          <Col md={4} sm={6} key={key}>
            <div>Num: {num}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export const Offsets = () => {
  return (
    <Container debug>
      <Row>
        <Col offsetMd={5} offsetSm={0}>OffsetBy5</Col>
      </Row>
    </Container>
  );
};