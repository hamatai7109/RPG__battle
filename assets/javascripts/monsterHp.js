//モンスターのHPを一時的に格納
let monsterTempHp;

//モンスターのHPゲージを変更
function setMonsterHp(){
  monsterHpBefore = monsterTempHp / monsterMaxHp * 100;
  monsterHpAfter = monsterCurrentHp / monsterMaxHp * 100;

  let c = -100 + monsterHpBefore;
  let d = -100 + monsterHpAfter;

  if(c < d){ //回復する
    document.getElementById('monsterLife').animate(
      [
        {transform: 'translateX('+c+'%)', backgroundColor: '#92E8E0'},
        {transform: 'translateX('+d+'%)', backgroundColor: '#52B50F'}
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );
  }else if(c > d){ //ダメージを受ける
    document.getElementById('monsterLife').animate(
      [
        {transform: 'translateX('+c+'%)', backgroundColor: '#ff0000'},
        {transform: 'translateX('+d+'%)', backgroundColor: '#52B50F'}
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );
  }else{ //HPに何も変化がない（HPがMaxで回復した場合など）
    ;
  }
}

//ダメージを受けてHPが減る時に、文字をふわっと浮かばせて消す。
function monsterDamageText(){
  document.getElementById('monsterHpText').textContent = '-' + damagePoint;
  document.getElementById('monsterHpText').style.textShadow = '3px 3px #ff0000';
  document.getElementById('monsterHpText').animate( //文字がふわっと浮かんで消える。
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

//HP回復する時に画像の横に文字をふわっと浮かばせて消す。
function monsterHealText(){
  document.getElementById('monsterHpText').textContent = '+' + healPoint;
  document.getElementById('monsterHpText').style.textShadow = '3px 3px #92E8E0';
  document.getElementById('monsterHpText').animate( //1文字がふわっと浮かんで消える。
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
