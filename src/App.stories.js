import React from "react";

import App from "./App";

export default {
  // this is where it will appear on the storybook sidebar
  title: "CryptoApp/App",
  component: App,
};

const Template = (args) => <App {...args} />;

export const ApplicationTemplate = Template.bind({});
// default props it will render with
ApplicationTemplate.args = {};