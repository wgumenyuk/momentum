import React from "react";
import { DictionaryCategoryType } from "@momentum/shared";

export interface CategoryListProps {
  categories: DictionaryCategoryType[];
  onCategoryClick: (categoryId: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryClick }) => {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="block p-4 bg-blue-800 rounded-lg shadow-md text-white cursor-pointer"
          onClick={() => onCategoryClick(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};
