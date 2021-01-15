import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Result, ResultsService } from './results.service';
import { UniqueRandomGeneratorService } from './unique-random-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bulls-and-cows'; 
  steps: Step[];
  guessedInput: FormControl;
  randomSequence: string;
  guessResult: Result ;

  constructor(private uniqueRandomGenerator: UniqueRandomGeneratorService,
    private resultsService: ResultsService) {

  }

  ngOnInit(){
    this.guessedInput= new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern(/^(?!.*(.).*\1)\d{4}$/)
    ]);

    this.init();
  }
  

  init() {
    this.randomSequence = this.uniqueRandomGenerator.getRandomUniqueSequence();
    this.steps = [];
    this.guessResult = null;
    this.guessedInput.setValue('');
    this.guessedInput.markAsUntouched();
    this.guessedInput.markAsPristine();
  }

  

  submit() {
    if(this.guessedInput.valid) {
       this.guessResult = this.resultsService.getNumberOfBullsAndCows(this.randomSequence, this.guessedInput.value);
       this.steps.push({
         guess: this.guessedInput.value,
         result: this.guessResult
       });
    }
    
  }
  
}

export interface Step {
  guess: string,
  result: Result
}
