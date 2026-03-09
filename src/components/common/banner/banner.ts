import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  @Input() headline!: string;
  @Input() subline!: string;
  @Input() image!: string;
  @Input() inputPosition!: string;
}
