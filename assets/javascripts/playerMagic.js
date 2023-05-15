//ホイミ(HPを15~30回復)
async function playerHeal(){
  playerTempHp = playerCurrentHp; //現在のプレイヤーのHPを一時的に格納
  playerMoveStart();
  document.getElementById('message').textContent = player.name + "はホイミを発動!";
  await sleep(1000);
  if(player.mp >= 3){
    healPoint = randomCal(30, 15);
    playerCurrentHp += healPoint;
    player.mp-= 3;
    playerHealText();
    document.getElementById('hoimiImg').animate(  //緑の光が現れて消える。
      [
        {transform: 'scale(1, 1)', opacity:0},
        {transform: 'scale(2, 2)', opacity:1},
        {transform: 'scale(3, 3)', opacity:0}
      ],
      {
        duration: 1000
      }
    );
    await sleep(1000);//animateで1000ミリ秒かかっている分を待つ。
    playerHpJudge();
    document.getElementById('playerHp').style.color = '#92E8E0';//プレイヤーのHPを0.5秒だけ緑色で表示する。
    await sleep(500);
    document.getElementById('playerHp').style.color = '#ffffff';//プレイヤーのHPを白に戻す。
    document.getElementById('playerHp').textContent = playerCurrentHp;
    document.getElementById('playerMp').textContent = player.mp;
    document.getElementById('message').textContent = player.name + "は体力が" + healPoint + "回復した!";
    setPlayerHp();
  }else{
    document.getElementById('message').textContent = "しまった。。MPがたりない!";
  }
  await sleep(1000);
  monsterAttack();
}


//ギガデイン（攻撃力の80から120のダメージ）
async function Gigadein(){
  monsterTempHp = monsterCurrentHp;//モンスターのHPを一時的に格納
  damagePoint = randomCal(120, 80); //80～120の値をランダムで抽出
  playerMoveStart();
  document.getElementById('message').textContent = player.name + "はギガデインを となえた!!";
  await sleep(1500);
  if(player.mp >= 12){
    monsterCurrentHp -= damagePoint;
    player.mp -= 12;
    monsterHpJudge();
    
    document.getElementById('gigadeinImg').animate(  //画面外の上から敵にに向けて雷が落ちる
      [
        {transform: 'scale(1, 1)',top: '-30%', opacity:0},
        {transform: 'scale(3, 3)',top: '10%', opacity:1}
      ],
      {
        duration: 2000
      }
    );
    await sleep(2000);
    changeColorEnemyHp();
    monsterDamageText();
    setMonsterHp();
    document.getElementById('monsterHp').textContent = monsterCurrentHp;
    document.getElementById('playerMp').textContent = player.mp;  
    document.getElementById('message').textContent = monsterName + "に" + damagePoint + "のダメージを与えた!";
    await sleep(2000);
    playerJudge();
  }else{
    document.getElementById('message').textContent = "しまった。。MPがたりない!";
    await sleep(1000);
    monsterAttack();
  }
}