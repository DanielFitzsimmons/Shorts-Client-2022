import React from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function About(props) {

  const { twitterName } = props;

  return (
    <Container fluid className="p-3">
      <Row>
        {/* Content */}
        <Col sm={8} md={7} className="py-4">
          <h4>About</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna lectus, pharetra
            quis leo at, mattis dapibus arcu. Nulla iaculis nibh at nisl hendrerit, in sodales
            ipsum aliquet. Nulla tristique gravida neque in pellentesque. Vestibulum non hendrerit
            nunc. Sed non mollis felis. Donec posuere dapibus orci vel posuere. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Vivamus vitae neque nisi. Aliquam eros purus, vulputate quis erat quis, finibus
            laoreet lectus. Pellentesque ornare pharetra nunc in pretium
          </p>
        </Col>
        {/* /Content */}
        {/* Sidebar */}
        <Col sm={4} className="py-4">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            <li>
              <a
                href="http://www.twitter.com"
                className="gbg-purple badge text-white p-1 font-weight-normal"
              >
                Follow on Twitter @{twitterName}
              </a>
            </li>
            <li>
              <a
                href="http://www.gmail.com"
                className="gbg-purple badge text-white p-1 font-weight-normal"
              >
                Email me
              </a>
            </li>
          </ul>
        </Col>
        {/* /Sidebar */}
      </Row>
    </Container>
  );
}

export default About;
