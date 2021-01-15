import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultsService = TestBed.get(ResultsService);
    expect(service).toBeTruthy();
  });

  it('should return correct number of bulls and cows based on answer provided', ()=>{
      const service: ResultsService = TestBed.get(ResultsService);
      const sequence = '9681';
      const guessesAndResults = [{
        guess: '1234',
        result: {
          bulls: 0,
          cows: 1
        }
      },{
        guess: '9065',
        result: {
          bulls: 1,
          cows: 1
        }
      },{
        guess: '8916',
        result: {
          bulls: 0,
          cows: 4
        }
      },{
        guess: '9861',
        result: {
          bulls: 2,
          cows: 2
        }
      },{
        guess: '9681',
        result: {
          bulls: 4,
          cows: 0
        }
      }];

      guessesAndResults.forEach((guessAndResult)=>{
        const bullsAndCows = service.getNumberOfBullsAndCows(sequence, guessAndResult.guess);
        expect(bullsAndCows).toEqual(guessAndResult.result);
      });
 
  });
});
