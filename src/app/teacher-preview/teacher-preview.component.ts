import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-preview',
  templateUrl: './teacher-preview.component.html',
  styleUrls: ['./teacher-preview.component.css']
})
export class TeacherPreviewComponent implements OnInit {

  teacher: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.teacher = this.router.snapshot.paramMap.get('teacher');
    console.log(this.teacher);
  }

}
