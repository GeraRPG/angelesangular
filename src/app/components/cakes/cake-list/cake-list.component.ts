import { Component, OnInit, HostBinding } from '@angular/core';
import { CakesService } from "src/app/services/cakes.service";
@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  Cakes: any = [];
  
  constructor(private cakeService: CakesService) { }

  ngOnInit() {
    this.getCakes();
  }
  getCakes(){
    this.cakeService.getCakes()
    .subscribe(
      res => {
        this.Cakes = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  deletedCake(id: string){
    this.cakeService.deletedCake(id)
    .subscribe(
      res => {
        console.log(res);
        this.getCakes();
      },
      err => console.error(err)
    );
  }
}
