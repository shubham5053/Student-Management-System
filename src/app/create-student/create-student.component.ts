import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  students: Student = new Student();

  constructor(private studentser: StudentService, private router: Router) { }
  ngOnInit() {

  }
  saveStudent() {
    this, this.studentser.poststudent(this.students).subscribe((data) => {
      console.log(data);
      this.gotoemployeeList();
    },
      error => console.log(error))
  }
  gotoemployeeList() {
    this.router.navigate(["/student"])
  }
  onsubmit() {
    console.log(this.students);
    this.saveStudent();
  }
}
