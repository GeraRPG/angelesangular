import { Component, OnInit, HostBinding } from '@angular/core';
import { Cake } from 'src/app/models/cakes';
import { CakesService } from "src/app/services/cakes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cake-form',
  templateUrl: './cake-form.component.html',
  styleUrls: ['./cake-form.component.css']
})
export class CakeFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  cake: Cake = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };

  edit: boolean = false;

  constructor(private CakeServices: CakesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.CakeServices.getCake(params.id)
        .subscribe(
          res => {
            this.cake = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
  saveNewCake(){
    delete this.cake.create_at;
    delete this.cake.id;
    this.CakeServices.savedCake(this.cake)
      .subscribe(
        res => {
          this.router.navigate(['/cakes']);
        },
        err => console.log(err)
      )
  }
  updateCake(){
    delete this.cake.create_at;
    this.CakeServices.updatedCake(this.cake.id, this.cake)
      .subscribe(
        res => {
          this.router.navigate(['/cakes']);
        },
        err => console.log(err)
      )
  }
}
