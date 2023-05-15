//与えるダメージ
// let playerAttackDamage;

//プレイヤーの攻撃（メイン）
async function playerAttack(){
  monsterTempHp = monsterCurrentHp;//モンスターのHPを一時的に格納
  playerMoveStart();
  document.getElementById('message').textContent = player.name + "の攻撃！！";
  await sleep(1000);
  const rand = Math.floor(Math.random() * 100);
  if(rand < 10){                    //ミス
    playerMiss();
    await sleep(1500);
  }else if(rand < 80 && rand >= 10){//普通の攻撃
    playerNormalAttack();
    await sleep(1500);
  }else{                            //会心の一撃
    playerSpecialAttack();
    await sleep(3000);
  }
  document.getElementById('monsterHp').textContent = monsterCurrentHp;
  playerJudge();
}

//プレイヤー攻撃時に、敵のHPを赤く表示して白く戻す。
  async function changeColorEnemyHp(){
    document.getElementById('monsterHp').style.color = '#ff0000';//敵のHPを0.5秒だけ赤く表示する。
    await sleep(500);
    document.getElementById('monsterHp').style.color = '#ffffff';//敵のHPを白に戻す。
  }

  //攻撃時に、プレイヤー画像が敵に近づいて元の位置に戻る。
  function playerAttackMove(){
    document.getElementById('playerImg').animate(
    [
      {transform: 'translateX(0%)'},
      {transform: 'translateX(60%)'},
      {transform: 'translateX(0%)'}
    ],
    {
      duration: 1000
    }
  );
}

//攻撃のミス
function playerMiss(){
  document.getElementById('message').textContent = "ミス！相手に攻撃をかわされた！";
  playerAttackMove();
  document.getElementById('monsterImg').animate(//敵がプレイヤーの攻撃をかわす。
      [
        {transform: 'translateX(0%)'},
        {transform: 'translateX(60%)'},
        {transform: 'translateX(0%)'}
      ],
      {
        duration: 1000
      }
    );
}

//普通の攻撃(攻撃力の+-5をダメージとして与える)
function playerNormalAttack(){
  damagePoint = randomCal(player.power+5, player.power-5); //攻撃力の+-5
  monsterCurrentHp -= damagePoint;
  monsterHpJudge();
  playerAttackMove();
  changeColorEnemyHp();
  monsterDamageText();
  setMonsterHp();
  document.getElementById('message').textContent = monsterName + "に" + damagePoint + "のダメージを与えた!";
}

//会心の一撃(攻撃力の2倍から4倍をダメージとして与える)
async function playerSpecialAttack(){
  damagePoint = randomCal(player.power*4, player.power*2); //攻撃力の2倍から4倍
  monsterCurrentHp -= damagePoint;
  monsterHpJudge();

  document.getElementById('message').textContent = "会心の一撃！！！";
  await sleep(1000);
  playerAttackMove();
  changeColorEnemyHp();
  monsterDamageText();
  setMonsterHp();
  document.getElementById('message').textContent = monsterName + "に" + damagePoint + "のダメージを与えた!";
}

