import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {Word} from '../model/word';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  words: Word[];
  wordDetail: Word;


  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.words = this.dictionaryService.fillAll();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const word = paramMap.get('word');
      this.wordDetail = this.dictionaryService.detail(word);
    });
  }

}
