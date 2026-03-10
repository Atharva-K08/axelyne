import { Component } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';
import { ServiceCards } from '../../components/home/service-cards/service-cards';
import { Industries } from '../../components/home/industries/industries';
import { PriceTable } from '../../components/home/price-table/price-table';

@Component({
  selector: 'app-home-page',
  imports: [Banner, ServiceCards, Industries, PriceTable],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
