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

//ボーッとする
async function nap(){
  document.getElementById('message').textContent = monsterName + "は ねてしまった";
  await sleep(1000);
}