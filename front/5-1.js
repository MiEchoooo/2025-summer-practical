//同步任务1
console.log('1');

//宏任务1
setTimeout(() =>{
  console.log('2');
  new Promise(resolve => {
    console.log('3');
    resolve();
  })
  .then(() => {
    console.log('4');
  })
}, 0);

new Promise((resolve) => {
  //同步任务2
  console.log('5');
  resolve();
})
.then(() => {
  //微任务1 输出56
  console.log('6');
  return new Promise(resolve => {
    console.log('7');
    resolve();
  })
  //return了一个Promise，需要等整个Promise结束后再执行
  //链式循环，属于内层的一个微任务
  //当输出6 7后 成为进入微任务队列
  //成为微任务3
  .then(() => {
    console.log('8');
  });
})
//输出8后，成为微任务5
.then(() => {
  console.log('9');
});

Promise.resolve().then(() => {
  //微任务2 ： 在第一遍主线程同步阶段就已经进入任务队列
  console.log('10');
  //微任务2执行之后进入宏任务队列
  //成为宏任务3
  setTimeout(() => {
    console.log('11');
  }, 0);
  //输出10后 成为微任务4
  Promise.resolve().then(() => {
    console.log('12');
  });
});

//同步任务3
console.log('13');

//宏任务2
setTimeout(() => {
  console.log('14');
}, 0);

//同步任务4
console.log('15');

/* 
  首先执行所有同步任务 ： 输出 1 5 13 15
  执行微任务：
     微任务1 ： 输出 6 7
     微任务2 ： 输出 10
     微任务3 ： 输出 8
     微任务4 ： 输出 12
     微任务5 ： 输出 9
  执行宏任务：
     宏任务1 ： 输出 2 3 4
     宏任务2 ： 输出 14
     宏任务3 ： 输出 11
*/