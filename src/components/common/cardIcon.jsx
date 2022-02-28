import React from 'react';

//Bootstrap
import * as Icon from 'react-bootstrap-icons';

function CardIcon(props) {
  const SelectedComponent = Icon[props.icon];
  if (props.icon) {
    return <SelectedComponent className="md-icon text-right" />;
  } else {
    return <Icon.CardHeading className="md-icon text-right" />;
  }
}
export default CardIcon;
