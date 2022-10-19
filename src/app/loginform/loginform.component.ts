import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {passwordValidation} from'./customvalidation';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
sampleForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.sampleForm=this.fb.group({
  username:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

}
