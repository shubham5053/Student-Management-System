import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl = "http://localhost:8080/api/v1/user";
  constructor(private http: HttpClient) { }

  getstudentlist(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseurl}`);
  }
  poststudent(student: Student): Observable<Student[]> {
    return this.http.post<Student[]>(`${this.baseurl}`, student);
  }
  getStudentId(id: any): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseurl}/${id}`)
  }
  updateStudent(id: any, students: Student): Observable<Student[]> {
    return this.http.put<Student[]>(`${this.baseurl}/${id}`, students);
  }
  deleteStudent(id: any): Observable<Student[]> {
    return this.http.delete<Student[]>(`${this.baseurl}/${id}`);
  }
}
