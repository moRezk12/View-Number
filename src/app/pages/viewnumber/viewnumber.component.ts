import { Component, ElementRef, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-viewnumber',
  templateUrl: './viewnumber.component.html',
  styleUrls: ['./viewnumber.component.css']
})
export class ViewnumberComponent {

  openmodel: boolean = false;

  constructor(private eRef: ElementRef ,
    private languageService: LanguageService
  ) {}


  currentLang: string = 'ar';

  tableData: any[] = [];
  ngOnInit(): void {

    AOS.init({

    });


    this.loadsectionData(this.currentLang);

    this.languageService.languageChanged.subscribe((lang: string) => {
      this.changeLang(lang);
    });
  }

  changeLang(lang: string): void {
    sessionStorage.setItem('lang', lang); // تحديث اللغة في localStorage
    this.currentLang = lang;

    this.loadsectionData(lang);
  }

  loadsectionData(lang: string): void {
    if (lang === 'ar') {
      this.languageService.getArData().subscribe((data: any) => {
        this.tableData = data.table.tableData;
      });
    } else {
      this.languageService.getEnData().subscribe((data: any) => {
        this.tableData = data.table.tableData;
      });
    }
  }

  openModel(event: Event) {
    event.stopPropagation();
    this.openmodel = true;
    setTimeout(() => {
      AOS.refresh(); // تحديث AOS بعد فتح المودال
    }, 1000);
  }

  closeModel() {
    this.openmodel = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.openmodel) {
      const modalContent = this.eRef.nativeElement.querySelector('.modal-content');
      if (modalContent && !modalContent.contains(event.target)) {
        this.closeModel();
      }
    }
  }

  handleCloseModel(value: boolean) {
    this.openmodel = value;
    this.closeModel();
  }

}
