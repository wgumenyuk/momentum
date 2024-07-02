import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CategoryList, CategoryListProps } from "./categoryList";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Dictionary/CategoryList",
  component: CategoryList
} as Meta;

const Template: StoryFn<CategoryListProps> = (args) => (
  <BrowserRouter>
    <CategoryList {...args}/>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  categories: [
    { id: "1", name: "Nutrition" },
    { id: "2", name: "Exercise Techniques" },
    { id: "3", name: "Fitness Concepts" }
  ],
  onCategoryClick: (categoryId: string) => alert(`Category clicked: ${categoryId}`)
};
