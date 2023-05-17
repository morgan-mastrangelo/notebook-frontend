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
      category: "Entertainment",
      content: "Go to the cinema."
    },
    {
      title: "Schedule 2",
      category: "Entertainment",
      content: "Play football"
    },
    {
      title: "Schedule 3",
      category: "Entertainment",
      content: "Join the competition."
    },
    {
      title: "Schedule 4",
      category: "Meal",
      content: "Have a breakfast and go to bed"
    },
    {
      title: "Schedule 5",
      category: "Meal",
      content: "Get up and have a dinner."
    }
  ]
}
