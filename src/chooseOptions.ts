export function chooseOptions(){
    let options = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * options.length);
    return options[index]
}