import { ConverterService } from './converter.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ConverterActions } from './converter.action';
import { observable } from 'rxjs';

@Injectable()
export class ConverterEffect {
 
  convert$ = createEffect(() => this.actions$.pipe(
    ofType('CONVERT_INT_TO_TEXT')
  ));
 
  constructor(
    private actions$: Actions,
    private converterService: ConverterService
  ) {}
}