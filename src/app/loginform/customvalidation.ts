import { AbstractControl } from "@angular/forms";
export function passwordValidation(control:AbstractControl){
    if(control && (control.value!==null || control.value!==undefined)){
const confirm_password_data = control.value;
const passwordTxtBox =control.root.get('password');
  
    }
    return null;
}