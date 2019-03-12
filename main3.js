lib = {
    "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",
    "E": ".",     "F": "..-.",  "G": "--.",   "H": "....",
    "I": "..",    "J": ".---",  "K": "-.-",   "L": ".-..",
    "M": "--",    "N": "-.",    "O": "---",   "P": ".--.",
    "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
    "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",
    "Y": "-.--",  "Z": "--..",  " ": " ",

    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
      
    ".": ".-.-.-", ",": "--..--", "?": "..--..",  "'": ".----.",
    "/": "-..-.",  "(": "-.--.",  ")": "-.--.-",  "&": ".-...",
    ":": "---...", ";": "-.-.-.", "=": "-...-",   "+": ".-.-.",
    "-": "-....-", "_": "..--.-", "/": ".-..-.", "$": "...-..-",
    "!": "-.-.--", "@": ".--.-."
}

var text = ".... . .-.. .-.. ---    .- -. -. -.-.--";


function Dmorse(str){
	var conv = "";
	str = str.split("   ");
	for(var i = 0; i < str.length; i++){
		var s = str[i];
		s = s.split(" ");
		for (var k = 0; k < s.length; k++){
			for(key in lib){
				if(lib[key] == s[k]){
					conv += key;
					break;
				}
			}
		}
		conv += " ";
	}
	return conv;

}

//console.log(" ");
console.log(Dmorse(text));

