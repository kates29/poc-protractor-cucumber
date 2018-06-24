import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild} from '@angular/core';
import { animate, style, state, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  animations: [
    trigger('moveThis', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateY(100%)'}))
      ])
    ])
  ],
  host: {
    '(document:click)': 'handleClick($event)',
  }
  
})
export class KeyboardComponent implements OnInit {
  moving: boolean = false;
  selected: string = '';
  click_status: string = '';
  tecladoHeight: number = 0;
  @Output() sendNumber = new EventEmitter<string>();
  @Output() deleteNumber = new EventEmitter<string>();
  @Output() detectClick = new EventEmitter<string>();
  public elementRef;
  arr_num:any[] = ['s','p','i','d','e','r','m','a','n','*',0];
 
  constructor(myElement: ElementRef) {
      this.elementRef = myElement;
  }

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
        clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    if(inside){
        this.detectClick.emit('inside');
    }else{
        this.detectClick.emit('outside');
    }
  }

  ngOnInit() {
    this.arr_num.push("b");
  }

  show_pad() {
    this.moving = true;
  }

  hide_pad() {
    this.moving = false;
  }

  check_action(n){
    if(n=="b"){
      this.delete_number();
    }
    else{
      this.send_number(n+"");
    }
  }

  send_number(aux: string):void{
    if(aux!="*"){
      this.sendNumber.emit(aux);
      this.selected = aux;
    }
  }

  delete_number():void{
    this.deleteNumber.emit(this.selected);
  }

}
