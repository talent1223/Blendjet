/** @jsx h */
import { h } from 'preact';
import {
  HomeRecipes,
  HomeRecipesProps,
} from '../components/HomeRecipes/HomeRecipes';
import { homeRecipesMock } from '../mock-data/homeRecipesMock';

const title = 'Home Recipes';
export default {
  title,
  component: HomeRecipes,
};

export const HomeRecipesStory = () => {
  const storyProps: HomeRecipesProps = homeRecipesMock;
  return <HomeRecipes {...storyProps} />;
};

HomeRecipesStory.storyName = title;
