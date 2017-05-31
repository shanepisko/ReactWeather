var names = ['Ali', 'Hondo', 'Shane'];
/*
names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowfunc', name);
  console.log('something else');
  var x = 'something';
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('shane'));
*/
/*
var person = {
  name: 'Shane',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
*/

//challenge
function add (a, b) {
  return a + b;
}

var addCurly = (a, b) => {
  return a + b;
};

var addExp = (a, b) => a + b;

console.log(addCurly(1, 3));
console.log(addExp(3, -2));
