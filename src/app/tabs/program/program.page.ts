import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { RadioService } from "src/app/radio.service";

@Component({
  selector: "app-program",
  templateUrl: "./program.page.html",
  styleUrls: ["./program.page.scss"]
})
export class ProgramPage implements OnInit {
  results: Observable<any>;
  constructor(private radioService: RadioService) {}
  ngOnInit() {
    let domain = localStorage.getItem("radio");
    this.results = this.radioService.getPodcast(domain);
  }
  doRefresh(event) {
    let domain = localStorage.getItem("radio");
    this.results = this.radioService.getProgram(domain);
    this.results.toPromise().then(data => {
      event.target.complete();
    });
  }
}
