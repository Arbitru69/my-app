import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private studentsCollection: AngularFirestoreCollection<Student>;

  constructor(private afs: AngularFirestore) {
    this.studentsCollection = this.afs.collection<Student>('/Students');
  }

  // Add student
  addStudent(student: Student) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // Get all students
  getAllStudents() {
    return this.afs.collection('/Students').valueChanges();
  }

  // Delete student
  deleteStudent(student: Student) {
    const ref=this.afs.collection('/Students').doc(student.id);
   return ref.delete();
  }

  // Update student
  updateStudent(student: Student) {
   this.deleteStudent(student);
   this.addStudent(student);
  }
}