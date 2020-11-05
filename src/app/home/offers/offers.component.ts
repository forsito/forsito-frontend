import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
offers:Offer[] = 
[{'id': 1 , 'image':'../../../assets/img/fastIcon.png' , 'name':'fast Work'} ,
{'id': 2 , 'image':"../../../assets/img/Technical support.png" , 'name':'Technical support'},
{'id': 3 , 'image':"../../../assets/img/Responsive.png" , 'name':'Responsive'}
]
;
  constructor() { }

  ngOnInit(): void {
  }

}
