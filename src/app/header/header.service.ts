import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService{
items:string[];
  constructor() {

    this.items=['1','2','3','4','5','6','7']
  }


  getItems():Promise<string[]>{
    let p = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.items);
      },2000);
    });


    return p;
  }
}
