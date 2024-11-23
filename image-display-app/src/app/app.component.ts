import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { ImageEventService } from './services/image-event.service';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is a standalone component
  imports: [RouterOutlet, ImageDisplayComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageEventService]
})
export class AppComponent {
  title = 'image-display-app';
}
