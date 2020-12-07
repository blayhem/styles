import React from "react";
import Card from "./index";

export default {
  title: "Tailwind Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
};

const Template = (args) => <Card {...args} />;

Template.args = {
  title: "title goes here",
  description: "and description goes here",
};

export const FirstStory = Template.bind({});
