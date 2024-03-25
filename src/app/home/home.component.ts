import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data: any;

  options: any;
     
  value:number[]=[];
  boxI:number=0;
  boxII:number = 0;
  @ViewChild('myForm') myForm : any;
  OnBoxI(e:any) :void{
      
    if(e.name === 'boxI'){
      if(parseInt(e.value) > 99){
        this.boxI = parseInt(e.value);
      }else{
      console.log('boxI')
      this.boxII = parseInt('100') - parseInt(e.value);
      this.boxI = parseInt(e.value);
      }
    }else{
      if(parseInt(e.value) > 99){
        this.boxII = parseInt(e.value);
      }else{
        console.log('boxII')
        this.boxI = parseInt('100') - parseInt(e.value);
        this.boxII = parseInt(e.value);
      }
     
    }
       this.value.splice(0,2)
 
    console.log(e)
    
  }

  onChart(e:any){
    console.log(e.value)
   
    this.value.push(this.boxI, this.boxII)
     console.log(this.boxI, typeof this.boxI)
     
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
        labels: ['Box 1', 'Box 2'],
        datasets: [
            {
                data: this.value,
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };


    this.options = {
        cutout: '60%',
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        }
    };

    // this.myForm.resetForm()
  }

}