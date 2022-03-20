<template>
  <div class="container">
    <h1>Recipes</h1>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Righteous&display=swap');

* {
  --accent: #4aecf8;
  --main: #00e4f5;
  --main-dark: #00becc;
  --main-darker: #00919c;
  --dark: #292929;
  --blue: #02a4af;
  --blue-dark: #00848d;
  --blue-darker: #016a72;
  --blue-darkest: #014347;
  --light: #e1e1e1;
  --lighter: #f1f1f1;
  --lightest: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'lobster', cursive;
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
    var(--light) 40%,
    var(--blue) 60%,
    var(--dark) 100%
  );
  background-size: 300% 300%;
  animation: movingGradient 20s linear infinite alternate-reverse;
}
h1 {
  font-size: 5rem;
  display: flex;
  justify-content: center;
  margin: 5px;
  padding: 10px;
  text-shadow: 0 8px 18px rgba(0, 228, 245, 0.8);
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

  background-color: var(--dark);
  font-size: 1.5rem;
  color: #f0f7ff;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  transition: all 0.5s ease;
}
button:hover {
  background-color: var(--main);
  color: var(--dark);
  transform: scale(1.05);
}
.btn::before,
.btn::after {
  content: '';
  display: block;
  position: absolute;
  inset: 0;
  z-index: -1;
}
.btn::after {
  background-color: #292929;
}
.btn::before {
  background-image: linear-gradient(to bottom right, #aeffb9 0%, #a091ff 100%);
  transition: transform 200ms;
}
.btn:hover::before,
.btn:focus::before {
  transform: scale(1.1);
}
</style>
