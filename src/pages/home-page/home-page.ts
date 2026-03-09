import { Component } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';

@Component({
  selector: 'app-home-page',
  imports: [Banner],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
