import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommerceService } from './ecommerce.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  eCommerceBackgroundImage = 'https://www.cbnits.com/69e0e9b99d9ae7329e0fd6e1ef763b22.jpg'
  eCommerceHeaderTitle ='Ecommerce Segment';
  eCommerceHeaderSpan ='Case Study';
  eCommerceHeaderLanguageArray: any = [];

  overviewHeading ='overview';
  overviewSpan = "It's an online marketplace for house hold products and to make day to day items available at your doorsteps. The platform has three types of users – Seller, Buyer and Admin Panel. The Seller needs to register and list their products in the platform with all the details. The buyers can search for products and add them to cart and make payment. The buyers can leave a review for the products they have bought. The admin will be responsible for looking after the entire functionality of the platform."
  overviewImg = "https://cbnits.s3.us-east-1.amazonaws.com/csEcomMain.jpg"

  sellerHeading = "Seller's Activity:";
  sellerArray = [
    {
      id: 1,
      firstSpan: '1',
      firstSpan1: 'Sign In / Sign Up'
    },
    {
      id: 2,
      firstSpan: '2',
      firstSpan1: 'List Product With All Details'
    },
    {
      id: 3,
      firstSpan: '3',
      firstSpan1: 'Seller Order'
    },
    {
      id: 4,
      firstSpan: '4',
      firstSpan1: 'Seller Dashboard'
    },
    {
      id: 5,
      firstSpan: '5',
      firstSpan1: 'Seller Report'
    },
    {
      id: 6,
      firstSpan: '6',
      firstSpan1: 'Seller Account'
    },
    {
      id: 7,
      firstSpan: '7',
      firstSpan1: 'Seller Payments'
    },
    {
      id: 8,
      firstSpan: '8',
      firstSpan1: 'Seller Delivery Management System'
    },
    {
      id: 9,
      firstSpan: '9',
      firstSpan1: 'Seller Stock Report'
    },
    {
      id: 10,
      firstSpan: '10',
      firstSpan1: 'Commission Calculator'
    }
  ];


  buyerHeading = "Buyer's Activity:";
  buyerArray = [
    {
      id: 1,
      secondSpan: '1',
      secondSpan1: 'Sign In / Sign Up'
    },
    {
      id: 2,
      secondSpan: '2',
      secondSpan1: 'Search Product'
    },
    {
      id: 3,
      secondSpan: '3',
      secondSpan1: 'Add Product To Cart'
    },
    {
      id: 4,
      secondSpan: '4',
      secondSpan1: 'Place Order'
    },
    {
      id: 5,
      secondSpan: '5',
      secondSpan1: 'Make Payment'
    },
    {
      id: 6,
      secondSpan: '6',
      secondSpan1: 'Provide Address'
    },
    {
      id: 7,
      secondSpan: '7',
      secondSpan1: 'Order Tracking'
    },
    {
      id: 8,
      secondSpan: '8',
      secondSpan1: 'Provide Rating And Feedback'
    }
  ];

  adminHeading = "Admin Activity:"
  adminArray = [
    {
      id: 1,
      thirdSpan: '1',
      thirdSpan1: "Products Management"
    },
    {
      id: 2,
      thirdSpan: '2',
      thirdSpan1: 'Vendor Management'
    },
    {
      id: 3,
      thirdSpan: '3',
      thirdSpan1: 'Customer Management'
    },
    {
      id: 4,
      thirdSpan: '4',
      thirdSpan1: 'Order Management'
    },
    {
      id: 5,
      thirdSpan: '5',
      thirdSpan1: 'Report Management'
    },
    {
      id: 6,
      thirdSpan: '6',
      thirdSpan1: 'Sale Management'
    },
    {
      id: 7,
      thirdSpan: '7',
      thirdSpan1: 'Delivery Management'
    },
    {
      id: 8,
      thirdSpan: '8',
      thirdSpan1: 'Rating and Review Management'
    }
  ]

  whatWeDidMainImg = 'https://cbnits.s3.us-east-1.amazonaws.com/csEcomMain2.jpg';
  whatWeDidMainHeading = 'what we did for'
  whatWeDidMainSpan = 'the platform'
  whatweDidPlatformArray = [
    {
      id: 1,
      platformImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      platformSpan: 'Our entire designing team has built the entire HTML and CSS of the platform'
    },
    {
      id: 2,
      platformImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      platformSpan: 'We have made it responsive for all platforms and also created iOS and Android Apps.'
    },
    {
      id: 3,
      platformImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      platformSpan: 'Our development team has comprehensively implemented and developed the entire design concept.'
    }
  ]

  technologyHeading="technology";
  technologySpan="used"
  technologyStackArray = [
    {
      id: 1,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst1.png",
      techSpan: "HTML"
    },
    {
      id: 2,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst2.png",
      techSpan: "Bootstrap"
    },
    {
      id: 3,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst3.png",
      techSpan: "CSS"
    },
    {
      id: 4,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst4.png",
      techSpan: "React"
    },
    {
      id: 5,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst5.png",
      techSpan: "Node"
    },
    {
      id: 6,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst6.png",
      techSpan: "MySQL"
    },
    {
      id: 7,
      techImg: "https://cbnits.s3.us-east-1.amazonaws.com/cst7.png",
      techSpan: "AWS"
    }
  ]
  constructor(private titleService:Title, private service: EcommerceService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getHeaderData();
  }

   //fetch Banner languages data
   getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.eCommerceHeaderLanguageArray = result.data.reverse();
    })
  }

}
