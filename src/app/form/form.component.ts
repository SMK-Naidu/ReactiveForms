import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,MinLengthValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
addLoanType() {
throw new Error('Method not implemented.');
}
addLoanTypesForm : FormGroup | any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  this.addLoanTypesForm = this.fb.group({
    'loanName': new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20)
    ]),
    'loanType': new FormControl('', Validators.required),
    'loanDescription': new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20)
    ])),
  })  
  }

}
