//ひとつめの行動(メイン)
async function oneEyeMove(){
  const rand = Math.floor(Math.random() * 100);
  if(rand <= 30){                  //普通の攻撃
    monsterNormalAttack();
  }else if(rand <= 80 && rand > 30){//メラゾーマ（モンスター）
    Merazoma();
  }else if(rand <= 90 && rand > 80){//ハッスルダンス（モンスター）
    HustleDance();
  }else{                            //痛恨の一撃
    monsterSpecialAttack();
  }
}

//メラゾーマ（80～120のダメージ）
async function Merazoma(){
  damagePoint = randomCal(120, 80); //80～120の値をランダムで抽出

  document.getElementById('message').textContent = monsterName + "はメラゾーマを となえた!!";
  await sleep(1000);

  if(monsterMp >= 5){
    document.getElementById('merazomaImg').animate(  //画面右上からプレイヤーに向けて火の玉がスライドインして消える。
      [
        {transform: 'scale(1, 1)', top: '0', left: '80%', opacity:0},
        {transform: 'scale(2, 2)', top: '5%', left: '60%', opacity:1},
        {transform: 'scale(3, 3)', top: '10%', left: '30%', opacity:0.5}
      ],
      {
        duration: 1200
      }
    );
    playerCurrentHp -= damagePoint;
    playerHpJudge(); 
    monsterMp -= 5;
    changeColorPlayerHp();
    playerDamageText();
    setPlayerHp();
    document.getElementById('message').textContent = damagePoint + "のダメージをくらった!";
    await sleep(1000);
    document.getElementById('monsterMp').textContent = monsterMp; 
  }else{
    document.getElementById('message').textContent = "しまった。。MPがたりない!";
  }
}

//ハッスルダンス（HPを20~40回復）
async function HustleDance(){
  monsterTempHp = monsterCurrentHp;//モンスターのHPを一時的に格納
  document.getElementById('message').textContent = monsterName + "はハッスルダンスをおどった!";
  await sleep(1000);
  if(monsterMp >= 5){
    document.getElementById('monsterImg').animate(  //ダンスを踊る
      [
        {transform: 'translateX(0%)'},
        {transform: 'translateX(30%) rotate(45deg)'},
        {transform: 'translateX(-30%) rotate(-45deg)'},
        {transform: 'translateX(0%)'}
      ],
      {
        duration: 1000
      }
    );
    healPoint = randomCal(40, 20);
    monsterHealText();
    monsterCurrentHp += healPoint;
    monsterMp -= 5;
    monsterHpJudge();
    document.getElementById('monsterHp').style.color = '#92E8E0';//敵のHPを0.5秒だけ緑色で表示する。
    await sleep(500);
    document.getElementById('monsterHp').style.color = '#ffffff';//敵のHPを白に戻す。
    setMonsterHp();
    document.getElementById('message').textContent = monsterName + "は体力が" + 18 + "回復した!";
    await sleep(1000);
    document.getElementById('monsterHp').textContent = monsterCurrentHp;
    document.getElementById('monsterMp').textContent = monsterMp;
  }else{
    document.getElementById('message').textContent = "しまった。。MPがたりない!";
  }
}