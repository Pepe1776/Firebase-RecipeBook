/* eslint-disable no-unused-vars */
<template id="printMe">
  <!-- <button v-print="printObj">Print</button> -->
  <!-- <component :is="TopHeader"></component> -->
  <div class="container-app"></div>
  <h1>Recipes</h1>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      printLoading: true,
      printObj: {
        id: 'printMe',
        popTitle: 'good print',
        extraCss:
          'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback(vue) {
          vue.printLoading = true
          console.log('')
        },
        openCallback(vue) {
          vue.printLoading = false
          console.log('')
        },
        // eslint-disable-next-line no-unused-vars
        closeCallback(vue) {
          console.log('')
        }
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,400&display=swap');

* {
  --accent: #abf5fa;
  --main: #04d3e2;
  --main-dark: #00becc;
  --main-darker: #00919c;
  --dark: #292929bc;
  --blue: #02a4af;
  --blue-dark: #00848d;
  --blue-darker: #016a72;
  --blue-darkest: #014347b5;
  --light: #e1e1e1;
  --lighter: #f1f1f1;
  --lightest: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
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
    var(--lighter) 100%
  );
  background-size: 800% 800%;
  animation: movingGradient 20s linear infinite alternate;
}
body {
  background-color: #b9f7fc;
}
#app {
  background-color: #c2f3f775;
}

h1 {
  font-family: 'lobster', cursive;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  margin: 5px;
  text-shadow: 0px 8px 20px #04d3e296, 2px 10px 30px rgba(34, 200, 250, 0.986);
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
  font-family: 'lobster', cursive;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 5px;

  background-color: var(--lightest);
  font-size: 1.5rem;
  color: #060606;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  transition: all 0.5s ease;
  box-shadow: 0 8px 18px rgba(1, 103, 110, 0.8);
}
button:hover {
  background-color: var(--accent);
  color: #060606;
  transform: scale(1.05);
  box-shadow: 0 8px 18px rgba(1, 103, 110, 0.8);
}
.btn::before,
.btn::after {
  content: '';
  display: block;
  position: absolute;
  inset: 0;
  z-index: -1;
  color: #fff;
}
.btn::after {
  background-color: #292929;
  color: #fff;
}
.btn::before {
  background-image: linear-gradient(to bottom right, #aeffb9 0%, #a091ff 100%);
  transition: transform 200ms;
}
.btn:hover::before,
.btn:focus::before {
  transform: scale(1.1);
  color: #fff;
}
</style>
