import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k-td-hijri';

  formMode = false;
  dtype = "date"
  changeMode(){
    this.formMode = !this.formMode;
  }

  theLove(event:any){
    console.log("the start");
    console.log(event);
    console.log("the end");
  }
}
