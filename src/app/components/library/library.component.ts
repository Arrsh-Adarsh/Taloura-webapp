import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchAllStory } from 'src/app/common/model/story/store/story.actions';
import { StoryState } from 'src/app/common/model/story/store/story.state';
import { Story } from 'src/app/common/model/story/story';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  stories$: Observable<Story[]>;
  loading$: Observable<boolean>;
  statusMessage$: Observable<any>;
  status$: Observable<number | null>;

  constructor(private store: Store<{stories: StoryState}>) {
    this.stories$ = this.store.select((state) => state.stories.stories)
    this.loading$ = this.store.select((state) => state.stories.loading)
    this.statusMessage$ = this.store.select((state) => state.stories.statusMessage)
    this.status$ = this.store.select((state) => state.stories.status)
  }
  ngOnInit(): void {
      this.fetchAllStories();
  }



  fetchAllStories() {
    this.store.dispatch(fetchAllStory());
  }

  isSuccessStatus(statusCode: number| null): boolean {
    return statusCode? statusCode >=200 && statusCode <= 299? true: false: false;
  }

}
