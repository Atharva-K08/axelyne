import { Component } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';
import { ServiceCards } from '../../components/home/service-cards/service-cards';

@Component({
  selector: 'app-home-page',
  imports: [Banner, ServiceCards],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
