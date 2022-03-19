<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Carattere&family=Manrope:wght@700&family=Orbitron:wght@900&display=swap');

.root {
  --main: #4d194d;
  --main-dark: #3e1f47;
  --main-darker: #312244;
  --dark: #272640;
  --green: #065a60;
  --green-dark: #0b525b;
  --green-darker: #1b3a4b;
  --green-darkest: #212f45;
  --light: #006466;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}
.container {
  position: absolute;
  inset: 0;
  padding: 50px;
  height: 800px;
  width: 100%;
  background-image: linear-gradient(
    to bottom right,
    #4affde 0%,
    #5b9dff 40%,
    #d06bff 60%,
    #ff34d2 100%
  );
  background-size: 200% 200%;
  animation: movingGradient 5s linear infinite alternate;
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
