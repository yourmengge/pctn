import { Component, OnInit } from '@angular/core';
import { GetList } from '../get-list';
import { UtilService } from '../util.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-capitalflow',
  templateUrl: './capitalflow.component.html',
  styleUrls: ['./capitalflow.component.css']
})
export class CapitalflowComponent extends GetList {
  dateRange: any;
  startDate: any;
  endDate: any;
  constructor(public util: UtilService, public http: HttpService) {
    super(util, http);
    this.dateRange = [new Date(this.beforeMonth()), new Date()];
    this.url = 'tntg/fundStream/list';
    this.postData = {
      accountCode: this.util.getSession('userName'),
      createTimeStart: this.util.getTime('yyyy-MM-dd', this.dateRange[0]),
      createTimeEnd: this.util.getTime('yyyy-MM-dd', this.dateRange[1])
    };
    // this.exportName = '持仓列表';
    // this.exportUrl = 'tntg/hold/export';
    // this.exportData = {};
  }

  beforeMonth() {
    return (new Date().getTime() - 2592000000);
  }

  onChange(e) {
    if (e.length === 0) {
      this.dateRange = [new Date(this.beforeMonth()), new Date()];
    } else {
      this.dateRange = e;
    }
    this.postData = {
      accountCode: this.util.getSession('userName'),
      createTimeStart: this.util.getTime('yyyy-MM-dd', this.dateRange[0]),
      createTimeEnd: this.util.getTime('yyyy-MM-dd', this.dateRange[1])
    };
    this.getList();
    console.log(this.postData);
  }

  afterGetList() {
    this.list = this.list['resultInfo'];
  }
}
