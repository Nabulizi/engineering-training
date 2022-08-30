import React from 'react';
import  Logo  from '../components/logo';

export default {
    title: 'Logo',
    component: Logo,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Logo {...args} />;


// export const Primary = () => <Logo storybook-logo--S>S</Logo>;

//👇 Each story then reuses that template
export const Small = Template.bind({});
Small.args = {
   primary: true,
   label: 'Logo',
};

//👇 Each story then reuses that template
export const Large = Template.bind({});
Large.args = {
   primary: true,
   label: 'Logo',
};

