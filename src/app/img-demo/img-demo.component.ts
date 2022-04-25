import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-demo',
  templateUrl: './img-demo.component.html',
  styleUrls: ['./img-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgDemoComponent implements OnInit {

  bigImg = 'https://pic2.zhimg.com/v2-77be54b348b0168f3562f51404451aeb_r.jpg';

  loadingImg = './assets/loading.svg'

  errImg = './assets/picture.svg';

  constructor() { }

  ngOnInit() {
  }

}
