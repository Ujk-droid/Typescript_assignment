

let Guest_list :string[] = ['IMRANKHAN','MALAHIM','HADI','KAMRAN'];

for(let i = 0; i < Guest_list.length; i++){
console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!')

}

let absant_Guest :string = 'IMRAN KHAN';

let new_Guest :string = 'ARIB';

Guest_list[0] = new_Guest;

for(let i = 0; i < Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
    
    }
    console.log(` Mr. ${absant_Guest} is not coming to the party.`)


