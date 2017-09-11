import { Component, OnInit, AfterViewInit } from '@angular/core';
import { I18nSupportService } from "../i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  welcomeMsg = "";
  userName = "";
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor(public i18nSuppoter: I18nSupportService) {
    
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSuppoter.getWelcomeMsgByCode(this.userName);
  }

  ngAfterViewInit() {
    const checkToutchedFn = () => {
      if(this.valid) return;

      alert('이름을 입력해 주세요');
    };

    setTimeout(checkToutchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  ngOnInit() {
  }

  setName(name) {
    this.userName = name;
  }

  onKeyUp(name) {
    this.valid = name.length > 0;
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }

}
