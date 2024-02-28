
let current_users: string[] = ['samawiya', 'aleena', 'zara', 'mariya', 'asra'];
let new_users: string[] = ['arib', 'samawiya', 'hadi', 'hammad', 'sarah'];

for (let new_user of new_users) {
    let is_duplicate: boolean = false;

    // Check if the new username already exists in the current users list (case insensitive)
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_duplicate = true;
            break;
        }
    }

    // Print appropriate message based on the existence of the username
    if (is_duplicate) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
