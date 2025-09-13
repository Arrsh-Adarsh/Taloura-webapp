import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/common/model/app.constants';
import { Story } from '../../model/story/story';
import { ResponseEntity } from '../../model/response';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }


  saveStory(story: Story) : Observable<ResponseEntity<Story>> {
    return this.http.post<ResponseEntity<Story>>(`${AppConstants.API_BASE_URL}/story/v1/saveStory`, story);
  }

}
