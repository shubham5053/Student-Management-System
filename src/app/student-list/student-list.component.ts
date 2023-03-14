import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  [x: string]: any;
  students: Student[] | undefined;
  constructor(private studentservice: StudentService, private router: Router) { }
  ngOnInit() {
    this.getStudent();

  }
  private getStudent() {
    this.studentservice.getstudentlist().subscribe(data => {
      console.log(data);
      this.students = data;
    });
  }
  updateStudent(id: any) {
    this.router.navigate(['update-student', id]);
  }
  deleteStudent(id: any) {
    this.studentservice.deleteStudent(id).subscribe(data => {
      this.getStudent();
    })
  }


}


