import { Component } from '@angular/core';
import { CorpoProd } from "../../Components/Corpo-prod/corpo-prod";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-Lista',
  imports: [CorpoProd],
  templateUrl: './Lista.html',
  styleUrl: './Lista.css',
})

export class Lista {
}
