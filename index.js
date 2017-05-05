'use strict';

import { Timer } from "./Timer";

let timer1 = new Timer(5);
timer1.start().then(x=>document.title=x); 