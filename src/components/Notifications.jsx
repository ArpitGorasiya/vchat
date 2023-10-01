import React, { useContext } from 'react';
// import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h5>{call.name} is calling:</h5>
          <button type="submit" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
