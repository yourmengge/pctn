import { Component, DoCheck } from '@angular/core';
import { UtilService } from './util.service';
import { HttpService } from './http.service';
import * as SockJS from 'sockjs-client';
import { over } from '@stomp/stompjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'pctg';
  stompClient: any;
  isConnect = false;
  socket: any;
  constructor(public data: UtilService, public http: HttpService) {

  }
  /**
 * 取消订阅
 */
  cancelSubscribe() {
    this.http.cancelSubscribe().subscribe((res) => {
      console.log('取消订阅');
    });
  }
  /**
      * 断开连接
      */
  disconnect() {
    this.stompClient.disconnect((() => {
      console.log('断开链接');
    }));
  }
  /**
   * 连接ws
   */
  connect() {
    console.log('发起ws请求');
    this.socket = new SockJS(this.http.ws);
    this.stompClient = over(this.socket);
    this.disconnect();
    const that = this;
    const headers = { token: this.data.getTokenP() };
    that.stompClient.connect(headers, function (frame) {
      console.log('连接成功');
      that.connectWs();
    }, function (err) {
      console.log('连接失败');
      that.connect();
    });
    that.socket.onclose = function () {
      console.log('断开了');
      that.disconnect();
      setTimeout(() => {
        that.socket = new SockJS(that.http.ws);
        that.stompClient = over(that.socket);
        that.stompClient.connect(headers, function (frame) {
          console.log('连接成功');
          that.connectWs();
        }, function (err) {
          console.log('连接失败');
          that.connect();
        });
      }, 10000);
    };
  }

  connectWs() {
    const that = this;
    that.stompClient.subscribe('/user/' + that.data.getTokenP() + '/topic/market', function (res) {
      const data = JSON.parse(res.body);
      if (that.data.searchStockCode === data.stockCode || that.data.getSession('optionCode') === data.stockCode) {
        that.data.stockHQ = data;
      }
    }, function (err) {
      console.log(err);
    });
    if (!that.data.isNull(that.data.searchStockCode)) {
      if (that.data.getUrl(1) === 'chart') {
        that.http.getGPHQ(that.data.searchStockCode).subscribe(() => {
        });
      } else if (that.data.getUrl(3) === 'buy' || that.data.getUrl(3) === 'sell') {
        that.http.getGPHQ2(that.data.searchStockCode).subscribe(() => {
        });
      }
    }
  }
  ngDoCheck() {
    if (!this.data.isNull(this.data.getToken())) {
      if (!this.isConnect) {
        this.connect();
        this.isConnect = !this.isConnect;
      }
    } else {
      if (this.isConnect) {
        this.isConnect = !this.isConnect;
        this.disconnect();
      }

    }
  }
}
