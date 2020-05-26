<template>
  <div class="screen vllttch-blue" id="contact">
   <div class="title-div">
    <p class="lets">Let's connect</p>
   </div>
   <div class="form-container">
     <form
      action="https://mailthis.to/hollis.d.vallotton@gmail.com"
      method="POST"
      enctype="multipart/form-data"
     >
      <div class="input-container">
        <span class="floating-label">Your name</span>
        <input class="form-input" type="text" name="name"/>
      </div>
      <div class="input-container">
        <span class="floating-label">Your email</span>
        <input class="form-input" type="email" name="_replyto" required/>
      </div>
      <div class="input-container">
        <span class="floating-label">Your message here</span>
        <textarea class="form-input" name="message" required></textarea>
      </div>
      <input type="hidden" name="_subject" value="Contact form submitted" />
      <input type="hidden" name="_after" value="https://hollisvallottondev.github.io/#/contact/" />
      <input type="hidden" name="_honeypot" value />
      <input type="hidden" name="_confirmation" value />
      <input type="submit" class="send-button form-input" value="Send" />
    </form>
    </div>
    <div class="links-container">
      <div class="or-container">
        <p class="or">Or find me on:</p>
      </div>
    <div class="icons-container">
      <div class="icon-div">
       <svg fill="#C49EB7" xmlns="http://www.w3.org/2000/svg" width="calc(3vw + 3vh)" height="calc(3vw + 3vh)" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
       <p class="icon-text">LinkedIn</p>
      </div>
      <div class="icon-div">
       <svg fill="#C49EB7" xmlns="http://www.w3.org/2000/svg" width="calc(3vw + 3vh)" height="calc(3vw + 3vh)" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
       <p class="icon-text">Github</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: 'Contact'
    }
  }
}
</script>

<style scoped>
#contact {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form-container {
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
form {
  display: flex;
  flex-direction: column;
  padding: calc(1vw + 1vh);
  justify-content: space-between;
  width: 90%;
  height: 90%;
}
textarea {
  resize: none;
  height: 15vh;
  overflow: auto;
}
.input-container{
  display: flex;
  flex-direction: column;
}

.form-input {
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  font-family: var(--font-family);
  margin-bottom: calc(2vw + 2vh);
  font-size: 1em;
}

.form-input:focus {
  border: none;
  border-bottom: 1px solid var(--light-pink);
  outline: none;
}

.floating-label {
  pointer-events: none;
  transition: 0.2s ease all;
  color: white;
  align-self: flex-start;
  font-size: 0.75em;
  margin-bottom: 5px;
}

/* .form-input:focus ~ .floating-label,
.form-input:not(:focus):valid ~ .floating-label{
  font-size: 11px;
  opacity: 1;
} */

p {
  color: white;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 40px;
}

.or-container {
  flex: 1;
  width: 100%;
}
.icons-container {
  display: flex;
  justify-content: center;
  align-self: center;
  flex: 4;
  padding-top: 5px;
}
.icon-div {
  flex: 1;
  padding: 10px 20px 20px 20px;
}
.send-button {
  padding: 1vh 1vw;
  color: white;
  background-color: var(--light-pink);
  align-self: flex-end;
  justify-self: flex-end;
  border: none;
  width: 25vw;
  height: 5vh;
  font-family: var(--font-family);
  font-size: 1em;
  font-weight: 100;
  margin: 0;
}
.or {
 font-size: 1.25em;
 font-weight: 100;
 margin: 0;
}
.icon-text {
  font-size: 1em;
  font-weight: 100;
  margin: 0;
}
.lets {
  font-size: 1.75em;
  font-weight: 100;
  margin: 0;
}

.links-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 2;
}

.title-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding-top: 12vh;
}
</style>
