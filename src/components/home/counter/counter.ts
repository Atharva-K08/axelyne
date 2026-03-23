import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
  count: number = 0;
  id!: number;
  @Input() limit!: string;
  @Input() speed!: string;
  @Input() subline!: string;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.id = setInterval(() => {
      this.count += 1;
      this.cdr.detectChanges();
      if (this.count >= Number(this.limit)) {
        clearInterval(this.id);
      }
    }, Number(this.speed));
  }
}
