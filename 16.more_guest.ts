
let Guest_list :string[] = ['Imrankhan','Malahim','Kamrankhan'];

// for(let i=0; i<Guest_list.length; i++){


//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\Thank you!\n\n' 
//     )
// }
let absent_Guest :string = 'Imrankhan';

let new_Guest :string = 'Arib';

Guest_list[0] = new_Guest ; 

for(let i=0; i<Guest_list.length; i++){


    console.log('Dear Mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n') 
    
}

console.log(`Mr.${absent_Guest} is not coming to the party.`)
 
console.log('Good News! we find big table so we are invite three more guests.')

Guest_list.unshift('Sir Ziakhan') ;
Guest_list.splice(2,0,'Asad')
Guest_list.push('Hammad');

for(let i=0; i<Guest_list.length; i++){


    console.log('Dear Mr..' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\n\Thank you!\n\n')   
}