import { TestBed } from '@angular/core/testing';

import { UniqueRandomGeneratorService } from './unique-random-generator.service';

describe('UniqueRandomGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueRandomGeneratorService = TestBed.get(UniqueRandomGeneratorService);
    expect(service).toBeTruthy();
  });

  it('generate a sequence of 4 unique numbers from 0-9', () => {
    const service: UniqueRandomGeneratorService = TestBed.get(UniqueRandomGeneratorService);
    const numSequence = service.getRandomUniqueSequence();
    console.log(numSequence);
    expect(numSequence.length).toBe(4);
    expect(hasDuplicates(numSequence)).toBeFalsy();

    for(let i=0; i < numSequence.length; i++){
      expect(parseInt(numSequence.charAt(i))).toBeGreaterThanOrEqual(0);
      expect(parseInt(numSequence.charAt(i))).toBeLessThanOrEqual(9);
    }
  });

  function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }

});
