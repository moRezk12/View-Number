import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private languageService: LanguageService) {}

  tableColumns = [
    'table.client',
    'table.assignment_date',
    'table.deletion_date',
    'table.assigned_by',
    'table.local_minutes',
    'table.international_minutes',
    'table.amount'
  ];


  @Input() tableData: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get pagedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.tableData.slice(start, end);
  }

  onPageChange(page: number) {
    if (page > 0 && page <= Math.ceil(this.tableData.length / this.itemsPerPage)) {
      this.currentPage = page;
    }
  }


  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }


}
