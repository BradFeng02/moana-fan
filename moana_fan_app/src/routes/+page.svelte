<main>
  <div class="heading-container">
    <h1 class="center-lined">Welcome to the home of Moana's #1 FAN!!</h1>
    <h1>Welcome to the home of Moana's #1 FAN!!</h1>
  </div>
  <h2>I am a.....</h2>
  <div class="btns-container">
    <button class="vote-btn">Moana LOVER (yay)</button>
    <button class="vote-btn">Moana hater.. 🤥🤥</button>  
  </div>
</main>

<style>
  :root {
    --min-wid: 320px;
    --min-vw: max(100vw, var(--min-wid))
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: var(--min-wid);
    padding: 0rem 1rem 5rem 1rem;
  }

  .heading-container {
    margin: 1rem 0rem 0rem 0rem;
    position: relative;
  }

  h1 {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    text-align: center;
    vertical-align: middle;
  }

  h1.center-lined {
    position: relative;
    display: inline;
    pointer-events: none;
    user-select: none;
    color: transparent;
    left: calc((var(--min-vw) - 100%)/-2);
  }

  h1.center-lined::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: .22rem;
    border-radius: .11rem;
    background-color: black;
    margin-left: calc((var(--min-vw) - 100%)/2);
  }

  /* firefox digusting.... broken...... */
  @supports (-moz-appearance:none) {
    main::before {
      content: 'Moana does not like Firefox! sorry... 😢';
      opacity: 66%;
      font-size: 1.2rem;
      padding: .5rem;
    }
    h1.center-lined {
      visibility: hidden;
    }
  }

  h2 {
     text-align: center;
     vertical-align: middle;
     font-size: 1.7rem;
     margin: 2.5rem 0rem 2rem 0rem;
  }

  .btns-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem 2rem;
    gap: 2rem;
  }

  .vote-btn {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    cursor: pointer;
    width: 100%;
  }
</style>