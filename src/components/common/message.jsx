import React from 'react';
import * as Icon from 'react-bootstrap-icons';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Message = (props) => {
  const { msg, description, icon } = props;
  const SelectedComponent = Icon[icon];
  //Renders a message to the user. eg. Error .ect
  return (
    <Container>
      <Row className="p-5 m-t5">
        {/* Error Icon */}
        <Col xs={6} className="d-flex justify-content-center">
          <div
            className="gbg-lightpink text-white rounded-circle d-flex align-items-center justify-content-center"
            style={{ height: 6 + 'rem', width: 6 + 'rem' }}
          >
            {SelectedComponent ? (
              <SelectedComponent className="md-icon text-right" />
            ) : (
              <Icon.CardHeading className="md-icon text-right" />
            )}
          </div>
        </Col>
        {/* /Error Icon */}
        {/* Error Message */}
        <Col xs={6}>
          <h4 className="mt-3">{msg}</h4>
          <p className="text-muted">{description}</p>
        </Col>
        {/* /Error Message */}
      </Row>
    </Container>
  );
};
export default Message;
