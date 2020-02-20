import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appdashboard-bots-base',
  templateUrl: './bots-base.component.html',
  styleUrls: ['./bots-base.component.scss']
})
export class BotsBaseComponent implements OnInit {


  dialogflowLanguage = [
    { code: 'zh-cn', name: 'Chinese (Simplified) — zh-cn' },
    { code: 'zh-hk', name: 'Chinese (Hong Kong) — zh-hk' },
    { code: 'zh-tw', name: 'Chinese (Traditional) — zh-tw' },
    { code: 'da', name: 'Danish — da' },
    { code: 'nl', name: 'Dutch — nl' },
    { code: 'en', name: 'English — en' },
    { code: 'fr', name: 'French — fr' },
    { code: 'de', name: 'German — de' },
    { code: 'hi', name: 'Hindi — hi' },
    { code: 'id', name: 'Indonesian — id' },
    { code: 'it', name: 'Italian — it' },
    { code: 'ja', name: 'Japanese — ja' },
    { code: 'ko', name: 'Korean (South Korea) — ko' },
    { code: 'no', name: 'Norwegian — no' },
    { code: 'pl', name: 'Polish — pl' },
    { code: 'pt-br', name: 'Portuguese (Brazilian) — pt-br' },
    { code: 'pt', name: 'Portuguese (European) — pt' },
    { code: 'ru', name: 'Russian — ru' },
    { code: 'es', name: 'Spanish — es' },
    { code: 'sv', name: 'Swedish — sv' },
    { code: 'th', name: 'Thai — th' },
    { code: 'tr', name: 'Turkish — tr' },
    { code: 'uk', name: 'Ukrainian — uk' },
  ];


  constructor() { }

  ngOnInit() {
  }

  getIndexOfdialogflowLanguage(langcode: string) {
    const index = this.dialogflowLanguage.findIndex(x => x.code === langcode);

    return index
  }

}
