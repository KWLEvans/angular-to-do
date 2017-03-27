import { Component } from '@angular/core';
import { Task } from './task.component';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li *ngFor = "let currentTask of tasks" (click)="currentTask.onClickMe()">{{currentTask.description}} {{currentTask.done}}</li>
  </ul>
  `
})

export class TaskList {
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course"),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub'),
    new Task('Figure out how to Angular.')
  ];
}
