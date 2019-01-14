import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../getuser.service';
import { PostuserService } from '../postuser.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  invalidFlagTitle: boolean;
  invalidFlagDescription: boolean;
  invalidFlagWeek: boolean;
  invalidFlagJob: boolean;
  submitValid: boolean = false;
  // ngModelReference: Object;
  getuser: Array<Object> = [];
  constructor(private getuserService: GetuserService, private postuserService: PostuserService) { }

  ngOnInit() {
    this.getuserService.getUser().subscribe(response => {
      this.getuser = response['data'];
    })
  }
  log(ngModelReference) {
    console.log(typeof ngModelReference, "typeof");
    console.log(ngModelReference);

  }
  submitForm(userForm) {
    // console.log(userForm.controls.Title.touched,"Title ngForm");
    console.log()
    console.log(userForm);
    console.log(userForm.form.value.job, "job");
    console.log(this.getuser, "users");
    if (userForm.status === "VALID") {
      this.submitValid = true;
      this.invalidFlagTitle = false;
      this.invalidFlagDescription = false;
      this.invalidFlagWeek = false;
      this.invalidFlagJob = false;
      let userData = {
        name: userForm.value.users,
        job: userForm.value.job
      };
      console.log(userData, "userData");
      this.postuserService.postProfile(userData);
      alert("Form Submitted Successfully!");

    }
    else {
      this.submitValid = false;
      if (userForm.controls.Title.invalid === true) {
        this.invalidFlagTitle = true;
      }
      else {
        this.invalidFlagTitle = false;
      }
      if (userForm.controls.description.invalid === true) {
        this.invalidFlagDescription = true;
      }
      else {
        this.invalidFlagDescription = false;
      }
      if (userForm.controls.weeksNotice.invalid === true) {
        this.invalidFlagWeek = true;
      }
      else {
        this.invalidFlagWeek = false;
      }
      if (userForm.controls.job.invalid === true) {

        this.invalidFlagJob = true;
      }
      else if (userForm._directives[4].control.valid === true) {
        this.invalidFlagJob = false;
      }
      alert("Please fill in all the required details");
    }
  }
}