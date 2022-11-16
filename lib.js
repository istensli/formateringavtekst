

function fixText(text){

    //check if first char is a letter, then tu upper på denne
    // I tillegg skal alle mellomrom først og sist i teksten fjernes.

    text = text.trim();//removes space in beginning and end
    let firstLetter =  text.charAt(0);
    let restOfText = text.substring(1);
    restOfText = restOfText.toLowerCase();

    //sjekker om første tegn er en bokstav
    if((text.length > 0) && (firstLetter.toUpperCase() != firstLetter.toLowerCase())){
        firstLetter = firstLetter.toUpperCase();
 
    }
    text = firstLetter + restOfText;
    return text;
    

}