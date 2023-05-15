//モンスターの変数あれこれ
let monsterName;
let monsterMaxHp;
let monsterCurrentHp;
let monsterMp;
let monsterPower;
let monsterLv;

//モンスターの攻撃プロセス
async function monsterAttack(){
  playerTempHp = playerCurrentHp
  document.getElementById('message').style.color = '#0000ff';
  document.getElementById('message').textContent = monsterName + "のターン！";
  await sleep(1000);

  switch(monsterName){
    case 'スライム':
      suraimuMove();
      break;
    case 'ひとつめ':
      oneEyeMove();
      break
    case 'ドラゴン':
      dragonMove();
      break
    default:
      alert('エラーです');
  }
  await sleep(3000);
  document.getElementById('playerHp').textContent = playerCurrentHp;
  monsterJudge();
};

//モンスター攻撃時に、プレイヤーのHPを赤く表示して白く戻す。
async function changeColorPlayerHp(){
  document.getElementById('playerHp').style.color = '#ff0000';//プレイヤーのHPを0.5秒だけ赤く表示する。
  await sleep(500);
  document.getElementById('playerHp').style.color = '#ffffff';//プレイヤーのHPを白に戻す。
}

//攻撃時に、モンスター画像がプレイヤーに近づいて元の位置に戻る。
function monsterAttackMove(){
  document.getElementById('monsterImg').animate(
  [
    {transform: 'translateX(0%)'},
    {transform: 'translateX(-60%)'},
    {transform: 'translateX(0%)'}
  ],
  {
    duration: 1200
  }
);
}

//普通の攻撃(攻撃力の+-5のダメージ)
async function monsterNormalAttack(){
  damagePoint = randomCal(monsterPower+5, monsterPower-5); //攻撃力の+-5
  playerCurrentHp -= damagePoint;
  playerHpJudge();

  document.getElementById('message').textContent = monsterName + "の攻撃!";
  await sleep(1000);
  monsterAttackMove()
  changeColorPlayerHp();
  playerDamageText();
  setPlayerHp();
  document.getElementById('message').textContent = damagePoint + "のダメージを くらった!";
}

//痛恨の一撃(攻撃力の4倍から5倍のダメージ)
async function monsterSpecialAttack(){
  damagePoint = randomCal(monsterPower*5, monsterPower*4); //攻撃力の4倍から5倍
  playerCurrentHp -= damagePoint;
  playerHpJudge();

  document.getElementById('message').textContent = "痛恨の一撃！！！";
  await sleep(1000);
  monsterAttackMove()
  changeColorPlayerHp();
  playerDamageText();
  setPlayerHp();
  document.getElementById('message').textContent = player.name + "に" + damagePoint + "のダメージを与えた!";
}