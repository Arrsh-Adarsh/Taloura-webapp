import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StoryService } from "src/app/common/services/story/story.service";

import * as StoryAction from "./story.actions";
import { ResponseEntity } from "../../response";
import { Story } from "../story";
import { mergeMap, map, catchError, of } from "rxjs";


@Injectable()
export class StoryEffect {

    constructor(private actions$: Actions,
        private storyService: StoryService
    ) {}

    createErrorResponse(): ResponseEntity<null> {
    return {
                statusCode: 500,
                statusName: 'Error',
                message: 'Something went Wrong',
                timeStamp: new Date(),
                payload: null
            }
    }

    //add Story

    addStory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoryAction.addStory),
            mergeMap(({payload}) =>
                this.storyService.saveStory(payload).pipe(
                    map((apiResponse: ResponseEntity<Story>) => {
                        if(apiResponse.payload){
                            return StoryAction.addStorySucess({response: apiResponse});
                        } else {
                            return StoryAction.addStoryFailure({response: {...apiResponse, payload:null}});
                        }
                    }),
                    catchError(() => 
                        of(StoryAction.addStoryFailure({response: this.createErrorResponse()}))
                    )
                )
            )
        )
    );

    //fetchy all Story
    
    $fetchAllStories = createEffect(() =>
        this.actions$.pipe(
            ofType(StoryAction.fetchAllStory),
            mergeMap(() =>
                this.storyService.fetchAllStory().pipe(
                    map((apiResponse: ResponseEntity<Story[]>) =>{
                        if(apiResponse.payload) {
                            return StoryAction.fetchAllStorySucess({response: apiResponse})
                        } else {
                            apiResponse.payload = undefined;
                            return StoryAction.fetchAllStoryFailure({response: {...apiResponse, payload:null}})
                        }
                    }),
                     catchError(() => 
                        of(StoryAction.addStoryFailure({response: this.createErrorResponse()}))
                    )
                )
            )
        )
    );


}