import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import {JSONPlaceholderService} from '../../services/jsonplaceholder.service'
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indexapi',
  templateUrl: './indexapi.component.html',
  imports: [DecimalPipe,NgFor,FormsModule,NgbPaginationModule,NgbTypeaheadModule],
  styleUrls: ['./indexapi.component.css']
})
export class IndexapiComponent implements OnInit {

  data: Array<any>
  page = 1;
  pageSize = 10;
  collectionSize = data.length;


  constructor(private JSONPlaceholder: JSONPlaceholderService){
    this.data = new Array<any>()
    this.refreshdata();
  }

  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) =>{
      console.log(data)
      this.data = data
    })
  }

  refreshdata(){
    this.data = data.map((data,i) => ({id: i, ...data})).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    )
  }

  ngOnInit(): void {
  }

}
