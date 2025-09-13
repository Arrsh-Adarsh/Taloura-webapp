import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {

  constructor(private router: Router) {}

  addStoryButton(){
    this.router.navigate(['/writeUp/add-story']);
  }
}
