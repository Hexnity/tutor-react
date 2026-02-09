import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/shared/ui/card';

const meta: Meta<typeof Card> = {
    title: 'Shared/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: (args) => (
        <Card {...args} className="w-[350px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This is the main content of the card. You can put anything here.</p>
            </CardContent>
            <CardFooter className="justify-between">
                <button className="text-sm text-slate-500">Cancel</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Action</button>
            </CardFooter>
        </Card>
    ),
};

export const Simple: Story = {
    render: (args) => (
        <Card {...args} className="w-[300px]">
            <CardContent className="pt-6">
                <p>A simple card with only content.</p>
            </CardContent>
        </Card>
    ),
};
