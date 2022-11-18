import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch:'full',
    loadChildren: () => import('./pages/homepage/homepage.module').then((m)=>m.HomepageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutpage/aboutpage.module').then((m)=>m.AboutpageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contactpage/contactpage.module').then((m)=>m.ContactpageModule)
  },
  {
    path: 'hireus',
    loadChildren: () => import('./pages/hireus/hireus.module').then((m)=>m. HireusModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then((m)=>m.NewsModule )
  },
  {
    path: 'news/article/634939eaed0a6b4574b302aa',
    loadChildren: () => import('./pages/global-radiance/global-radiance.module').then((m)=>m.GlobalRadianceModule)
  },
  {
    path: 'news/article/62fb9272ed0a6b4574b3021a',
    loadChildren: () => import('./pages/startup-kolkata/startup-kolkata.module').then((m)=>m.StartupKolkataModule )
  },
  {
    path: 'news/article/62f24cb9ed0a6b4574b301f2',
    loadChildren: () => import('./pages/financial-tech/financial-tech.module').then((m)=>m.FinancialTechModule )
  },
  {
    path: 'news/article/62f24974ed0a6b4574b301f1',
    loadChildren: () => import('./pages/cbnits/cbnits.module').then((m)=>m.CbnitsModule )
  },
  {
    path: 'news/article/6034eeab0a186d1d204b97d2',
    loadChildren: () => import('./pages/home-connected/home-connected.module').then((m)=>m.HomeConnectedModule )
  },
  {
    path: 'news/article/6017a6ff8a878f75b673a043',
    loadChildren: () => import('./pages/impact-pandemic/impact-pandemic.module').then((m)=>m.ImpactPandemicModule )
  },
  {
    path: 'news/article/5fd7575ec3237723a46f659c',
    loadChildren: () => import('./pages/booming-industry/booming-industry.module').then((m)=>m.BoomingIndustryModule )
  },
  {
    path: 'news/article/5fd75698c3237723a46f659b',
    loadChildren: () => import('./pages/cyber-security/cyber-security.module').then((m)=>m.CyberSecurityModule )
  },
  {
    path: 'press-release',
    loadChildren: () => import('./pages/press-release/press-release.module').then((m)=>m.PressReleaseModule )
  },
  {
    path: 'press-release/article/63492ce5ed0a6b4574b302a9',
    loadChildren: () => import('./pages/poonam-bachkhedi/poonam-bachkhedi.module').then((m)=>m.PoonamBachkhediModule )
  },
  {
    path: 'press-release/article/62f3ab6aed0a6b4574b30203',
    loadChildren: () => import('./pages/cbnits-bronze/cbnits-bronze.module').then((m)=>m.CbnitsBronzeModule )
  },
  {
    path: 'press-release/article/62f3aa81ed0a6b4574b30202',
    loadChildren: () => import('./pages/big-innovation/big-innovation.module').then((m)=>m.BigInnovationModule )
  },
   {
     path: 'press-release/article/62f3a963ed0a6b4574b30201',
     loadChildren: () => import('./pages/great-place/great-place.module').then((m)=>m.GreatPlaceModule )
   },
   {
     path: 'press-release/article/62f39fb6ed0a6b4574b30200',
     loadChildren: () => import('./pages/cbnits-leadership/cbnits-leadership.module').then((m)=>m.CbnitsLeadershipModule )
   },
  {
    path: 'press-release/article/62f25b43ed0a6b4574b301f3',
    loadChildren: () => import('./pages/cbnits-culture/cbnits-culture.module').then((m)=>m.CbnitsCultureModule )
  },
  {
    path: 'press-release/article/60a287f72fc92d3201e4aab8',
    loadChildren: () => import('./pages/cbnits-growing/cbnits-growing.module').then((m)=>m.CbnitsGrowingModule )
  },
  {
    path: 'press-release/article/5ff4566b46e3802ff428afd4',
    loadChildren: () => import('./pages/meri-christmas/meri-christmas.module').then((m)=>m.MeriChristmasModule )
  },

  {
    path: 'angular',
    loadChildren: () => import('./pages/angular/angular.module').then((m)=>m. AngularModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./pages/react/react.module').then((m)=>m. ReactModule)
  },
  {
    path: 'full-stack',
    loadChildren: () => import('./pages/fullstack/fullstack.module').then((m)=>m.FullstackModule )
  },
  {
    path: 'node',
    loadChildren: () => import('./pages/node/node.module').then((m)=>m.NodeModule )
  },
  {
    path: 'golang',
    loadChildren: () => import('./pages/golang/golang.module').then((m)=>m.GolangModule )
  },
  {
    path: 'ui-ux',
    loadChildren: () => import('./pages/uiux/uiux.module').then((m)=>m.UiuxModule )
  },
  {
    path: 'blockchain',
    loadChildren: () => import('./pages/blockchain/blockchain.module').then((m)=>m.BlockchainModule )
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacypolicy/privacypolicy.module').then((m)=>m.PrivacypolicyModule )
  },
  {
    path: 'hadoop',
    loadChildren: () => import('./pages/hadoop/hadoop.module').then((m)=>m.HadoopModule )
  },
  {
    path: 'dynamic-365',
    loadChildren: () => import('./pages/dynamic365/dynamic365.module').then((m)=>m.Dynamic365Module )
  },
  {
    path: 'mobileApp',
    loadChildren: () => import('./pages/mobileapp/mobileapp.module').then((m)=>m.MobileappModule )
  },
  {
    path: 'sap',
    loadChildren: () => import('./pages/sap/sap.module').then((m)=>m.SapModule )
  },
  {
    path: 'cloud-development',
    loadChildren: () => import('./pages/cloud-development/cloud-development.module').then((m)=>m.CloudDevelopmentModule )
  },
  {
    path: 'cloud-devops',
    loadChildren: () => import('./pages/clouddevops/clouddevops.module').then((m)=>m.ClouddevopsModule )
  },
  {
    path: 'quality-engineering',
    loadChildren: () => import('./pages/quality-engineering/quality-engineering.module').then((m)=>m.QualityEngineeringModule )
  },
  {
    path: 'software-support',
    loadChildren: () => import('./pages/software-support/software-support.module').then((m)=>m.SoftwareSupportModule )
  },
  {
    path: 'cs-Health',
    loadChildren: () => import('./pages/healthcare/healthcare.module').then((m)=>m.HealthcareModule)
  },
  {
    path: 'cs-i-two-chain',
    loadChildren: () => import('./pages/security/security.module').then((m)=>m.SecurityModule)
  },
  {
    path: 'cs-ed-tech',
    loadChildren: () => import('./pages/ed-tech/ed-tech.module').then((m)=>m.EdTechModule)
  },
  {
    path: 'cs-hr-tech',
    loadChildren: () => import('./pages/hr-tech/hr-tech.module').then((m)=>m.HrTechModule)
  },
  {
    path: 'cs-ecommerce',
    loadChildren: () => import('./pages/ecommerce/ecommerce.module').then((m)=>m.EcommerceModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./pages/career/career.module').then((m)=>m.CareerModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
