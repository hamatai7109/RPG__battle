const loading = document.getElementById( 'loading' );

window.addEventListener( 'load', () => {
  loading.classList.add( 'hide' );
}, false );

//非同期処理の変数宣言
const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

//レベルの選択
//やさしいを選択
function easyMode(){
  monsterName = suraimu.name;
  monsterMaxHp = suraimu.maxHp;
  monsterCurrentHp = suraimu.currentHp;
  monsterMp = suraimu.mp;
  monsterPower = suraimu.power;
  monsterLv = suraimu.lv;

  document.getElementById('monsterImg').innerHTML = '<img src="assets/images/common/suraimu.png" alt="スライム" class="img">';
  document.getElementById('battleStart').classList.add('active'); 
  document.getElementById('levelChooseBack').classList.add('active');   
  document.getElementById('easyMode').classList.remove('active');  
  document.getElementById('normalMode').classList.remove('active');  
  document.getElementById('hardMode').classList.remove('active');  

  document.getElementById('message').textContent = "やさしいレベルです";
}

//ふつうを選択
function normalMode(){
  monsterName = oneEye.name;
  monsterMaxHp = oneEye.maxHp;
  monsterCurrentHp = oneEye.currentHp;
  monsterMp = oneEye.mp;
  monsterPower = oneEye.power;
  monsterLv = oneEye.lv;

  document.getElementById('monsterImg').innerHTML = '<img src="assets/images/common/oneEye.png" alt="ひとつめ" class="img">';
  document.getElementById('battleStart').classList.add('active'); 
  document.getElementById('levelChooseBack').classList.add('active');   
  document.getElementById('easyMode').classList.remove('active');  
  document.getElementById('normalMode').classList.remove('active');  
  document.getElementById('hardMode').classList.remove('active');  

  document.getElementById('message').textContent = "ふつうレベルです";
}

//むずかしいを選択
function hardMode(){
  monsterName = dragon.name;
  monsterMaxHp = dragon.maxHp;
  monsterCurrentHp = dragon.currentHp;
  monsterMp = dragon.mp;
  monsterPower = dragon.power;
  monsterLv = dragon.lv;

  document.getElementById('monsterImg').innerHTML = '<img src="assets/images/common/dragon.png" alt="ドラゴン" class="img">';
  document.getElementById('battleStart').classList.add('active');  
  document.getElementById('levelChooseBack').classList.add('active');  
  document.getElementById('easyMode').classList.remove('active');  
  document.getElementById('normalMode').classList.remove('active');  
  document.getElementById('hardMode').classList.remove('active');  

  document.getElementById('message').textContent = "むずかしいレベルです";
}

//レベル選択に戻る
function levelChooseBack(){
  document.getElementById('battleStart').classList.remove('active');  
  document.getElementById('levelChooseBack').classList.remove('active');  
  document.getElementById('easyMode').classList.add('active');  
  document.getElementById('normalMode').classList.add('active');  
  document.getElementById('hardMode').classList.add('active');  

  document.getElementById('message').textContent = "むずかしさをえらんでね";
}


//ユーザーの名前を入力
function userInput(){
  document.getElementById('playerHp').textContent = playerCurrentHp;  
  document.getElementById('playerMp').textContent = player.mp;  
  // document.getElementById('playerLv').textContent = player.lv;

  document.getElementById('yourName').textContent = 'テスト';  

  // let flag = true; 
  // while(flag){
  //   const yourName = prompt("あなたの名前はなんですか");
  //   if(yourName){
  //     document.getElementById('yourName').textContent = yourName;  
  //     flag = false;
  //   }else{
  //     alert("名前を入力してください");
  //   }
  // }
}

//バトル開始
async function BattleStart(){
  document.getElementById('battleStart').classList.remove('active');
  document.getElementById('levelChooseBack').classList.remove('active');
  userInput();
  enemyEncounter();
  await sleep(2000);
  playerSet();
}

//魔物が出現
async function enemyEncounter(){
  document.getElementById('message').textContent = (monsterName + "が あらわれた！！！");
  await sleep(2000);
  document.getElementById('monster').classList.add('show');
  document.getElementById('monsterName').textContent = monsterName;
  document.getElementById('monsterHp').textContent = monsterCurrentHp;
  document.getElementById('monsterMp').textContent = monsterMp;
  // document.getElementById('monsterLv').textContent = monsterLv;
}

//プレイヤーのコマンドセット
function playerSet(){
  document.getElementById('message').style.color = '#000000';
  document.getElementById('message').textContent = "たたかう";
  document.getElementById('playerAttack').classList.add('active');  
  document.getElementById('playerHeal').classList.add('active');  
  document.getElementById('gigadein').classList.add('active');
}

//プレイヤーの行動開始
function playerMoveStart(){
  document.getElementById('playerAttack').classList.remove('active');
  document.getElementById('playerHeal').classList.remove('active');
  document.getElementById('gigadein').classList.remove('active');
  document.getElementById('message').style.color = '#ff0000';
}

//プレイヤーが勝利の場合のエンドロール
async function playerWin(){
  monsterCurrentHp = 0;
  document.getElementById('monsterImg').animate(//モンスターが倒れて消える
      [
        {transform: 'translateX(0%)', opacity: 1},
        {transform: 'translateX(15%) rotate(45deg)', opacity: 0.5},
        {transform: 'translateX(30%) rotate(90deg)', opacity: 0}
      ],
      {
        duration: 1200,
        fill: 'forwards'
      }
    );
  document.getElementById('message').style.color = '#000000';
  document.getElementById('monsterHp').textContent = monsterCurrentHp;
  document.getElementById('message').textContent = monsterName + "をやっつけた！";
  await sleep(1000);
  document.getElementById('message').textContent = "48のけいけんちをかくとく!";
  await sleep(1000);
  document.getElementById('message').textContent = "139ゴールドをてにいれた!";
  await sleep(1000);
  // document.getElementById('message').textContent = player.name + "はレベル" + (player.lv + 1) + "にあがった!";
  // player.lv += 1;
  // await sleep(1000);
  // document.getElementById('playerLv').textContent = player.lv;
  document.getElementById('playAgain').classList.add('active');
}

//プレイヤーが負けた場合
function playerLose(){
  document.getElementById('playerImg').animate(//プレイヤーが倒れる。
      [
        {transform: 'translate(0%) rotate(0deg)'},
        {transform: 'translate(-20%, 10%) rotate(-40deg)'},
        {transform: 'translate(-40%, 20%) rotate(-80deg)'}
      ],
      {
        duration: 1200,
        fill: 'forwards'
      }
    );
  document.getElementById('message').style.color = '#000000';
  document.getElementById('message').textContent = player.name + "は力尽きてしまった、、、";
  document.getElementById('playAgain').classList.add('active');
}

//リトライ（もう一度対戦するため、ページをリロード）
function playAgain(){
  window.location.reload();
}

