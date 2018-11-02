//@flow
import React from "react";
import { HighlightMatches } from "./Highlight";

type Props = {
  content: string,
  searchTerm: string
};

const SearchResult = ({ content, searchTerm }: Props) => {
  return (
    <div>
      <HighlightMatches text={content} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchResult;
