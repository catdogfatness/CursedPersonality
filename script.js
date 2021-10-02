console.log("hello");
const categories = ['all', 'Disney', 'Anime', 'Nickelodeon', 'Celebrities']; 
const Disney = ['Cinderella', 'Jasmine', 'Tiana', 'Luca', 'Elsa', 'Mickey Mouse', 'Minnie Mouse', 'Goofy', 'Pluto', 'Daisy Duck', 'Bambi', 'Tinker Bell', 'Pocahontas', 'Kuzco', 'Snow White', 'Kronk', 'Prince Charming', 'Pinocchio', 'Merida', 'Maleficent','Mowgli', 'Baloo', 'Winnie the Pooh', 'Tigger', 'Mulan', 'Belle', 'Mushu', 'Gaston', 'Alladin', 'Jafar', 'Lilo', 'Stitch', 'Ariel', 'Ursula', 'Tarzan', 'Simba', 'Mufasa']; 
const Anime = ['Killua', 'Gon', 'Hisoka', 'Netero', 'Goku', 'Naruto', 'Sasuke', 'Aang', 'Katara', 'Sokka', 'Azula', 'Firelord Ozai', 'Bakugo', 'Hinata', 'Midoriya', 'Todoroki', 'Itadori', 'Fushigoro', 'Tanjiro', 'Nezuko', 'Inosuke', 'Gojo', 'Itachi', 'Levi Ackermann', 'Mikasa', 'Eren Jaeger', 'Kakashi', 'Saitama', 'Luffy', 'Jiraiya', 'Kurapika', 'Pikachu' ]; 
const Nickelodeon = ['Spongebob', 'Patrick', 'Barnacle Boy', 'Dora', 'Boots', 'Cosmo', 'Danny Phantom', 'Diego', 'Dudley Puppy', 'Wanda', 'Croker', 'Donatello the Ninja Turtle', 'Michaelangelo the Ninja Turtle', 'Leonardo the Ninja Turtle', 'Rafael the Ninja Turtle', 'Jimmy Neutron', 'Mr. Krabs', 'Kung Fu Panda', 'Timmy Turner']; 
const Celebrities = ['Kim Kardashian', "Kylie Jenner", "Rihanna", 'Beyonce', 'Doja Cat', 'Lizzo', 'Gordon Ramsey', 'Blake Lively', 'Chris Hemsworth', 'Miley Cyrus', 'The Rock', 'Kevin Hart', 'Nicki Minaj', 'Homer Simpson', 'Marge Simpson', 'Travis Scott', 'A$AP Rocky', '21 Savage', 'Angelina Jolie', 'Vin Diesel', 'JAY-Z', ]; 
const Marvel = ['Captain America', 'Black Widow', 'Iron Man', 'Hawkeye', 'Hulk', 'Captain Marvel', 'Black Planther', 'Kilmonger', 'Wanda', 'Vision', 'Shang-Chi'];

const characters = [Disney, Anime, Nickelodeon, Celebrities, Marvel]; 

const memes = ['Pepe the Frog', 'Kermit', 'Peppa Pig', 'Blobfish', 'Handsome Squidward', 'Squidward', '( ͡° ͜ʖ ͡°)','Mike Wazowski', 'Shrek', 'Stonks guy', 'Pregnant Emoji', 'Kim Jung un', 'Doge', 'Among Us', 'Vishawn']; 

//randomly picks and element from a list (can be used to pick randomly from the memes list)
const pickRandom = (list1) => {
	const index = (Math.random() * 100) % list1.length;
	console.log (list1[index]); 
	return list1[index]; 
}


//goes through a 2D list and picks a random element (can be used to pick a character from the characters list)
const pickCharacter = (list1) => {
	var index = (Math.random() * 100) % list1.length; 
	console.log (pickRandom (characters[index])); 
	return pickRandom (characters[index]); 
}


const clicker = () => {
	//document.getElementById ("demo").innerHTML = "YOU CLICKED ME!";
	let input = document.getElementById ("imgClickAndChange"); 
	//alert("You clicked me");
}


//returns a random cateogory 
function randomCategories()
 {

          //grads random word from array
     return categories[Math.floor(Math.random().categories.length)];
        
	//	alert(thing, + "+" + thing2);
		
 }
 
function changeImagetoGIF()
{
	
}

const pickIdeas = () => { 
	let input2 = document.getElementById ("meme"); 
	input2.innerHTML = pickRandom (memes); 
	
	let input1 = document.getElementById ("character"); 
	input1.innerHTML = pickCharacter (characters); 
	
}

const img = document.getElementById("images");
const img2 = document.getElementById("pooper"); 
const img3 = document.getElementById("pooping"); 
const text = document.getElementById("start")
//img.src = "https://greatyoyo89.qoom.space/CursedPersonality/images/pooper.png";
img.onclick = function(){
//	text.style.display = "none";
	img2.src = "https://i.imgur.com/YNMYGXB.gif";
	setTimeout(function(){
		img2.src= "https://i.imgur.com/qAQjlEw.png";
	}, 650);
	
	//pickIdeas(); 
	let ind1 = Math.floor (Math.random() * characters.length)
	let ind2 = Math.floor (Math.random() * characters[ind1].length)
	document.getElementById('text').innerHTML = characters[ind1][ind2] + 
	" mixed with " + memes[Math.floor(Math.random()*memes.length)]
	
};

document.body.appendChild(img);