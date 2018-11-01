//@flow
import React from "react";
import { HighlightMatches } from "./Highlight";

const SearchResult = ({ content, searchTerm }) => {
  return (
    <div>
      <HighlightMatches text={content} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchResult;
