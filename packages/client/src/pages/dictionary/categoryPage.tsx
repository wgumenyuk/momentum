import React, { useEffect, useState } from "react";
import { DictionaryService} from "$internal/api/dictionary";
import { TopicList } from "$components/Dictionary/topicList";
import { DictionaryTopicType } from "@momentum/shared";

const CategoryPage: React.FC<{ categoryId: string, navigate: (view: string, topicId?: string) => void }> = ({ categoryId, navigate }) => {
  const [ topics, setTopics ] = useState<DictionaryTopicType[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await DictionaryService.getTopicsByCategory(categoryId);
        if(response && response.ok) {
          setTopics(response.data.topics);
        } else if(response) {
          setError(response.err);
        } else {
          setError("Failed to fetch topics");
        }
      } catch(error) {
        setError("Failed to fetch topics");
      }
    };

    fetchTopics();
  }, [ categoryId ]);

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-gray-500">Topics</h1>
      {error && <div className="text-red-500">{error}</div>}
      <TopicList topics={topics} onTopicClick={(topicId) => navigate("topic", topicId)}/>
    </div>
  );
};

export default CategoryPage;
