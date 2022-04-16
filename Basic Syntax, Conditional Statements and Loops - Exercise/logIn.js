function login(input) {
    let index = 0;  
    let username = input[index++];
    let password = username.split('').reverse().join('');
  
  
    let wrongPass = 0;
    let currentPassword = input[index++];
    while (currentPassword !== password && wrongPass < 3) {
      wrongPass++;
      console.log(`Incorrect password. Try again.`);
      currentPassword = input[index++];
    }
  
    if (currentPassword === password) {
      console.log(`User ${username} logged in.`);
    } else {
      console.log(`User ${username} blocked!`);
    }
  }