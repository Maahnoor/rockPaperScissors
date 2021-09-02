const gameEl = document.getElementById('game');
const winCount = document.getElementById('wins');
const lossCount = document.getElementById('losses');
const drawCount = document.getElementById('draws');
let scoreTable= {'wins':0,
	'losses': 0, 
	'draws' : 0,}

	let tableEdit = '';
	let bot= '';
	let st = '';
	let s=0;

function startGame(player){
	let x = Math.floor(Math.random()*3);
	bot = ['rock', 'paper', 'scissors'][x];

	let score = decideWinner(player.id,bot);

	if (score == 1){
			st = 'You Won!';
			s=++scoreTable['wins'];
			tableEdit= winCount;
		}
	else if (score ==  0){
			st = 'You Lost!';
			s=++scoreTable['losses'];
			tableEdit = lossCount;
		}
	else{
			st = 'Game Tied';
			s=++scoreTable['draws'];
			tableEdit = drawCount;
		}
	const b = document.getElementById(bot);
	gameEl.innerHTML= `<img src= ${player.src}> 
	 <h1 style = "color:white"> ${st}</h1>  
	 <img src=${b.src} >`
	 tableEdit.innerHTML= s;
}

function decideWinner(yourChoice, botChoice){
	let data= {
		'rock': {'rock':0.5, 'paper':0, 'scissors':1},
		'paper': {'paper':0.5, 'scissors':0, 'rock':1},
		'scissors': {'scissors':0.5, 'rock':0, 'paper':1}
	}
	return data[yourChoice][botChoice];
}

function restart(){
	gameEl.innerHTML=`<img src="images/rock.png" id="rock" onclick="startGame(this)">
			<img src="images/paperr.png" id="paper" onclick="startGame(this)">
			<img src="images/scissorss.png" id="scissors" onclick="startGame(this)">`;
}