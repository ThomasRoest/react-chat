//@flow

import React from "react";
import styled from "styled-components";

const SearchResult = styled.p`
  padding: 0 5px 0 5px;
`;

const Match = ({ children }) => (
  <span style={{ color: "#32AFFF", fontWeight: "bold" }}>{children}</span>
);

type Props = {
  text: string,
  searchTerm: string
};

const Highlight = ({ text, searchTerm }: Props) => {
  let keyCount = 0;
  let splits = text.split(new RegExp(searchTerm, "ig"));
  let matches = text.match(new RegExp(searchTerm, "ig"));
  let result = [];

  for (let i = 0; i < splits.length; ++i) {
    result.push(splits[i]);
    if (i < splits.length - 1) {
      result.push(<Match key={++keyCount}>{matches[i]}</Match>);
    }
  }
  return <SearchResult>{result}</SearchResult>;
};

export default Highlight;
