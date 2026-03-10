import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  imports: [],
  templateUrl: './industries.html',
  styleUrl: './industries.css',
})
export class Industries {
  industries = [
    { icon: 'bi-rocket-takeoff', title: 'Startups & Entrepreneurs' },
    { icon: 'bi-shop', title: 'SMEs' },
    { icon: 'bi-building', title: 'Corporate & Enterprises' },
    { icon: 'bi-cart', title: 'E-commerce & Retail' },
    { icon: 'bi-heart-pulse', title: 'Healthcare & Wellness' },
    { icon: 'bi-mortarboard', title: 'Education & E-Learning' },
    { icon: 'bi-house', title: 'Real Estate & Construction' },
    { icon: 'bi-bank', title: 'Finance & FinTech' },
    { icon: 'bi-laptop', title: 'IT, Software & SaaS' },
    { icon: 'bi-gear', title: 'Manufacturing & Industrial' },
    { icon: 'bi-truck', title: 'Logistics & Transportation' },
    { icon: 'bi-airplane', title: 'Travel & Hospitality' },
    { icon: 'bi-film', title: 'Media & Entertainment' },
    { icon: 'bi-building-lock', title: 'Government & Public Sector' },
    { icon: 'bi-flower1', title: 'Agriculture & AgriTech' },
    { icon: 'bi-sun', title: 'Energy & Sustainability' },
  ];
}
