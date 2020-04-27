import Popover from 'react-bootstrap/Popover';
import React, { Component } from 'react';


function PopoverComponent (myData) {

    return (<Popover id="popover-trigger-click" title="Popover bottom">
        <strong>{myData}</strong> Plan Info...
    </Popover>)
}
export default PopoverComponent;