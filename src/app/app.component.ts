import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isStyleApplied= false;
  title = 'attribute-directives';
  highlightColor='white';
  highlight(color:string){
    this.highlightColor= color;
    
  }
  changeStyle(){
    this.isStyleApplied= !this.isStyleApplied;
  }
}
