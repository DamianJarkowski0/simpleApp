import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

import React from 'react'

const Sort = (props) => {
    const onClick = (order) => {
      props.setOrder(order)
      props.setOrderBy(props.orderBy)
      props.refresh(props.page,props.orderBy, order)
    }
    return(
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title={props.title} id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1" onClick={() => onClick("ASC")}>Rosnąco</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => onClick("DESC")}>Malejąco</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    )
}

export default Sort