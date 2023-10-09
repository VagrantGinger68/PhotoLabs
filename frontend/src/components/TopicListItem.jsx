import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { setTopicSelected, title } = props;

  return (
    <div className="topic-list__item">
      <span className="topic-list__item span" onClick={setTopicSelected}>{title}</span>
    </div>
  );
};

export default TopicListItem;
