import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AccueilPage } from '../pages/accueil/accueil';
import { HeaderPage } from '../pages/header/header';
import { SearchareaPage } from '../pages/searcharea/searcharea';
import { SearchphpPage } from '../pages/searchphp/searchphp';
import { SearchjavaPage } from '../pages/searchjava/searchjava';
import { SearchcsharpPage } from '../pages/searchcsharp/searchcsharp';
import { JavaPage } from '../pages/java/java';
import { PhpPage } from '../pages/php/php';
import { CsharpPage } from '../pages/csharp/csharp';
import { SeecodePage } from '../pages/seecode/seecode';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HeaderPage,
    AccueilPage,
    SearchareaPage,
    JavaPage,
    PhpPage,
    CsharpPage,
    SearchjavaPage,
    SearchphpPage,
    SearchcsharpPage,
    SeecodePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HeaderPage,
    AccueilPage,
    SearchareaPage,
    JavaPage,
    PhpPage,
    CsharpPage,
    SearchjavaPage,
    SearchphpPage,
    SearchcsharpPage,
    SeecodePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
