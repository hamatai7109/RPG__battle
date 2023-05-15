//ドラゴンの行動(メイン)
async function dragonMove(){
  const rand = Math.floor(Math.random() * 100);
  if(rand <= 30){                  //普通の攻撃
    monsterNormalAttack();
  }else if(rand <= 60 && rand > 30){//ひのいき
    fireBreath();
  }else if(rand <= 90 && rand > 60){//ベホイミ
    behoimi();
  }else{                            //痛恨の一撃
    monsterSpecialAttack();
  }
}

//ひのいき（40～70のダメージ）
async function fireBreath(){
  damagePoint = randomCal(70, 40); //80～120の値をランダムで抽出

  document.getElementById('message').textContent = monsterName + "は ひのいき をふいた!!";
  await sleep(1000);

  if(monsterMp >= 7){
    document.getElementById('fireBreath').animate(  //ドラゴンからプレイヤーに向けて火の息がスライドインして消える。
      [
        {transform: 'scale(1, 1)', top: '10%', left: '30%', opacity:0},
        {transform: 'scale(1.5, 1.5)', top: '12%', left: '25%', opacity:1},
        {transform: 'scale(2, 2)', top: '14%', left: '20%', opacity:0.5}
      ],
      {
        duration: 1200
      }
    );
    playerCurrentHp -= damagePoint;
    playerHpJudge(); 
    monsterMp -= 7;
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

//ベホイミ（HPを40～80を回復）
async function behoimi(){
  monsterTempHp = monsterCurrentHp;//モンスターのHPを一時的に格納
  document.getElementById('message').textContent = monsterName + "は ベホイミを となえた!";
  await sleep(1000);
  if(monsterMp >= 12){
    healPoint = randomCal(80, 40);
    monsterHealText();
    monsterCurrentHp += healPoint;
    monsterMp -= 12;
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