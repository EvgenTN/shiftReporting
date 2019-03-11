import { Component, OnInit } from '@angular/core';
import { ShiftReportingService } from 'src/app/shift-reporting.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { GridsterConfig } from 'angular-gridster2';

@Component({
  selector: 'app-gridster-settings',
  templateUrl: './gridster-settings.component.html',
  styleUrls: ['./gridster-settings.component.scss']
})
export class GridsterSettingsComponent implements OnInit {

  gridsterOptoins: GridsterConfig;
  gridsterOptoinsForm: FormGroup;

  constructor(
    private srService: ShiftReportingService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.srService.gridsterOptions.subscribe(value => {
      console.log(value);
      this.gridsterOptoins = value;
    });
    // this.gridsterOptoins = this.srs.getGridsterOptions.s\;
    // console.log(this.gridsterOptoins);
    this.formInit();
    this.gridsterOptoinsForm.valueChanges.subscribe(value => {
      console.log(value);
      if (this.gridsterOptoinsForm.status === 'VALID') {
        this.srService.updateGridsterOptions(this.updateGridsterOptions());
      }
    });
  }

  formInit() {
    this.gridsterOptoinsForm = this.fb.group({
      cellSize: [this.gridsterOptoins.fixedColWidth, this.cellSizeValidator],
      bgColor: this.gridsterOptoins.bgColor,
    });
  }
  // formFill() {
  //   this.gridsterOptoinsForm({})
  // }
  cellSizeValidator(control: FormControl) {
    if (control.value < 30 || control.value > 60) {
      return { 'cellSize': true };
    }
    return null;
  }
  updateGridsterOptions(): GridsterConfig {
    const res = {
      bgColor: this.gridsterOptoinsForm.value.bgColor,
      fixedColWidth: this.gridsterOptoinsForm.value.cellSize,
      fixedRowHeight: this.gridsterOptoinsForm.value.cellSize
    };
    return Object.assign(this.gridsterOptoins, res);
  }

}
