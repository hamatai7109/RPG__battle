//スライムの行動(メイン)
async function suraimuMove(){
  const rand = Math.floor(Math.random() * 100);
  if(rand <= 30){                  //普通の攻撃
    monsterNormalAttack();
  }else if(rand <= 50 && rand > 30){//ボーッとする
    dayDream();
  }else if(rand <= 70 && rand > 50){//あそんでいる
    play();
  }else{                            //寝る
    nap();
  }
}

//ボーッとする
async function dayDream(){
  document.getElementById('message').textContent = monsterName + "は ボーッとしている";
  await sleep(1000);
  document.getElementById('monsterHpText').textContent = "・・・";
  document.getElementById('monsterHpText').style.textShadow = '1px 1px #ffffff';
  document.getElementById('monsterHpText').animate(
    [
      {transform: 'scale(0.5, 0.5)',top: '30%', opacity:0},
      {transform: 'scale(1, 1)',top: '25%', opacity:1},
      {transform: 'scale(2, 2)',top: '20%', opacity:0},
    ],
    {
      duration: 1000,
      fill: 'forwards'
    }
  )
}

//あそんでいる
async function play(){
  document.getElementById('message').textContent = monsterName + "は あそんでいる";
  await sleep(1000);
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
}

//ねる
async function nap(){
  document.getElementById('message').textContent = monsterName + "は ねてしまった";
  await sleep(1000);
  document.getElementById('monsterHpText').textContent = "ZZZZZ";
  document.getElementById('monsterHpText').style.textShadow = '1px 1px #ffffff';
  document.getElementById('monsterHpText').animate(
    [
      {transform: 'scale(0.5, 0.5)',top: '30%', opacity:0},
      {transform: 'scale(1, 1)',top: '25%', opacity:1},
      {transform: 'scale(2, 2)',top: '20%', opacity:0},
    ],
    {
      duration: 1000,
      fill: 'forwards'
    }
  )
}