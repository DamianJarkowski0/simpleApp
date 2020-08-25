import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

import React from 'react'

const Display = (props) => {
    return(
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title={props.title} id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1" onClick={() => props.display("list")}>List</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => props.display("grid")}>Grid</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    )
}

export default Display