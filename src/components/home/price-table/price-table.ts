import { Component } from '@angular/core';

@Component({
  selector: 'app-price-table',
  imports: [],
  templateUrl: './price-table.html',
  styleUrl: './price-table.css',
})
export class PriceTable {

  services = [
  {
    service: "Professional online presence for your business",
    beginner: true,
    professional: true,
    premium: true
  },
  {
    service: "Works perfectly on mobile, tablet, and desktop",
    beginner: true,
    professional: true,
    premium: true
  },
  {
    service: "Fast loading website",
    beginner: true,
    professional: true,
    premium: true
  },
  {
    service: "Basic contact form for customer enquiries",
    beginner: true,
    professional: true,
    premium: true
  },
  {
    service: "Social media links integration",
    beginner: true,
    professional: true,
    premium: true
  },
  {
    service: "Admin panel to manage website data easily",
    beginner: false,
    professional: true,
    premium: true
  },
  {
    service: "Customer enquiry data saved automatically",
    beginner: false,
    professional: true,
    premium: true
  },
  {
    service: "Better control over business information",
    beginner: false,
    professional: true,
    premium: true
  },
  {
    service: "Business reports and performance insights",
    beginner: false,
    professional: true,
    premium: true
  },
  {
    service: "High security for customer data",
    beginner: false,
    professional: true,
    premium: true
  },
  {
    service: "Email Service",
    beginner: false,
    professional: false,
    premium: true
  },
  {
    service: "Google Reviews & Footprinting",
    beginner: false,
    professional: false,
    premium: true
  }
];

}
