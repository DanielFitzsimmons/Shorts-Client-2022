import React from 'react';

//Components
import ShortcutCard from '../common/shortcutCard';

//Bootstrap
import Row from 'react-bootstrap/Row';

function ShortcutsGrid(props) {
  const { shortcuts, onDelete, onLike, user } = props;

  return (
    <Row className="row gx-0 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">

      <ShortcutCard shortcuts={shortcuts} onDelete={onDelete} onLike={onLike} user={user}></ShortcutCard>

    </Row>
  );
}
export default ShortcutsGrid;
