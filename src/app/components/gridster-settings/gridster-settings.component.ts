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


  settings: {
    key: string, componentKey: string, label: string, placeholder?: string,
    value?: number | string, options?: any[], type?: string, validators?: any[],
  }[] =
    [
      {
        key: 'fixedColWidth', componentKey: 'input', label: 'Cell Size (30-60)',
        placeholder: 'Cell Size (30-60)', type: 'number',
        validators: [
          this.cellSizeValidator
        ]
      },
      {
        key: 'bgColor', componentKey: 'input', label: 'BG color',
        placeholder: 'Color', type: 'color'
      },

    ];


  gridsterOptoins: GridsterConfig;
  gridsterOptoinsForm: FormGroup;

  constructor(
    private srService: ShiftReportingService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.srService.gridsterOptions.subscribe(value => {
      this.gridsterOptoins = value;
    });
    this.formInit();
    this.gridsterOptoinsForm = this.formInit();
    // console.log(this.gridsterOptoinsForm);
    
    this.gridsterOptoinsForm.valueChanges.subscribe(value => {
      console.log(value);

      if (this.gridsterOptoinsForm.status === 'VALID') {
        // console.log('valid');
        // console.log(this.updateGridsterOptions());


        this.srService.updateGridsterOptions(this.updateGridsterOptions());
      }
    });
  }

  formInit(): FormGroup {
    const group: FormGroup = this.fb.group({});
    this.settings.map((item, id) => {
      this.settings[id].value = this.gridsterOptoins[item.key];
      group.addControl(item.key, this.fb.control(this.gridsterOptoins[item.key], item.validators));
    });
    // console.log(group);
    
    return group;
  }


  // formInit() {
  //   this.gridsterOptoinsForm = this.fb.group({
  //     cellSize: [this.gridsterOptoins.fixedColWidth, this.cellSizeValidator],
  //     bgColor: this.gridsterOptoins.bgColor,
  //   });
  // }
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
      fixedColWidth: +this.gridsterOptoinsForm.value.fixedColWidth,
      fixedRowHeight: +this.gridsterOptoinsForm.value.fixedColWidth
    };
    return Object.assign(this.gridsterOptoins, res);
  }

}
