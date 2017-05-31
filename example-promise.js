/*function getTempCallback (ocation, callback) {
  callback(undefined, 78);
  callback('City Not Found');
}

getTempCallback('Philadelphia', function(err, temp){
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Philadelphia').then(function (temp) {
console.log('promise success', temp);
}, function (err) {
console.log('promise error', err);
});
*/


function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a == 'number' && typeof b == 'number') {
      resolve(a + b);
    }
      reject('one of these is not like the other');
  });
}

addPromise(4,3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
})
