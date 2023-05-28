import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

studentList:Student[]=[];

StudentObj:Student={
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  mobile: ''
};
    id:string='';
    first_name:string='';
    last_name:string='';
    email:string='';
    mobile:string='';

  constructor(private auth : AuthService, private data : DataService){}
  ngOnInit(): void {
    this.getAllStudents();
  }

// Register(){
// this.auth.logout();
// }

getAllStudents(){

this.data.getAllStudents().subscribe(res=>{
console.log(res);

this.studentList=res.map((e:any)=>{
  // const data=e.payload.doc.data();
  // data.id=e.payload.doc.id;
  const data = e;
  console.log(data);
    
  return data;
})

},err=>{
alert('Eroare in timp ce fetchuiesc datele studentilor');
})

}

resetForm(){
  this.id='';
  this.first_name='';
  this.last_name='';
  this.email='';
  this.mobile='';
}
addStudent(){
if(this.first_name==''||this.last_name==''||this.mobile==''||this.email==''){
  alert('Vez ca ai omis un camp');
return;
}
this.StudentObj.id=" ";
this.StudentObj.email=this.email;
this.StudentObj.first_name=this.first_name;
this.StudentObj.last_name=this.last_name;
this.StudentObj.mobile=this.mobile;

this.data.addStudent(this.StudentObj);
this.resetForm();

}

updateStudent(){
}

deleteStudent(student: Student) {
  if (window.confirm('Sigur vrei sa stergi studentul ' + student.first_name + ' ' + student.last_name + '?')) {
    this.data.deleteStudent(student)
      .then(() => {
        this.studentList = this.studentList.filter((s: Student) => s.id !== student.id);
      })
      .catch(error => {
        // Handle error if the deletion fails
        console.error('Error deleting student:', error);
      });
  }
}
}
