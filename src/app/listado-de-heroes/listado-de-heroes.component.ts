import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {
  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString:string = "";
  focus_input: boolean = false;
  // The child component
  @ViewChild('teclado') pad;
  @ViewChild('spi') spinner;
  /* public heroes: Array<Heroe> = []; */

  constructor(private heroesService: HeroesService) { }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  /* Keyboard stuff */
  get_number_pad(a_number:any):void{
    this.searchString = this.searchString + a_number;
  }

  /* Borro el último digito ingresado por el teclado virtual en el input que haya lanzado el teclado*/
  delete_number_pad(a_number:any):void{
    this.searchString = this.searchString.slice(0,-1);
    /*if(this.searchString.length==1){
      this.searchString = this.searchString.slice(0,-1);
    }
    else{
      this.searchString = this.searchString.slice(0,-1);
    }*/
  }

  show_the_pad(event):void{
    this.focus_input = true;
    this.pad.show_pad();
  }

  /* Oculto el pad numérico cuando este tocando fuera del teclado y además pierda foco del input*/
  hide_the_pad(event):void{
    /* istanbul ignore else */ 
    if(event=="outside" && this.focus_input==false){
      this.pad.hide_pad();
    }
  }

  ngOnInit() {
    /* this.heroes.push(new Heroe(
      '1',
      'chiquitoman',
      'un man que es chiquito chiquito',
      new Date(),
      {
        'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334'
    ));

    this.heroes.push(new Heroe(
      '1',
      'chiquitoman 2',
      'un man que es chiquito chiquito',
      new Date(),
      {
        'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334'
    ));

    this.heroes.push(new Heroe(
      '1',
      'chiquitoman 3',
      'un man que es chiquito chiquito',
      new Date(),
      {
        'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334'
    ));

     */
    //this.spinner.toggle_spinner();

    this.heroesService.getHeroes();

    

  }

}
