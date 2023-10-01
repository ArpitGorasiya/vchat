import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="container">
      <div className="paper">
        <form className="root" noValidate autoComplete="off">
          <div className="gridContainer">
            <div className="">
              <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me}>
                <button type="button">
                  Get Chat Id
                </button>
              </CopyToClipboard>
            </div>
            <div className="">
              <input placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall} className="margin">
                  Hang Up
                </button>
              ) : (
                <button type="button" onClick={() => callUser(idToCall)} className="margin">
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
