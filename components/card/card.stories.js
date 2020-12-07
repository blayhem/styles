import React from "react";
import Card from "./index";

export default {
  title: "NextJS Card",
  component: Card,
  argTypes: {
    title: {
      control: "text",
      description: "Title of the card",
    },
    description: { control: "text" },
  },
};

const Template = (args) => <Card {...args} />;

Template.args = {
  title: "title goes here",
  description: "and description goes here",
};

export const FirstStory = Template.bind({});
