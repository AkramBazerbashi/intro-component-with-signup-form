import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.learnForm.valueChanges.subscribe(console.log);
  }

  learnForm = new FormGroup({
    fn: new FormControl('', [Validators.required]),
    ls: new FormControl('', [Validators.required]),
    ps: new FormControl('', [Validators.required]),
    em: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-_]+@[a-zA-Z]+[.][a-zA-Z]+$')])

  });

  get fn() { return this.learnForm?.get('fn'); }
  get ls() { return this.learnForm?.get('ls'); }
  get em() { return this.learnForm?.get('em'); }
  get ps() { return this.learnForm?.get('ps'); }
}
