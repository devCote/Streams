import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props: any) => {
  const portal = document.querySelector('#modal');

  return portal
    ? ReactDOM.createPortal(
        <div
          onClick={() => history.push('/')}
          className='ui dimmer modals visible active'
        >
          <div
            onClick={e => e.stopPropagation()}
            className='ui standart modal visible active'
          >
            <div className='header'>Delete Stream</div>
            <div className='content'>
              Are you sure that you want to delete the stream?
            </div>
            <div className='actions'>
              <button className='ui button red'>Delete</button>
              <button className='ui button'>Cancel</button>
            </div>
          </div>
        </div>,
        portal
      )
    : null;
};

export default Modal;