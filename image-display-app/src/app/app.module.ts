import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent // Add your component here
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
