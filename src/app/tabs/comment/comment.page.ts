import { Component, OnInit } from "@angular/core";
import { RadioService } from "src/app/radio.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.page.html",
  styleUrls: ["./comment.page.scss"]
})
export class CommentPage implements OnInit {
  results: Observable<any>;
  constructor(private radioService: RadioService) {}

  ngOnInit() {
    let domain = localStorage.getItem("radio");
    this.results = this.radioService.getComments(domain);
  }
  doRefresh(event) {
    let domain = localStorage.getItem("radio");
    this.results = this.radioService.getComments(domain);
    this.results.toPromise().then(data => {
      event.target.complete();
    });
  }
}
