import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { identity, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, DatePipe, CurrencyPipe, AsyncPipe, JsonPipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midterm_q_1';

  currentDate = new Date('2024-01-26T15:30:45');
  price = 42.42424242;

  // Async Properties
  arrayStream$ = of([1,2,3,4,5]).pipe(delay(1000));
  transformedData$ = of({ key: 'value', num: 42}).pipe(delay(1500), map(data => 'Processed: ${data.key}-${data.num}'));
  combinedAsync$ = of({ status: 'Active' }).pipe(delay(2000), map(data => 'Status: ${data.status}'));

  // JSON Properties
  nestedArrays = {
    data: [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    metadata: {type: 'matrix'}
  };
  complexData = {
    id: 1,
    details: {
      name: 'Complex Object',
      properties: {
        color: 'blue',
        size: 'large',
        features: ['a', 'b', 'c']
      }
    }
  };
  mixedTypes = {
    string: 'text',
    number: 42,
    boolean: true,
    array: [1, 'two', false],
    nested: { key: 'value' }
  };

  // Slice Properties
  numbers = [1,2,3,4,5,6,7,8,9,10];
  longString = 'Hello World';
  objectArray = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id:4, name: 'Fourth' }
  ];
}