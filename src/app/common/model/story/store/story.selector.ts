import { createSelector, select } from "@ngrx/store";
import { StoryState } from "./story.state";

export const selectStoryState = (state:any) => state.story;
export const selectLoading = createSelector(selectStoryState, (state:StoryState) => state.loading);
export const selectStatus = createSelector(selectStoryState, (state: StoryState) => state.status);
export const selectStatusMessage = createSelector(selectStoryState, (state: StoryState) => state.statusMessage);