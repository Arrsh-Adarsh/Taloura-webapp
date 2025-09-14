import { createAction, props } from "@ngrx/store";
import { Story } from "../story";
import { ResponseEntity } from "../../response";

export const addStory = createAction("[Story] Add Story", props<{ payload: Story}>());
export const addStorySucess = createAction("[Story] Add Story Success", props<{ response: ResponseEntity<Story>}>());
export const addStoryFailure = createAction("[Story] Add Story Failure", props<{ response: ResponseEntity<null>}>());

export const editStory = createAction("[Story] Update Story",  props<{ payload: Story}>());

export const fetchAllStory = createAction("[Story] Fetch All Story");
export const fetchAllStorySucess = createAction("[Story] Fetch All Story Success", props<{ response: ResponseEntity<Story[]>}>());
export const fetchAllStoryFailure = createAction("[Story] Fetch All Story Failure", props<{ response: ResponseEntity<null>}>());

export const deleteStory = createAction("[Story] Delete Story",  props<{ payload: number}>());
