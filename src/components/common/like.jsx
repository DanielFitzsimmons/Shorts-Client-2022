import React from 'react';
import * as Icon from 'react-bootstrap-icons';

//Bootstrap
import Button from 'react-bootstrap/Button';

function Like(props) {
  if (props.liked) {
    return (
      <Button variant="secondary" onClick={props.onClick} className="h-100 w-100">
        <Icon.HeartFill className="sm-icon-l1 icon" />
      </Button>
    );
  } else {
    return (
      <Button variant="secondary" onClick={props.onClick} className="h-100 w-100">
        <Icon.Heart className="sm-icon-l1 icon" />
      </Button>
    );
  }
}

export default Like;
