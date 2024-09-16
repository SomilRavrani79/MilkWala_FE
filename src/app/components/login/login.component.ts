import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CommonService } from '../../Services/common-service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  step = 1;
  OTP = 0;
  token = '';
  mobileForm: FormGroup;
  otpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService, private snackBar: MatSnackBar) {
    this.mobileForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  handleMobileSubmit() {
    if (this.mobileForm.valid) {
      this.commonService.login(this.mobileForm.value).subscribe((data) => {
        if (data.token !== '0') {
          this.OTP = data.otp;
          this.token = data.token;
          this.step = 2;
          localStorage.setItem('Phone', this.mobileForm.value.mobileNumber.toString())
          localStorage.setItem('authToken', this.token.toString())

          this.showSnackbar('OTP Sent Succesfully');
        } else {
          this.showSnackbar('Invalid User')
        }
      })
    }

  }

  handleOtpSubmit() {
    // if (this.otpForm.valid) {
    //   if (this.otpForm.value.otp == '000000') {
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     alert('OTP is not valid')
    //   }
    // }

    if (this.mobileForm.valid) {
      let Obj = {
        Phone: localStorage.getItem('Phone'),
        Otp: this.OTP
      }
      this.commonService.verifyOtp(Obj).subscribe((data) => {
        if (data.data) {
          this.router.navigate(['/dashboard']);
        }
        else {
          this.showSnackbar('Invalid OTP');
        }
      })
    };
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }



}
