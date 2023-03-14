import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: any;
  students: Student = new Student();
  constructor(private update: StudentService, private Route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.Route.snapshot.params['id'];
    this.update.getStudentId(this.id).subscribe((data: any) => {
      this.students = data;
    })
  }
  onsubmit() {
    this.update.updateStudent(this.id, this.students).subscribe(data => {
      this.gotoStudentList()
    })

  }
  gotoStudentList() {
    this.router.navigate(["/student"])
  }
}
