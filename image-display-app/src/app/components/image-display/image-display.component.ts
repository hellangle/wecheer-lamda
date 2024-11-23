import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { ImageEventService } from '../../services/image-event.service';
import { ImageEvent } from '../../services/image-event.service';

@Component({
  selector: 'app-image-display',
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  eventCount: number = 0;
  imageEvent: ImageEvent | null = null;

  constructor(private eventService: ImageEventService) { }

  ngOnInit(): void {
    this.refreshData();
    setInterval(() => this.refreshData(), 5000);
  }

  refreshData(): void {
    this.eventService.getLastEvent().subscribe(res => this.imageEvent = res?.data ?? null);
    this.eventService.getLastHourEventCount().subscribe(res => this.eventCount = res.data);
  }
}
