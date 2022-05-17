import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  TextGeneratorPromptRequestInferface,
  TextGeneratorPromptResponseInferface,
} from "../text-generator.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TextGeneratorRequestService {
  constructor(private http: HttpClient) {}

  getGPT3CompletionResponse(
    engine: string,
    data: TextGeneratorPromptRequestInferface
  ): Observable<TextGeneratorPromptResponseInferface> {
    const url: string = `https://api.openai.com/v1/engines/${engine}/completions`;
    const headers = {
      headers: new HttpHeaders()
        .set("Authorization", `Bearer ${environment.gpt3_api_key}`)
        .set("Content-Type", "application/json"),
    };
    const body = JSON.stringify(data);

    try {
      return this.http.post<any>(url, body, headers).pipe();
    } catch (e) {
      // TODO: error handling
      return null;
    }
  }
}
