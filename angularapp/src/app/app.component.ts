
import { Component ,EventEmitter,Output } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  
  name='';
  foodName:newFood[] =[];
  image ='';
  calories=0;
  
  
  
  

  getValues(val:any)
  {
    this.foodName.push(val);
  }
  
  
  enteredSearchvalue:string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchvalue);
  }
  searchText:string = '';
  Onkey(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  
}
interface newFood {
  name: string;
  calories: number;
  image: string;
}

