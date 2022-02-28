import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

//Components
import Like from './like';
import CardIcon from './cardIcon';
import config from '../../config.json';

function ShortcutCard(props) {

  // function handleIcon(icon) {
  //   if (icon) {
  //     const SelectedComponent = Icon[icon];
  //     return SelectedComponent;
  //   } else {
  //     return null;
  //   }
  // }

  const { shortcuts, onDelete, onLike, user } = props;
  const likeComponent = (shortcut) => (
    <Like liked={shortcut.liked} onClick={() => onLike(shortcut)} />
  );

  return shortcuts.map((shortcut) => (
    <div className="col" key={shortcut._id}>
      {/* Card */}
      <div className="cards">
        <div className="card">
          <div className="card-body">
            {/* Front Card*/}
            <div className={'card-front gbg-' + shortcut.color}>
              <div className="box-layout text-white w-100">
                <div className="box p-4">
                  <div className="d-flex flex-fill">
                    <div className="w-100 py-1">
                      <h2>{shortcut.title}</h2>
                    </div>
                    <div className="pl-2">
                      <CardIcon icon={shortcut.icon}></CardIcon>
                    </div>
                  </div>
                </div>
                <div className="box box-stretch px-4">{shortcut.description}</div>
                <div className="box p-4 text-right">
                  <small>{shortcut.publishDate}</small>
                </div>
              </div>
            </div>
            {/* /Front Card*/}

            {/* Back Card*/}
            <div className="card-back gbg-white w-100">
              {/* Vertical Layout Box */}
              <div className="box-layout w-100">
                {/* Back Car Top */}
                <div className="box box-stretch">
                  {/* Profile */}
                  <div className="d-flex flex-fill gbg-white align-self-stretch">
                    {/* Profile Image */}
                    <div className="w-50">
                      {/* TODO - Move to config */}
                      <img
                        className="profile-image"
                        src={config.apiRootURL + shortcut.userId.avatar}
                        alt={shortcut.userId.name}
                      />
                    </div>
                    {/* /Profile Image */}
                    {/* Profile Text */}
                    <div className="pt-3 pr-1 pb-3 pl-3 w-50 align-middle">
                      <div className="m-0">
                        <h5 className="m-0">Creator</h5>
                      </div>
                      <p className="m-0 pb-3 text-muted ">
                        {shortcut.userId.firstName + ' ' + shortcut.userId.lastName}
                      </p>
                      {/* /Profile Text */}
                    </div>
                  </div>
                  {/* /Profile */}
                </div>
                {/* /Back Car Top */}
                {/* Back Car Bottom */}
                <div className="box box-bottom">
                  {/* Back Card Buttons */}
                  <div
                    className={
                      'd-flex flex-fill align-self-end text-center align-self-stretch p-0 m-0 gbg-gray'
                    }
                  >
                    <div className={'d-flex flex-fill w-50 px-2 gbg-' + shortcut.color}>
                      <div className="py-3 px-2 flex-fill">
                        {user &&
                          <Button
                            onClick={() => onDelete(shortcut)}
                            variant="secondary"
                            className="h-100 w-100"
                          >
                            <Icon.Trash className="sm-icon-l1 icon" />
                          </Button>
                        }
                      </div>

                      <div className="py-3 px-2 flex-fill">
                        <Link
                          to={'/edit/' + shortcut._id}
                          className="btn btn-secondary h-100 w-100 text-white"
                        >
                          <Icon.Pen className="sm-icon-l1 icon" />
                        </Link>
                      </div>

                      <div className="py-3 px-2 flex-fill">{likeComponent(shortcut)}</div>
                    </div>
                    <div className="py-3 px-2 w-50">
                      {/* TODO - Move to config */}
                      <a
                        href={config.apiRootURL + shortcut.downloadURL} target="_blank"
                        className="btn btn-secondary h-100 w-50 text-black"
                      >
                        <Icon.ArrowDown className="sm-icon-l1 icon" />
                      </a>
                    </div>
                  </div>
                  {/* /Back Card Buttons */}
                </div>
                {/* /Back Car Bottom */}
              </div>
              {/* /Vertical Layout Box */}
            </div>
            {/* /Back Card*/}
          </div>
        </div>
      </div>
      {/* /Card */}
    </div>
  ));
}

export default ShortcutCard;
