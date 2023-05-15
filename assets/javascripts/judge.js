//HPの最大値と最小値を設定(プレイヤー)
function playerHpJudge(){
  if(playerCurrentHp > player.maxHp){
    playerCurrentHp = player.maxHp
  }else if(playerCurrentHp > 0 && playerCurrentHp <= player.maxHp){
    ;
  }else{
    playerCurrentHp = 0;
  }
}

//HPの最大値と最小値を設定(モンスター)
function monsterHpJudge(){
  if(monsterCurrentHp > monsterMaxHp){
    monsterCurrentHp = monsterMaxHp
  }else if(monsterCurrentHp > 0 && monsterCurrentHp <= monsterMaxHp){
    ;
  }else{
    monsterCurrentHp = 0;
  }
}

//プレイヤーのターン終了時に、勝敗を判定
function playerJudge(){
  if(monsterCurrentHp <= 0){
    monsterCurrentHp = 0;
    document.getElementById('monsterHp').textContent = monsterCurrentHp;
    playerWin();
  }else{
    monsterAttack();
  }
}

//モンスターのターン終了時に、勝敗を判定
function monsterJudge(){
  if(playerCurrentHp > 0){
    playerSet();
  }else{
    playerCurrentHp = 0;
    document.getElementById('playerHp').textContent = playerCurrentHp;
    playerLose();
  }
}