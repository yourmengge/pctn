import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { HistoryComponent } from './history/history.component';
import { HoldComponent } from './hold/hold.component';
import { SuccessComponent } from './success/success.component';
import { AppointComponent } from './appoint/appoint.component';
import { ToFixPipe } from './to-fix.pipe';
import { NumberInputDirective } from './number-input.directive';
import { NumIntPipe } from './num-int.pipe';
import { Round4Pipe } from './round4.pipe';
import { ChartComponent } from './chart/chart.component';
import { ChedanComponent } from './chedan/chedan.component';
import { TodayappointComponent } from './todayappoint/todayappoint.component';
import { TodaydealComponent } from './todaydeal/todaydeal.component';
import { HistorydealComponent } from './historydeal/historydeal.component';
import { CapitalflowComponent } from './capitalflow/capitalflow.component';

registerLocaleData(zh);

const buyChildRoutes: Routes = [
  { path: 'hold', component: HoldComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'appoint', component: AppointComponent },
  { path: '', redirectTo: 'hold', pathMatch: 'full' }
];


const appChildRoutes: Routes = [
  { path: 'capitalflow', component: CapitalflowComponent },
  { path: 'hold', component: HoldComponent },
  { path: 'lastpricesell', component: BuyComponent, children: buyChildRoutes },
  { path: 'sell', component: BuyComponent, children: buyChildRoutes },
  { path: 'chedan', component: ChedanComponent },
  { path: 'historydeal', component: HistoryComponent },
  { path: 'bill', component: HistoryComponent },
  { path: 'todaydeal', component: SuccessComponent },
  { path: 'todayappoint', component: AppointComponent },
  { path: 'lastpricebuy', component: BuyComponent, children: buyChildRoutes },
  { path: 'buy', component: BuyComponent, children: buyChildRoutes },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: 'buy', pathMatch: 'full' }
];

const appRoutes: Routes = [
  { path: 'main', component: MainComponent, children: appChildRoutes },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    BuyComponent,
    HistoryComponent,
    HoldComponent,
    SuccessComponent,
    AppointComponent,
    ToFixPipe,
    NumberInputDirective,
    NumIntPipe,
    Round4Pipe,
    ChartComponent,
    ChedanComponent,
    TodayappointComponent,
    TodaydealComponent,
    HistorydealComponent,
    CapitalflowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true }),
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
