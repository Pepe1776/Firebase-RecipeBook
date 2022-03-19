<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Righteous&display=swap');

* {
  --main: #4d194d;
  --main-dark: #3e1f47;
  --main-darker: #312244;
  --dark: #272640;
  --green: #065a60;
  --green-dark: #0b525b;
  --green-darker: #1b3a4b;
  --green-darkest: #212f45;
  --light: #006466;
  --lighter: #05ced1;
  --lightest: #04f6fa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Righteous', cursive;
}
html {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  inset: 0;
  padding: 50px;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to bottom right,
    var(--main) 0%,
    var(--green) 40%,
    var(--light) 60%,
    var(--dark) 100%
  );
  background-size: 300% 300%;
  animation: movingGradient 20s linear infinite alternate-reverse;
}
@keyframes movingGradient {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
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
  margin: 5px;

  background-color: var(--light);
  font-size: 1.5rem;
  color: #f0f7ff;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  transition: all 0.5s ease;
}
button:hover {
  background-color: var(--dark);
  transform: scale(1.05);
}
</style>
