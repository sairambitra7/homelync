import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardlist = [
    {
      id: 1,
      title: "1 to 1 Interaction",
      imagepath: "/assets/5.png"
    },
    {
      id: 2,
      title: "Trainers 150+",
      imagepath: "/assets/6.png"
    },
    {
      id: 3,
      title: "24/7 Support",
      imagepath: "/assets/7.png"
    },
    // {
    //   id: 4,
    //   title: "International Standards",
    //   imagepath: "/assets/8.png"
      
    // },
    // {
    //   id: 5,
    //   title: "Corporate Environment",
    //   imagepath: "/assets/9.png"
    // },
    // {
    //   id: 6,
    //   title: "Great Tech Infrastructure",
    //   imagepath: "/assets/10.png"
    // },
  ]

  list = [
      {
      id: 4,
      title: "International Standards",
      imagepath: "/assets/8.png"
      
    },
    {
      id: 5,
      title: "Corporate Environment",
      imagepath: "/assets/9.png"
    },
    {
      id: 6,
      title: "Great Tech Infrastructure",
      imagepath: "/assets/10.png"
    },
  ]

  images = [
    {
    id: 7,
    
    imagepath: "/assets/11.png"
    
  },
  {
    id: 8,
    
    imagepath: "/assets/12.png"
  },
  {
    id: 9,
    
    imagepath: "/assets/13.png"
  },
  {
    id: 10,
    
    imagepath: "/assets/14.png"
    
  },
  {
    id: 11,
    
    imagepath: "/assets/15.png"
  },
  {
    id: 12,
    
    imagepath: "/assets/16.png"
  },
]

card = [
  {
  id: 13,
  
  imagepath: "/assets/17.png"
  
},
{
  id: 14,
  
  imagepath: "/assets/18.png"
},
{
  id: 15,
  
  imagepath: "/assets/19.png"
},
{
  id: 16,
  
  imagepath: "/assets/20.png"
  
},
{
  id: 17,
  
  imagepath: "/assets/21.png"
},
{
  id: 18,
  
  imagepath: "/assets/22.png"
},
]

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelect(item:any){
    // this.router.navigate(['/cardlist'], {queryParams: { 'id': item.id }});
    console.log(item);
}
}