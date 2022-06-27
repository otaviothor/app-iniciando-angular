import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  logger(message: string): void {
    console.log(message);
  }
}
