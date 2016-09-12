import { Component } from '@angular/core';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html'
})
export class AppComponent {

  private now = new Date();
  private maxDate = this.now;
  private startDate = new Date(this.now.getFullYear() - 1, this.now.getMonth(), this.now.getDate())
  private startDateFormated = this.formatDate(this.startDate);
  private endDate = this.now;
  private endDateFormated = this.formatDate(this.endDate);
  private datePickerVisibility = [false, false];

  dateSelect(index: any){
    this.startDateFormated = this.formatDate(this.startDate);
    this.endDateFormated = this.formatDate(this.endDate);
    this.datePickerVisibility[index] = false;
  }

  showDatePicker(index: any){
     this.datePickerVisibility[index] = true;
  }

  closeDatePicker(index: any, event: any){
    if(event.target.id.indexOf('datepicker') > -1 || event.target.id == 'undefined-title'){
      return false;
    }
    if(this.datePickerVisibility[index] == true){
      this.datePickerVisibility[index] = false;
    }
  }

  formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    return year + "-" + month + "-" + day;
  }

 }
