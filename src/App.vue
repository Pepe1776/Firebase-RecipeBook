<template>
  <div class="container">
    <router-view />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Carattere&family=Manrope:wght@700&family=Orbitron:wght@900&display=swap');

.root {
  --main: #4D194D;
  --main-dark: #3E1F47;
  --main-darker: #312244;
  --dark: #272640;
  --green: #065A60;
  --green-dark: #0B525B;
  --green-darker: #1B3A4B;
  --green-darkest: #212F45;
  --light: #006466;


}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 font-family: 'Manrope', sans-serif;
}
body {
 background: rgb(209, 45, 195);
 background: radial-gradient(circle, rgb(1, 182, 214) 0%, rgba(238, 0, 178, 0.589) 100%);
}
a {
  color: #000000;
  text-decoration: none;
}

button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  background-color: #f5b0ec;
  font-size: 1.5rem;
  color: #030e1b;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  transition: all 0.5s ease;
}
button:hover {
  background-color: #f76de4;
  transform: scale(1.05);
}
</style>
