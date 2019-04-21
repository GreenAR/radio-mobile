import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public radio: string;
  public isPlaying: boolean = false;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private nativeAudio: NativeAudio
  ) {}
  ngOnInit() {
    let data = localStorage.getItem("radio");
    if (!data) {
      this.router.navigate(["list"]);
    }
    this.radio = data;
  }
  play() {
    this.nativeAudio
      .preloadComplex("player", "http://54.38.34.88:8000/ifm", 0.7, 1, 1)
      .then(
        () => {
          this.nativeAudio.play("player").then(null, null);
          this.isPlaying = true;
        },
        error => {}
      );
  }
  stop() {
    this.nativeAudio.stop("player");
    this.nativeAudio.unload("player");
    this.isPlaying = false;
  }
}
