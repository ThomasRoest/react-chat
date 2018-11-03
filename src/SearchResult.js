//@flow
import React from "react";
import Highlight from "./Highlight";

type Props = {
  content: string,
  searchTerm: string
};

const SearchResult = ({ content, searchTerm }: Props) => {
  return (
    <div>
      <Highlight text={content} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchResult;
