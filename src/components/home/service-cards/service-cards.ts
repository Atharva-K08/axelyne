import { Component } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  imports: [],
  templateUrl: './service-cards.html',
  styleUrl: './service-cards.css',
})
export class ServiceCards {
  cards:any = [
    {
      icon:"bi bi-gear",
      title:"Website Development",
      description:"As one of the trusted website development companies in Pune, we build fast, responsive, and SEO-friendly websites that convert visitors into customers.",
      route:"/services/web-development/"
    },
    {
      icon:"bi bi-laptop",
      title:"Mobile Application Development",
      description:"We develop secure, scalable, and high-performance mobile applications for Android and iOS tailored to your business needs.",
      route:"/services/mobile-development/"
    },
    {
      icon:"bi bi-file-earmark-check",
      title:"Digital Marketing",
      description:"Our data-driven digital marketing strategies help you increase online visibility, generate quality leads, and grow your business.",
      route:"/services/web-development/"
    },
  ]
}
