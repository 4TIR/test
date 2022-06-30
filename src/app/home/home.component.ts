import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { NavigationService } from '../shared/navigation/navigation.service';
import { Item } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }
  public items:Item[]=[];
  public searchText: any;
  public searchItems: Item[]=[];
  ngOnInit() {
    this.navigationService.gamesList().subscribe(item =>{
      this.items=item;
    }
      )
    this.name.valueChanges.subscribe(x => {
        this.searchItems = this.items.filter((el: any) => el.name.toLocaleLowerCase().includes(x?.toLocaleLowerCase()))
       
       })
  }
  name = new FormControl('');
  
 public  search() {
    this.searchText = this.name.value
  }

}
