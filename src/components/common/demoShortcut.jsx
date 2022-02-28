import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import config from '../../config.json';

//Bootstrap
import Button from 'react-bootstrap/Button';

function DemoShortcut(props) {
  const {
    watch: { title },
    watch: { description },
    watch: { color },
    watch: { icon },
    data: { userId },
    data: { publishDate }
  } = props;

  const SelectedComponent = Icon[icon];

  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
          {/* Front Card*/}
          <div className={`card-front ${color ? `gbg-${color}` : 'gbg-purple '}`}>
            <div className="box-layout text-white w-100">
              <div className="box p-4">
                <div className="d-flex flex-fill">
                  <div className="w-80 py-1 overflow-hidden">
                    <h2>{title}</h2>
                  </div>
                  <div className="w-20 pl-2">
                    {SelectedComponent ? (
                      <SelectedComponent className="md-icon text-right" />
                    ) : (
                      <Icon.CardHeading className="md-icon text-right" />
                    )}
                  </div>
                </div>
              </div>
              <div className="box box-stretch px-4">{description}</div>
              <div className="box p-4 text-end">
                <small>{publishDate}</small>
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
                      src={config.apiRootURL + userId.avatar}
                      alt={userId.firstName}
                    />
                  </div>
                  {/* /Profile Image */}
                  {/* Profile Text */}
                  <div className="pt-3 pr-1 pb-3 pl-3 w-50 align-middle">
                    <div className="m-0">
                      <h5 className="m-0">Creator</h5>
                    </div>
                    <p className="m-0 text-muted ">{userId.firstName}</p>
                    <p className="m-0 pb-3 text-muted ">{userId.lastName}</p>
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
                  <div className={'d-flex flex-fill w-50 px-2 gbg-purple'}>
                    <div className="py-3 px-2 flex-fill">
                      <Button variant="secondary" className="h-100 w-100">
                        <Icon.Trash className="sm-icon-l1 icon" />
                      </Button>
                    </div>
                    <div className="py-3 px-2 flex-fill">
                      <Button variant="secondary" className="h-100 w-100">
                        <Icon.Pen className="sm-icon-l1 icon" />
                      </Button>
                    </div>
                    <div className="py-3 px-2 flex-fill">
                      <Button variant="secondary" className="h-100 w-100">
                        <Icon.Heart className="sm-icon-l1 icon" />
                      </Button>
                    </div>
                  </div>
                  <div className="py-3 px-2 w-50">
                    <Button variant="secondary" className="h-100 w-50 text-black">
                      <Icon.ArrowDown className="sm-icon-l1 icon" />
                    </Button>
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
  );
}

export default DemoShortcut;
