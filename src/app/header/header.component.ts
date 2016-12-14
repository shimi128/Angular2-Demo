import {Component, OnInit, Output} from '@angular/core';
import {HeaderService} from "./header.service";
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  private items: string[];
@Output() runSpin :EventEmitter<boolean> = new EventEmitter();
  constructor(private headerService: HeaderService) {
    this.items = [];
  }

  ngOnInit() {
    this.runSpin.emit(true);
    this.headerService.getItems().then((response) => {
      this.items = response;
      this.runSpin.emit(false);

    });
  }

}
