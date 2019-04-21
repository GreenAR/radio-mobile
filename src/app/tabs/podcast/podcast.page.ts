import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { RadioService } from "src/app/radio.service";

@Component({
  selector: "app-podcast",
  templateUrl: "./podcast.page.html",
  styleUrls: ["./podcast.page.scss"]
})
export class PodcastPage implements OnInit {
  results: Observable<any>;

  constructor(
    private radioService: RadioService,
    private nativeAudio: NativeAudio
  ) {}

  ngOnInit() {
    let domain = localStorage.getItem("radio");
    this.results = this.radioService.getPodcast(domain);
  }
  doRefresh(event) {
    let domain = localStorage.getItem("radio");
    this.results = this.radioService.getPodcast(domain);
    this.results.toPromise().then(data => {
      event.target.complete();
    });
  }
  play(item) {
    let domain = localStorage.getItem("radio");
    let url = item.record
      ? item.record
      : item.rushid
      ? "https://firstwebradio.com:10000/record/recorded/" +
        domain +
        "/" +
        item.record
      : item.mediaid
      ? "https://backend.firstwebradio.com/p/file/" + item.mediaid
      : null;

    this.nativeAudio.stop("player");
    this.nativeAudio.unload("player");
    this.nativeAudio.preloadComplex("player", url, 0.7, 1, 1).then(
      () => {
        this.nativeAudio.play("player").then(null, null);
      },
      error => {}
    );
  }
}
