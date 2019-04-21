import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  public items: Array<{ title: string; picture: string; domaine: string }> = [];
  constructor(public router: Router) {
    this.items = [
      {
        title: "ifm",
        picture:
          "https://backend.firstwebradio.com/picture/settings/ifm.firstwebradio.com/1554759263.jpg",
        domaine: "ifm.firstwebradio.com"
      },
      {
        title: "mjmarsa",
        picture:
          "https://backend.firstwebradio.com/picture/settings/ifm.firstwebradio.com/1550834168.png",
        domaine: "mjmarsa.firstwebradio.com"
      },
      {
        title: "tanwir",
        picture:
          "https://backend.firstwebradio.com/picture/settings/tanwir.firstwebradio.com/1553524867.jpg",
        domaine: "tanwir.firstwebradio.com"
      }
    ];
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  goTo(payload) {
    localStorage.setItem("radio", payload);
    this.router.navigate(["/home"]);
  }
}
