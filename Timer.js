'use strict';

export class Timer {

  constructor(secs) {
    this.secs = secs;
  }

  start() {
      let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                // переведёт промис в состояние fulfilled с результатом "result"
                resolve(1000*this.secs);
            }, 1000*this.secs);
            
        });
    
    return promise;
  }

}