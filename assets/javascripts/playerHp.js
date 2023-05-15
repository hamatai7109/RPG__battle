//現在のプレイヤーのHPを一時的に格納
let playerCurrentHp = player.currentHp;
let playerTempHp;

//プレイヤーのHPゲージを変更
function setPlayerHp(){
  playerHpBefore = playerTempHp / player.maxHp * 100;
  playerHpAfter = playerCurrentHp / player.maxHp * 100;

  let a = -100 + playerHpBefore;
  let b = -100 + playerHpAfter;

  if(a < b){ //回復する
    document.getElementById('playerLife').animate(
      [
        {transform: 'translateX('+a+'%)', backgroundColor: '#92E8E0'},
        {transform: 'translateX('+b+'%)', backgroundColor: '#52B50F'}
      ],
      {
        duration: 1000,
        fill: "forwards"
      }
    );
  }else if(a > b){ //ダメージを受ける
    document.getElementById('playerLife').animate(
      [
        {transform: 'translateX('+a+'%)', backgroundColor: '#ff0000'},
        {transform: 'translateX('+b+'%)', backgroundColor: '#52B50F'}
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
function playerDamageText(){
  document.getElementById('playerHpText').textContent = '-' + damagePoint;
  document.getElementById('playerHpText').style.textShadow = '3px 3px #ff0000';
  document.getElementById('playerHpText').animate( //文字がふわっと浮かんで消える。
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
function playerHealText(){
  document.getElementById('playerHpText').textContent = '+' + healPoint;
  document.getElementById('playerHpText').style.textShadow = '3px 3px #92E8E0';
  document.getElementById('playerHpText').animate( 
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