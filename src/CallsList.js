//@flow

import React from "react";
import styled from "styled-components";
import CallsListItem from "./CallsListItem";
import { calls } from "./data/calls";

const StyledList = styled.div`
  padding: 0;
  margin: 0;
`;

const CallsList = () => {
  return (
    <StyledList>
      {calls.map(item => (
        <CallsListItem key={item.id} {...item} />
      ))}
    </StyledList>
  );
};

export default CallsList;
