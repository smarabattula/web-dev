const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
      function print2() {
        console.log(this);
      }
      //console.log(this);
      print2();
    }
  }

  console.log(this);
  obj.print();
