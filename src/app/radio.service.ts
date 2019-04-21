import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RadioService {
  url = "https://backend.firstwebradio.com/api/v1/";

  constructor(private http: HttpClient) {}

  getPodcast(domain: string): Observable<any> {
    return this.http.get(`${this.url}pubepisodes/radio/${domain}`).pipe(
      map((results: Array<Object>) =>
        results.filter(result => {
          {
            let now = new Date();

            let broadcastingDate = new Date(result["broadcasting_date"]);
            if (broadcastingDate < now) {
              if (result["rushid"]) return true;
              if (result["mediaid"]) return true;
              if (
                result["start_date"] &&
                result["finished"] &&
                result["record"]
              ) {
                return true;
              }
            }
            return false;
          }
        })
      )
    );
  }
  getProgram(domain: string): Observable<any> {
    return this.http.get(`${this.url}pubepisodes/radio/${domain}`).pipe(
      map((results: Array<Object>) =>
        results
          .map(result => {
            {
              let endDate = new Date(results["broadcasting_date"]);
              endDate.setHours(endDate.getHours() + results["duration_hour"]);
              endDate.setMinutes(
                endDate.getMinutes() + results["duration_min"]
              );
              endDate.setSeconds(
                endDate.getSeconds() + results["duration_sec"]
              );
              results["end"] = endDate;
              return results;
            }
          })
          .sort(function(a, b) {
            return (
              new Date(b["broadcasting_date"]).getTime() -
              new Date(a["broadcasting_date"]).getTime()
            );
          })
      )
    );
  }
  getComments(domain: string): Observable<any> {
    return this.http.get(`${this.url}pubcmts/${domain}`);
  }
}
