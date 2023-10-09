import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topics = props.topics.map((topic) => {
    return <TopicListItem key={topic.id} title={topic.title} slug={topic.slug} setTopicSelected={() => props.setTopicSelected(topic)}/>
  })
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
