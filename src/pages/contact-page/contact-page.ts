import { Component, OnInit } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EnquiryService } from '../../services/enquiry-service';

@Component({
  selector: 'app-contact-page',
  imports: [Banner, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage implements OnInit {
  contactForm!: FormGroup;
  constructor(private enquiryService: EnquiryService) {}
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl(''),
    });
  }
  submitHandler = () => {
    if (this.contactForm.valid) {
      this.enquiryService.submitEnquiry(this.contactForm.value).subscribe(
        (response) => {
          console.log('Enquiry submitted successfully', response);
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error submitting enquiry', error);
        }
      );
    }
  }
}
