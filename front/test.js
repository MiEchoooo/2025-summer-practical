const obj = {
 name: 'Charlie',
 say: function () {
 const inner = {
 name: 'Inner',
 arrow: () => {
 console.log('arrow:', this.name);
 },
 normal: function () {
 console.log('normal:', this.name);
 }
 };
 inner.arrow();
 inner.normal();
 }
};
obj.say();