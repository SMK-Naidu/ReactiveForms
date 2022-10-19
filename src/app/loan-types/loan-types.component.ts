import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {
'addloantypesform': FormGroup;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    // this.addloantypesform=new FormGroup({
    //  LoanName:new FormControl(),
    //  LoanDescription:new FormControl() 
    // })
    this.addloantypesform=this.fb.group(
      {
        loanName:new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]),
        loanType: new FormControl('',Validators.required),
        loanDescription:new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)
        ]))
      }
    )
    const newLoanobj={
      loanName:'My loan Application',
      loanType:'personal',
      loanDescription:'this loan application'
    }
    this.addloantypesform.setValue(newLoanobj);
  }

  addLoanType(){
//  console.log(this.addloantypesform.value);
console.log(this.addloantypesform.value);
  }

}
