import React from "react";
import { DictionaryTopicType } from "@momentum/shared";

export interface TopicListProps {
  topics: DictionaryTopicType[];
  onTopicClick: (topicId: string) => void;
}

export const TopicList: React.FC<TopicListProps> = ({ topics, onTopicClick }) => {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="block p-4 bg-blue-800 rounded-lg shadow-md text-white cursor-pointer mb-4"
          onClick={() => onTopicClick(topic.id)}
        >
          {topic.title}
        </div>
      ))}
    </div>
  );
};
