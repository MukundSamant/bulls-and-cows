import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  getNumberOfBullsAndCows(sequence: string, answer: string):Result {

    const result: Result = {
      cows: 0,
      bulls: 0
    }
    const sequenceNumberMap = new Map();
    for(let i = 0; i < sequence.length; i++) {
      sequenceNumberMap.set(sequence.charAt(i), i);
    }

    for(let i = 0; i < answer.length; i++) {
      const charIndexInSequence = sequenceNumberMap.get(answer.charAt(i));
      if(charIndexInSequence === i){
        result.bulls+=1;
        continue;
      }

      if(charIndexInSequence !== undefined) {
        result.cows+=1;
      }
    }

    return result;
  }
}

export interface Result {
  bulls: number;
  cows: number;
}
