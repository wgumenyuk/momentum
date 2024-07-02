import React from "react";
import { DictionaryTopicType } from "@momentum/shared";
import { Link } from "react-router-dom";

export interface TopicListProps {
  topics: DictionaryTopicType[];
  onTopicClick: (topicId: string) => void;
}

export const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <Link key={topic.id} to={`/dictionary/topic/${topic.id}`}>
          <div className="block p-4 bg-blue-800 rounded-lg shadow-md text-white">
            {topic.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
