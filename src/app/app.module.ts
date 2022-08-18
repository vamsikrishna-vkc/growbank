import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserDetailsComponent,
    AdminComponent,
    SavingAccountComponent,
    LogoutComponent,
    AccountComponent,
    AddBeneficiaryComponent,
    IMPSComponent,
    NeftTransactionComponent,
    RTGSTransactionComponent,
    
    ImpddisplayComponent,
         AdmindashbordComponent,
         TransactionDetailsComponent,
         StatuspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
