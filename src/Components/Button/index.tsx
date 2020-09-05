import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const StyledButton: any = styled(Button)`
    background-color: orange;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    color:#fff;
  &:hover {
    background-color: purple;
}
`;


export default function StyledComponents(props: any) {


  return (
    <div>
      <StyledButton>{props.buttonText}</StyledButton>
    </div>
  );
}