import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './video';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
  mainHeading = Config.MAIN_HEADING;
  videos: Array<Video>;
  
  constructor() {
    this.videos = [
      new Video(1, "Installing Django", "qgGIqRFvFFK", "Get Django on your computer, yo!"),
      new Video(2, "Surviving Wilderness", "Fgwy-UdtyLS", "How to not die in the wild with Dwight Schrute")
    ];
  }
}
