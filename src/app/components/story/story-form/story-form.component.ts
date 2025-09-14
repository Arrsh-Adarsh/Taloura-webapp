import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addStory } from 'src/app/common/model/story/store/story.actions';
import { StoryState } from 'src/app/common/model/story/store/story.state';
import { Story } from  'src/app/common/model/story/story';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  formTitle:string = "Add Story";
  submitButtonLabel:string = "Add Story";
  formType: 'add' | 'edit' = 'add';

  storyForm!: FormGroup;

  loading$: Observable<boolean>;
  statusMessage$: Observable<any>;
  status$: Observable<any>;

  constructor(private builder: FormBuilder, 
              private store: Store<{stories: StoryState}>) {
                this.loading$ = this.store.select((state) => state.stories.loading)
                this.statusMessage$ = this.store.select((state) => state.stories.statusMessage)
                this.status$ = this.store.select((state) => state.stories.status)
              }

  ngOnInit(): void {

    if(this.formType === 'add') {
      this.formTitle = "Add Story";
      this.submitButtonLabel = "Add Story";
    } else {
      this.formTitle = "Edit Story";
      this.submitButtonLabel = "Update Story";
    }

    this.storyForm = this.builder.group({
      storyId: this.builder.control(''),
      title: this.builder.control('', Validators.required),
      story: this.builder.control('', Validators.required),
      authorId: this.builder.control(''),
      createTimestamp: this.builder.control(''),
      updateTimestamp: this.builder.control('')
    });

  }

  onFormSubmit() {

    if(this.formType === 'add') {
      let newStory: Story = this.newStoryObject();
      console.log("New Story: ", newStory);
      this.store.dispatch(addStory({payload: newStory}));
    }
    this.storyForm.reset();
  }

  mapFormToStory(): Story {
    return  {
      storyId: this.storyForm.value.storyId,
      storyTitle: this.storyForm.value.title,
      story: this.storyForm.value.story,
      authorId: this.storyForm.value.authorId,
      createTimestamp: this.storyForm.value.createTimestamp,
      updateTimestamp: new Date()
    };
  };

  newStoryObject(): Story {
    return {
          storyId: 0,
          storyTitle: this.storyForm.value.title,
          story: this.storyForm.value.story,
          authorId: 1, // Temporary hardcoded authorId
          createTimestamp: new Date(),
          updateTimestamp: new Date(),
      };
  }
}
