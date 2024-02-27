

let Guest_list :string[] = ['Imrankhan','Malahim','Kamrankhan'];

// for(let i=0; i<Guest_list.length; i++){


//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\Thank you!\n\n' 
//     )
// }
let absent_Guest :string = 'Imrankhan';

let new_Guest :string = 'Arib';

Guest_list[0] = new_Guest ; 

// for(let i=0; i<Guest_list.length; i++){
   // console.log('Dear Mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')    
//}

console.log(`Mr.${absent_Guest} is not coming to the party.`)

console.log('Good News! we find big table so we are invite three more guests.')
//yaha 3 guest add kiye hain

Guest_list.unshift('Sir Ziakhan') ;
Guest_list.splice(2,0,'Asad')
Guest_list.push('Hammad');

//yaha per main ny guset arry print kerwaya hy
for(let i=0; i<Guest_list.length; i++){


    console.log('Dear Mr..' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\n\Thank you!\n\n')   
}//sorry message to guest for not inviting


console.log('\nSorry we can not arrange big table,only two people will be invited.');

//yaha per main ny guest remove kiye hain

while(Guest_list.length>2){
 let remove_Guest = Guest_list.pop();
 
console.log(`sorry Mr. ${remove_Guest},you are not invited for the dinner`);
}
// hamary bachy howy invited guest.

for(let i=0; i<Guest_list.length; i++){console.log('Dear Mr ' + Guest_list[i] + ',\n\nyou are still invited.\n\nThankyou!')

}
//main ny sary guest arry sy remove ker diye.

Guest_list.splice(0,2);
console.log(Guest_list);

