import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';
import { HeaderPage } from '../header/header';
import { SearchareaPage } from '../searcharea/searcharea';
import { SearchphpPage } from '../searchphp/searchphp';
import { SearchjavaPage } from '../searchjava/searchjava';
import { SearchcsharpPage } from '../searchcsharp/searchcsharp';
import { JavaPage } from '../java/java';
import { PhpPage } from '../php/php';
import { CsharpPage } from '../csharp/csharp';
import { SeecodePage } from '../seecode/seecode';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AccueilPage;
  tab2Root: any = HeaderPage;
  tab3Root: any = SearchareaPage;
  tab4Root: any = JavaPage;
  tab5Root: any = PhpPage;
  tab6Root: any = CsharpPage;
  tab7Root: any = SearchjavaPage;
  tab8Root: any = SearchphpPage;
  tab9Root: any = SearchcsharpPage;
  tab10Root: any = SeecodePage;
  constructor() {

  }
}
