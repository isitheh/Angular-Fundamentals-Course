import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  constructor() { }

  info1: string[] = ["Adam Fogg", "AF343", "af@dot.net"];
  info2: string[] = ["Greyhound BusJam", "GB343", "gb@dot.net"];
  info3: string[] = ["Ben IsRunning", "BiR343", "bir@dot.net"];
  
  getInfo1(): string[] {
    return this.info1;
  }

  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }

  addInfo(info: string) {
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1;
  }
}
