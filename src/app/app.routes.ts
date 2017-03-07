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

export const APP_ROUTES = [
  {path: '', component: AccueilPage},
  {path: 'seecode', component: SeecodePage },
  {path: 'java', component: JavaPage},
  {path: 'csharp', component: CsharpPage},
  {path: 'php', component: PhpPage}
];
