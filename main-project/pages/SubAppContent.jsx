import React from "react";

const SubAppContent = ({ content }) => {
  return content ? (
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  ) : (
    <div></div>
  );
};

export default SubAppContent;
