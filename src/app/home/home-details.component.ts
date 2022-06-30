import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../shared/navigation/navigation.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private navigationService: NavigationService,private route: ActivatedRoute) { }
  public items:any;
  public item:any;
  public searchItems: any;
  ngOnInit() {
    this.navigationService.gamesList().subscribe(item =>{
      this.items=item;
      this.item=this.items.find((x:any) => x.path===this.route.snapshot.params['id'])
      console.log(this.item)
    }
      )
  }

}
