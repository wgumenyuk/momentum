import React from "react";
import { DictionaryTopicType } from "@momentum/shared";

export interface TopicDetailProps {
  topic: DictionaryTopicType;
}

export const TopicDetail: React.FC<TopicDetailProps> = ({ topic }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">{topic.title}</h2>
      <p className="text-white">{topic.content}</p>
      {topic.references.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white">References</h3>
          <ul className="list-disc pl-5 space-y-2">
            {topic.references.map((ref, index) => (
              <li key={index} className="text-white">
                <a href={ref} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
