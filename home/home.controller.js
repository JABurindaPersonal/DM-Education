class HomeCtrl {
  constructor($scope) {
    'ngInject';

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
      return { text: '(' + number + 'x d' + dice + ' drop ' + drop + ')', value: keep.reduce(getSum), rollhistory: pips.reduce(getList) };
    }

function race() {
  return {base:'Halfling', subrace:'Lightfoot'};
}

    function rollfour() {
      return rolldice(4, 6, 1);
    }

    this.name = "Lotor McCleave";
    this.attrs = [{ name: 'Strength', abv: 'Str', val: rollfour() },
    { name: 'Intelligence', abv: 'Int', val: rollfour() },
    { name: 'Wisdom', abv: 'Wis', val: rollfour() },
    { name: 'Dexterity', abv: 'Dex', val: rollfour() },
    { name: 'Constitution', abv: 'Con', val: rollfour() },
    { name: 'Charisma', abv: 'Chr', val: rollfour() }
    ];
    this.prof = [{ type: "Langauge", name: "Common" }];
    this.race = race();
  }

}

export default HomeCtrl;