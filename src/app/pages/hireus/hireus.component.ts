import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HireusService } from './hireus.service';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/url.constant';
import { countries } from './country-data-store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-hireus',
  templateUrl: './hireus.component.html',
  styleUrls: ['./hireus.component.css'],
})
export class HireusComponent implements OnInit {
  backgroundHireUsImage =
    'https://www.cbnits.com/ef11a033e0c48b2ef381bbee5d39370f.jpg';
  headerHireUsTitle = 'Hire';
  headerHireUsSpan = 'Us';
  headerHireUsParaOne =
    'CBNITS aims to provide the best-in-class remote hiring options of';
  headerHireUsParaTwo = 'skilled resources';
  headerHireUsLanguageArray: any = [];
  fixedProcess: any = [];
  public hireUs!: FormGroup;
  public countries: any = countries;

  languageArray = [
    {
      id: 1,
      name: 'Ui/Ux',
    },
    {
      id: 2,
      name: 'DevOps / Cloud DevOps',
    },
    {
      id: 3,
      name: 'Hadoop & Data Science',
    },
    {
      id: 4,
      name: 'Python And Java Development',
    },
    {
      id: 5,
      name: ' Backend Development',
    },
    {
      id: 6,
      name: 'Cloud Development',
    },
    {
      id: 7,
      name: 'IOT(Internet Of Things)',
    },
    {
      id: 8,
      name: 'Microsoft Dynamics 365',
    },
    {
      id: 9,
      name: 'Dedicated Full-Stack Development',
    },
    {
      id: 10,
      name: 'Maintenance & Support',
    },
    {
      id: 11,
      name: 'Cyber Security',
    },
    {
      id: 12,
      name: 'Blockchain Technology',
    },
    {
      id: 13,
      name: 'Web Development',
    },
    {
      id: 14,
      name: 'React & Angular Development',
    },
    {
      id: 15,
      name: 'Quality Engineering',
    },
    {
      id: 16,
      name: 'Machine Learning',
    },
    {
      id: 17,
      name: 'Mobile Application Development',
    },
    {
      id: 18,
      name: 'Application Development',
    },
    {
      id: 19,
      name: 'SAP',
    },
    {
      id: 20,
      name: 'Network Operation Center',
    },
    {
      id: 21,
      name: 'Metaverse',
    },
    {
      id: 22,
      name: 'Sitecore Ordercloud',
    },
  ];

  constructor(
    private titleService: Title,
    private service: HireusService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getFixedBasisHiringData();
    this.getHeaderData();

    this.hireUs = this.formBuilder.group({
      language: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z].*$'),
      ]),
      country: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      type: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
    });
  }

  get fullName() {
    return this.hireUs.get('fullName');
  }
  get language() {
    return this.hireUs.get('language');
  }
  get contactNo() {
    return this.hireUs.get('contactNo');
  }
  get country() {
    return this.hireUs.get('country');
  }
  get email() {
    return this.hireUs.get('email');
  }
  get note() {
    return this.hireUs.get('note');
  }
  get type() {
    return this.hireUs.get('type');
  }

  //Fixed-Basis Hiring fetching Api
  getFixedBasisHiringData() {
    this.service.getFixedBasisHiring().subscribe((result: any) => {
      this.fixedProcess = result.data;
      console.log('Fixed Basis Horing Process Array=>', this.fixedProcess);
    });
  }

  // hire us Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerHireUsLanguageArray = result.data.reverse();
    });
  }
  //validation function
  validate() {
    if (this.hireUs.value.fullName == '') {
      alert("Name can't be empty. Please Enter your name");
      return false;
    } else if (!/^[A-Z].*$/.test(this.hireUs.value.fullName)) {
      alert(
        "Name can't contain special characters. Please use only characters(A-Z) and first letter should be capital only."
      );
      return false;
    } else if (this.hireUs.value.country == '') {
      alert('Please select your country');
      return false;
    } else if (
      this.hireUs.value.contactNo.length == 0 ||
      this.hireUs.value.contactNo.length > 10
    ) {
      alert(
        'Contact number cannot be empty or exceed 20 digits. Please enter a valid number.'
      );
      return false;
    } else if (!this.hireUs.value.email.match(/\S+@\S+\.\S+/)) {
      alert('Please use the correct email format. e.g: john.doe@domain.com');
      return false;
    } else if (this.hireUs.value.type == '') {
      alert('Please select your preferred type of hiring');
      return false;
    } else if (this.hireUs.value.language == '') {
      alert('Please select please choose at least one topic');
      return false;
    } else if (this.hireUs.value.note.length == 0) {
      alert("Note can't be empty. Please Enter your note");
      return false;
    } else {
      return true;
    }
  }

  //hire us function for submitting data in database
  hire() {
    if (this.validate() == true) {
      this.http.post<any>(url + 'hire-usMail', this.hireUs.value).subscribe(
        (result) => {
          alert('Data Submit Successfully');
          console.log('data=>' + result);
          this.hireUs.reset();
        },
        (error) => {
          alert('Something Went Wrong');
          console.log('error=>' + error);
        }
      );
    } else {
      //this.validate();
    }
  }
}
