import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
 templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  courses: any[];
  constructor() { }
  ngOnInit() {
    this.courses = [
      { id: '1', name: 'Course1' },
      { id: '2', name: 'Course2' },
      { id: '3', name: 'Course3' }
    ];
  }
}
