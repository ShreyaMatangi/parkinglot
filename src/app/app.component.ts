import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parking lot';
  vehicles = ['two wheeler', 'hatchback' , 'suv'];
  vehicleName
  Timeslot = ['0-2','2-4'];
  duration

  amounts = [ 20 , 40];
  amount


  availablelotsTwoWheeler = 10;
  availablelotsHb = 5;
  availablelotsSuv = 3;

  twoWheeler = false;
  hb = false;
  suv = false;

  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  ParkingLot = this.fb.group({
    vehicleName: ['', Validators.required],
    duration : ['',Validators.required],
    amount: [Validators.required]
  })

  onSubmit() {
  
    if (this.ParkingLot.invalid) {
      alert("Form invalid")
      return;
  }
    if((this.ParkingLot.value.vehicleName) == "two wheeler") {
        if(this.availablelotsTwoWheeler == 0)
        {
          alert("Zero Slots available")
          return;
        }
        else {
          this.availablelotsTwoWheeler--;
        }
    }
    else if((this.ParkingLot.value.vehicleName) == "hatchback") {
      if(this.availablelotsHb == 0)
      {
        alert("Zero Slots available")
        return;
      }
      else {
        this.availablelotsHb--;
      }
  }
  else if((this.ParkingLot.value.vehicleName) == "suv") {
    if(this.availablelotsSuv == 0)
    {
      alert("Zero Slots available")
      return;
    }
    else {
      this.availablelotsSuv--;
    }
}

    alert(JSON.stringify(this.ParkingLot.value))
  }

  changeVehicle(e) {
    if(e.target.value == "1: two wheeler") {
      this.twoWheeler = true;
      this.hb = false;
      this.suv = false;
    }
    else if(e.target.value == "2: hatchback") {
      this.hb = true;
      this.twoWheeler = false;
      this.suv = false;
    }
    else if(e.target.value == "3: suv") {
      this.suv = true;
      this.hb = false;
      this.twoWheeler = false;
    }
    this.vehicleName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeSlot(e) {
    this.duration.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeAmount(e) {
    this.amount.setValue(e.target.value, {
      onlySelf: true
    })
  }

}
