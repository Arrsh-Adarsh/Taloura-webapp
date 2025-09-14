import { createReducer, on } from "@ngrx/store";
import { initialState } from "./story.state";
import * as StoryAction from "./story.actions";
import { state } from "@angular/animations";


export const storyReducer = createReducer(
    initialState,

    //add story

    on(StoryAction.addStory, (state) =>({
        ...state,
        loading: true
    })),

    on(StoryAction.addStorySucess, (state, {response}) => ({
        ...state,
        loading: false,
        status : response.statusCode,
        statusMessage: response.message,
        stories: response.payload ? [...state.stories, response.payload] : state.stories,
    })),

    on(StoryAction.addStoryFailure, (state, {response}) => ({
        ...state,
        loading: false,
        status : response.statusCode,
        statusMessage: response.message,
    })),

    //fetch All story

    on(StoryAction.fetchAllStory, (state) => ({
        ...state,
        loading: true
    })),

    on(StoryAction.fetchAllStorySucess, (state, {response}) => ({
        ...state,
        loading: false,
        status: response.statusCode,
        statusMessage: response.statusName,
        stories: response.payload? [...response.payload]:  []
    })),

    on(StoryAction.fetchAllStoryFailure, (state, {response}) =>({
        ...state,
        loading: false,
        status: response.statusCode,
        statusMessage: response.message,
    })),

);