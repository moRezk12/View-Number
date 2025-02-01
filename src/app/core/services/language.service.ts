import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // Default language is 'ar'
  // private currentLanguage = new BehaviorSubject<string>('ar');
  // public languageChanged = this.currentLanguage.asObservable();

  private currentLanguage = new BehaviorSubject<string>('ar');
  public languageChanged = this.currentLanguage.asObservable();


  constructor(private translate: TranslateService, private http: HttpClient) {
    const savedLang = localStorage.getItem('lang') || 'ar';
    // Load saved language or default
    this.changeLanguage(savedLang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLanguage.next(lang);
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction); 
    document.documentElement.setAttribute('lang', lang);
  }

  getLanguage() {
    return this.currentLanguage.asObservable();
  }
  getArData() {
    return this.http.get('https://morezk12.github.io/View-Number/assets/i18n/ar.json'); // Fetch Arabic language data
  }

  getEnData() {
    return this.http.get('https://morezk12.github.io/View-Number/assets/i18n/en.json'); // Fetch English language data
  }

}
