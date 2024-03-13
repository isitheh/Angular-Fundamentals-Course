import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [ FormsModule, NgFor ],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css',
  providers: [ RecordsService, NgForm ]
})
export class EmpInfoComponent implements OnInit {
  /**
   * Inject the RecordsService into the EmpInfoComponent
   * @param recordsService will help expose data from the employee details.
   */
  constructor(private recordsService: RecordsService) {}

  info1Rx: string[] = [];
  info2Rx: string[] = [];
  info3Rx: string[] = [];

  ngOnInit(): void {
    console.log("Make the linter happy.");
  }

  getInfoFromServiceClass1() {
    this.info1Rx = this.recordsService.getInfo1();
  }

  getInfoFromServiceClass2() {
    this.info2Rx = this.recordsService.getInfo2();
  }

  getInfoFromServiceClass3() {
    this.info3Rx = this.recordsService.getInfo3();
  }

  updateInfo(frm: any) {
    this.recordsService.addInfo(frm.value.location);
  }
}
