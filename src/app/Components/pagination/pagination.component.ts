import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemsPerPageChanged: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    const totalPages = this.totalPages;
    let startPage = this.currentPage - 2;
    let endPage = this.currentPage + 2;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(5, totalPages);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(totalPages - 4, 1);
    }

    const pagesArray = [];
    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  onPageChange(page: number): void {
    this.pageChanged.emit(page);
  }

  onItemsPerPageChange(value: number): void {
    this.itemsPerPageChanged.emit(value);
    this.currentPage = 1;
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }


}
