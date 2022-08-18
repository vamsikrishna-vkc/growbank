import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminComponent } from './admin/admin.component';
import { SavingAccountComponent } from './saving-account/saving-account.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { IMPSComponent } from './imps/imps.component';
import { NeftTransactionComponent } from './neft-transaction/neft-transaction.component';
import { RTGSTransactionComponent } from './rtgstransaction/rtgstransaction.component';

import { ImpddisplayComponent } from './impddisplay/impddisplay.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { StatuspageComponent } from './statuspage/statuspage.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'udetails',component:UserDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'save-account',component:SavingAccountComponent},
  {path:'logout',component:LogoutComponent},
  {path: 'account',component:AccountComponent},
  {path:'addbn',component:AddBeneficiaryComponent},
  {path:'imps',component:IMPSComponent},
  {path:'neft',component:NeftTransactionComponent},
  {path:'rtgs',component:RTGSTransactionComponent},
 {path:'admindashbord',component:AdmindashbordComponent},
  {path:'impsdisplay',component:ImpddisplayComponent},
  {path: 'transaction-details',component: TransactionDetailsComponent },
  {path: 'statuspage', component:StatuspageComponent},
  {path:'faq',component:FaqComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
