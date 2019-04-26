class HomeCtrl {
  constructor($scope) {
    'ngInject';

var method = '4d6DropLow';
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
      return { base: 'Halfling', subrace: 'Lightfoot' };
    }

    function rollstats() {
      switch (method) {
        case '4d6DropLow':  return rolldice(4, 6, 1);
        break;
        default : return rolldice(3,6,0);
      }
    
    }

    this.name = "Lotor McCleave";
    this.attrs = [{ name: 'Strength', abv: 'Str', val: rollstats() },
    { name: 'Intelligence', abv: 'Int', val: rollstats() },
    { name: 'Wisdom', abv: 'Wis', val: rollstats() },
    { name: 'Dexterity', abv: 'Dex', val: rollstats() },
    { name: 'Constitution', abv: 'Con', val: rollstats() },
    { name: 'Charisma', abv: 'Chr', val: rollstats() }
    ];
    this.prof = [{ type: "Langauge", name: "Common" }];
    this.race = race();
  }

}

export default HomeCtrl;