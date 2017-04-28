var hiraganaDict = {'あ':'a', 'い':'i', 'う':'u',' え':'e', 'お':'o', 'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko', 'が':'ga', 'ぎ':'gi', 'ぐ':'gu', 'げ':'ge', 'ご':'go', 'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so', 'ざ':'za','じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo', 'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to', 'だ':'da', 'で':'de', 'ど':'do', 'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no', 'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho', 'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo', 'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po', 'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', "も":'mo', 'や':'ya', 'ゆ':'yu', 'よ':'yo', 'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro', 'わ':'wa', 'を':'wo', 'ん':'n'};
var katakanaDict = {'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o', 'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko', 'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go', 'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so', 'ザ':'za','ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo', 'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to', 'ダ':'da', 'デ':'de', 'ド':'do', 'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no', 'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho', 'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo', 'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po', 'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', "モ":'mo', 'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo', 'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro', 'ワ':'wa', 'ヲ':'wo', 'ン':'n'};
var dictOne = {'hon': 'book', 'kami': 'paper', 'enpitsu': 'pencil', 'kore': 'this one', 'sore': 'that one', 'are': 'that one (over there)', 'nan': 'what', 'watashi': 'I', 'anata': 'you', 'kare': 'he', 'kanojo': 'she', 'dare': 'who', 'nansai':'how old'}

var japaneseOne = [];
var englishOne = [];
var word;

var hiragana = [];
var katakana = [];
var solutions = [];
var character;


for (character in hiraganaDict) {
  hiragana.push(character);
  solutions.push(hiraganaDict[character]);
}

for (character in katakanaDict) {
  katakana.push(character);
}

for (word in dictOne) {
  japaneseOne.push(word);
  englishOne.push(dictOne[character]);
}

var currentMode = 0;
var currentScore = 0;
var numQuestions = 0;

// var instructions = ['Select the correct pronunciation of the character above.', 'Select the correct translation of the word above.']

function setMode(int) {
  currentMode = int;

  if (int == 0) {
    document.getElementById('Hiragana').disabled = true;
    document.getElementById('Katakana').disabled = false;
    document.getElementById('LessonOne').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct pronunciation of the character above.'

  } else if (int == 1) {
    document.getElementById('Hiragana').disabled = false;
    document.getElementById('Katakana').disabled = true;
    document.getElementById('LessonOne').disabled = false;
    document.getElementById('Instructions').innerHTML = 'Select the correct pronunciation of the character above.'

  } else {
    document.getElementById('Hiragana').disabled = false;
    document.getElementById('Katakana').disabled = false;
    document.getElementById('LessonOne').disabled = true;
    document.getElementById('Instructions').innerHTML = 'Select the correct translation of the word above.'
  }

  document.getElementById('Next').disabled = false;
  document.getElementById('OptionOne').disabled = true;
  document.getElementById('OptionTwo').disabled = true;
  document.getElementById('OptionThree').disabled = true;

  document.getElementById('AmIRight').innerHTML = ''
  document.getElementById('CharacterSpace').innerHTML = ''
  document.getElementById('OptionOne').innerHTML = ''
  document.getElementById('OptionTwo').innerHTML = ''
  document.getElementById('OptionThree').innerHTML = ''

  pickCharacter();

}

function pickCharacter() {
  document.getElementById('Next').disabled = true;
  document.getElementById('OptionOne').disabled = false;
  document.getElementById('OptionTwo').disabled = false;
  document.getElementById('OptionThree').disabled = false;
  document.getElementById('OptionOne').className = "answerbutton";
  document.getElementById('OptionTwo').className = "answerbutton";
  document.getElementById('OptionThree').className = "answerbutton";

  if (currentMode == 0) {
    dictionary = hiraganaDict;
    characters = hiragana;
  } else if (currentMode == 1) {
    dictionary = katakanaDict;
    characters = katakana;
  } else {
    dictionary = dictOne;
    characters = japaneseOne;
  }

  var n = Math.floor(Math.random() * Object.keys(dictionary).length);
  
  document.getElementById('CharacterSpace').innerHTML = characters[n]; 
  
  displayKana(characters[n]);

  document.getElementById('AmIRight').innerHTML = ''
}

function displayKana(character) {
  var characters, dictionary;

  if (currentMode == 0) {
    dictionary = hiraganaDict;
    characters = hiragana;
  } else if (currentMode == 1) {
    dictionary = katakanaDict;
    characters = katakana;
  } else {
    dictionary = dictOne;
    characters = japaneseOne;
  }

  var dictionaryLength = Object.keys(dictionary).length

  // picks two different random indices that don't match character's index

  var randomCharacter = characters[Math.floor(Math.random() * dictionaryLength)];

  while (character == randomCharacter) randomCharacter = characters[Math.floor(Math.random() * dictionaryLength)];

  var randomCharacter2 = characters[Math.floor(Math.random() * dictionaryLength)];

  while (randomCharacter2 == character || randomCharacter2 == randomCharacter)
    randomCharacter2 = characters[Math.floor(Math.random() * dictionaryLength)];

  // puts the answers in order based on index

  var answers = [character, randomCharacter, randomCharacter2];

  answers.sort();

  // displays the answers, in order, on the option buttons

  var buttons = [
    document.getElementById('OptionOne'),
    document.getElementById('OptionTwo'),
    document.getElementById('OptionThree')
  ];

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = dictionary[answers[i]];
  }

  // once an option is clicked, displays whether it is correct or incorrect

  buttons[0].onclick = function() { checkAnswer(character, answers[0], 'OptionOne') };
  buttons[1].onclick = function() { checkAnswer(character, answers[1], 'OptionTwo') };
  buttons[2].onclick = function() { checkAnswer(character, answers[2], 'OptionThree') };
}

var stopScore = false;

function checkAnswer(correct, answer, option) {
  document.getElementById('AmIRight').innerHTML = ((correct == answer) ? 'Correct!' : 'Incorrect.');
  if (correct == answer) {
    if (stopScore == false) {
      currentScore++;
      numQuestions++;
      document.getElementById('Score').innerHTML = 'Score: ' + currentScore.toString() + ' out of ' + numQuestions.toString();
    }
    stopScore = false;
    document.getElementById('ResetScore').disabled = false;
    document.getElementById('Next').disabled = false;
    document.getElementById('OptionOne').disabled = true;
    document.getElementById('OptionTwo').disabled = true;
    document.getElementById('OptionThree').disabled = true;
    document.getElementById(option).className = "correctanswer";
    // audio = new Audio(correct + '.mp3');
    // audio.play();
  } else {
    if (stopScore == false) numQuestions++;
    stopScore = true;
    document.getElementById(option).className = "incorrectanswer";
    document.getElementById('Score').innerHTML = 'Score: ' + currentScore.toString() + ' out of ' + numQuestions.toString();
  }
}

function resetScore() {
  currentScore = 0;
  numQuestions = 0;
  document.getElementById('ResetScore').disabled = true;
  document.getElementById('Score').innerHTML = 'Score: 0 out of 0';
}