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

    addStory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoryAction.addStory),
            mergeMap(({payload}) =>
                this.storyService.saveStory(payload).pipe(
                    map((response: ResponseEntity<Story>) => {
                        if(response.payload){
                            return StoryAction.addStorySucess({response: response});
                        } else {
                            return StoryAction.addStoryFailure({response: {
                                statusCode: response.statusCode,
                                statusName: response.statusName,
                                message: response.message,
                                timeStamp: response.timeStamp,
                                payload: null,
                            }});
                        }
                    }),
                    catchError(() => 
                        of(StoryAction.addStoryFailure({response: {
                            statusCode: 500,
                            statusName: 'Error',
                            message: 'Something went Wrong',
                            timeStamp: new Date(),
                            payload: null
                        }}))
                    )
                )
            )
        )
    );


}