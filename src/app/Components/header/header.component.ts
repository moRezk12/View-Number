import { Component, Output, Renderer2 ,EventEmitter} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  currentLang: string = 'ar';

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
    private translate: TranslateService
  ) {

    this.languageService.getLanguage().subscribe(lang => {
      this.currentLang = lang;
      this.setLangAttribute(lang);
    });
  }


  setLangAttribute(lang: string) {
    this.renderer.setAttribute(document.body, 'lang', lang);
  }


  changeLanguage(lang: string) {

    this.translate.use(lang);
    this.languageService.changeLanguage(lang);


    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);
  }

  // Close Model
  @Output() closeModel: EventEmitter<boolean> = new EventEmitter<boolean>();

  // دالة لإغلاق الموديل
  closeModels() {
    this.closeModel.emit(false);  // إرسال false لإغلاق الموديل
  }

}
