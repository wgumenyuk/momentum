import React, { useEffect, useState } from "react";
import { DictionaryService } from "$internal/api/dictionary";
import { CategoryList } from "$components/Dictionary/categoryList";
import { DictionaryCategoryType } from "@momentum/shared";

const DictionaryPage: React.FC<{ navigate: (view: string, categoryId?: string) => void }> = ({ navigate }) => {
  const [ categories, setCategories ] = useState<DictionaryCategoryType[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await DictionaryService.getCategories();
        if(response && response.ok) {
          setCategories(response.data.categories);
        } else if(response) {
          setError(response.err);
        } else {
          setError("Failed to fetch categories");
        }
      } catch(error) {
        setError("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-gray-500">Dictionary</h1>
      {error && <div className="text-red-500">{error}</div>}
      <CategoryList categories={categories} onCategoryClick={(categoryId) => navigate("category", categoryId)}/>
    </div>
  );
};

export default DictionaryPage;
