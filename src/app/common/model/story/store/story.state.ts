import { Story } from '../story';

export interface StoryState {
    stories: Story[];
    loading: boolean;
    status: any;
    statusMessage: any;
}

export const initialState: StoryState = {
    stories: [],
    loading: false,
    status: null,
    statusMessage: null
}