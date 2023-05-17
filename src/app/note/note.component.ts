import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent {
  staticData = [
    {
      title: "Schedule 1",
      content: "Go to the cinema."
    },
    {
      title: "Schedule 2",
      content: "Play football"
    },
    {
      title: "Schedule 3",
      content: "Join the competition."
    },
    {
      title: "Schedule 4",
      content: "Have a breakfast and go to bed"
    },
    {
      title: "Schedule 5",
      content: "Get up and have a dinner."
    }
  ]
}
