import React from "react";
import styled from "styled-components";
import StatusListItem from "./StatusListItem";

const StyledList = styled.div`
  padding: 0;
  margin: 0;
`;

const StatusList = () => {
  return (
    <StyledList>
      <StatusListItem />
    </StyledList>
  );
};

export default StatusList;
