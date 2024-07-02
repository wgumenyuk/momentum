import React, { useEffect, useState } from "react";
import { DictionaryService } from "$internal/api/dictionary";
import { TopicDetail } from "$components/Dictionary/topicDetail";
import { DictionaryTopicType } from "@momentum/shared";

const TopicPage: React.FC<{ topicId: string }> = ({ topicId }) => {
  const [ topic, setTopic ] = useState<DictionaryTopicType | null>(null);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await DictionaryService.getTopicDetail(topicId);
        if(response && response.ok) {
          setTopic(response.data.topic);
        } else if(response) {
          setError(response.err);
        } else {
          setError("Failed to fetch topic");
        }
      } catch(error) {
        setError("Failed to fetch topic");
      }
    };

    fetchTopic();
  }, [ topicId ]);

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-gray-500">Topic Detail</h1>
      {error && <div className="text-red-500">{error}</div>}
      {topic && <TopicDetail topic={topic}/>}
    </div>
  );
};

export default TopicPage;
