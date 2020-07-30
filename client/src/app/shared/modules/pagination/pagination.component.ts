import { UtilsService } from './../../../modules/heroes/services/utils.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('total') totalProps: number
  @Input('currentPage') currentPageProps: number
  @Input('url') urlProps: String
  @Input('limit') limitProps: number

  constructor(private utilsService: UtilsService) { }

  pagesCount: number
  pages: number[]

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }

}
