import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {
      word: 'hi',
      mean: 'xin chao'
    },
    {
      word: 'go',
      mean: 'di lai'
    },
  ];

  constructor() {
  }

  translate(word: string): string {
    return this.words.filter(it => it.word === word)[0].mean;
  }

  detail(word: string): Word {
    return this.words.filter(it => it.word === word)[0];
  }

  fillAll(): Word[] {
    return this.words;
  }
}
