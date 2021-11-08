import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authProject';
  supportLanguages = ['hy', 'en', 'ru'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');

    const browserlang = this.translateService.getBrowserLang();
    this.translateService.use(browserlang);
  }

  selectLanguage(lang: any) {
    this.translateService.use(lang.target.value);
  }
}
