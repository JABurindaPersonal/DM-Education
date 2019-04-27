class HomeCtrl {
  constructor($scope, $http) {
    'ngInject';

    var method = '4d6DropLow';

    function getVals(arrs) {
      var total = 0;
      arrs.forEach(function(e) {
        total = total + pointbuyequivalent(e.val.value);
      });
      return total;
    }
    function getSum(total, num) {
      return total + num;
    }

    function getList(total, num) {
      return total + ' ' + num;
    }

    function rolldice(number, dice, drop) {
      var pips = new Array(4);
      for (var i = 0; i < number; i++) {
        pips[i] = 1.0 + Math.floor(Math.random() * dice);
      }
      pips.sort();
      var keep = pips.slice(drop, number);
      return { text: '(' + number + 'x d' + dice + ' drop ' + drop + ')', value: keep.reduce(getSum), rollhistory: pips.reduce(getList), modifier:calcmod(keep.reduce(getSum)) };
    }

    function race() {
      return { base: 'Halfling', subrace: 'Lightfoot' };
    }

    function rollstats() {
      switch (method) {
        case '4d6DropLow': return rolldice(4, 6, 1);
          break;
        default: return rolldice(3, 6, 0);
      }

    }

    function pointbuyequivalent(value) {
      var addn = value-8;
      if (value < 8) { addn = 0;}
      if (value > 13) { addn = addn + (value - 13);}
      if (value > 15) { addn = addn + (value - 15);}

      return addn;
    }

    function calcmod(val) {
      return Math.floor((val-10)/2);
    }
console.log("here");
$http.get("character.txt")
.then(function (response) { console.log("more"); console.log(response.data); $scope.character = response.data.contentItem;
$scope.feedback = "got";}, 
function(response) {$scope.feedback = "broke";});

    this.name = "Lotor McCleave";
    this.attrs = [{ name: 'Strength', abv: 'Str', val: rollstats() },
    { name: 'Intelligence', abv: 'Int', val: rollstats() },
    { name: 'Wisdom', abv: 'Wis', val: rollstats() },
    { name: 'Dexterity', abv: 'Dex', val: rollstats() },
    { name: 'Constitution', abv: 'Con', val: rollstats() },
    { name: 'Charisma', abv: 'Chr', val: rollstats() }
    ];
    this.prof = [{ type: "Language", name: "Common" }];
    this.race = race();
    this.pbe = getVals(this.attrs);
    this.feedback = 'loading';
  }

}

export default HomeCtrl;