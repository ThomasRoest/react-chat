import React from "react";
import styled from "styled-components";
import CallsListItem from "./CallsListItem";
import { calls } from "./calls";

const StyledList = styled.div`
  padding: 0;
  margin: 0;
`;

const CallsList = () => {
  return (
    <StyledList>
      {calls.map(item => (
        <CallsListItem {...item} />
      ))}
    </StyledList>
  );
};

export default CallsList;
