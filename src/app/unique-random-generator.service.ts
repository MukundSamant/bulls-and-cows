import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueRandomGeneratorService {

  constructor() { }

  getRandomUniqueSequence(): string {
    const nums = new Set();
    while(nums.size !== 4) {
      nums.add(Math.floor(Math.random() * 10));
    }

    return [...nums].join('');
    // return [...nums] as number[];
  }
}
