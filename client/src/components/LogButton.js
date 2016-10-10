import React from 'react';
import './LogButton.css';


const LogButton = (props) => {
  return (
    <button className={ `LogButton-button ${ props.inProgress ? 'in-progress' : ''}` }
            onClick={ props.cb }>
      { props.inProgress ? 'End' : 'Log' }
    </button>
  );
};
export default LogButton;
