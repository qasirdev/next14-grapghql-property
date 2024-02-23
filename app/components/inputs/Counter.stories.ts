import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Counter',
  component: Counter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component:
          'Works with [Button](/docs/example-button). <br><br>This component is intended to be used as the counter for number of guest, rooms, bathrooms. Therefore, you reference this component in your consuming application as follows:<br><br> ```<Counter subtitle="How many guests do you allow?" title="Guests" value={2} onChange={() => {}} />```',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Counter>;

// <Counter 
//   onChange={(value) => setCustomValue('guestCount', value)}
//   value={guestCount}
//   title="Guests" 
//   subtitle="How many guests do you allow?"
// />
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Guests',
    subtitle: 'How many guests do you allow?',
    value: 2,
    onChange: () => {
      return null
    }
  },

};

//   args: {
//     label: 'Counter',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Counter',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Counter',
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };