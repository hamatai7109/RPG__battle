//キャラクタークラスの作成
class Character {
  constructor(name, maxHp,currentHp, mp, power,lv){
    this.name = name;
    this.maxHp = maxHp;
    this.currentHp = currentHp;
    this.mp = mp;
    this.power = power;
    this.lv= lv;
  }
}

//キャラクターのインスタンス化
let player = new Character('あなた',200, 200, 50, 12, 19);
let suraimu = new Character('スライム',50, 50, 10, 5, '???');
let oneEye = new Character('ひとつめ',100, 100, 20, 10, '???');
let dragon = new Character('ドラゴン',500, 500, 40, 20, '???');

//ダメージと回復
let damagePoint;
let healPoint;

//ランダム計算
function randomCal(max, min){
 return result = Math.floor(Math.random() * (max + 1 - min) + min);
}