import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConverterActions, SET_CONVERTER_OUTPUT } from './converter.action';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  public digits : [] = [];
  public integers : string = '';
  public texts : string = '';
  constructor(private store: Store<any>, private converterService: ConverterService){
    
  }

  ngOnInit() {
    let storeData = this.store.select("converterData");
    storeData.subscribe(data => {
      data && (this.digits = data.converterDigits);
    });
  }

  setClickValue(digit: string) {
    console.log(`You have entered ${digit}`);
    if(digit == '<--') {
      this.integers = this.integers.substring(0, this.integers.length-1);
      this.texts = this.converterService.getConvertedString(this.integers);
    } else {
      this.integers += digit;
    }
    if(digit === '#') {
      this.texts = this.converterService.getConvertedString(this.integers);
    }

    /* new ConverterActions({
      type: SET_CONVERTER_OUTPUT,
      inputValues: digit
    }); */
  }

}
