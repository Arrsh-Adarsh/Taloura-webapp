import { createReducer, on } from "@ngrx/store";
import { initialState } from "./story.state";
import * as StoryAction from "./story.actions";


export const storyReducer = createReducer(
    initialState,

    on(StoryAction.addStory, (state) =>({
        ...state,
        loading: true
    })),

    on(StoryAction.addStorySucess, (state, {response}) => ({
        ...state,
        loading: false,
        status : response.statusName,
        statusMessage: response.message,
        stories: response.payload ? [...state.stories, response.payload] : state.stories,
    })),

    on(StoryAction.addStoryFailure, (state, {response}) => ({
        ...state,
        loading: false,
        status : response.statusName,
        statusMessage: response.message,
    })),

);