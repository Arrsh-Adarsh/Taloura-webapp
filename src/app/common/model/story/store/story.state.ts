import { Story } from '../story';

export interface StoryState {
    stories: Story[];
    loading: boolean;
    status: number| null;
    statusMessage: any;
}

export const initialState: StoryState = {
    stories: [],
    loading: false,
    status: null,
    statusMessage: null
}