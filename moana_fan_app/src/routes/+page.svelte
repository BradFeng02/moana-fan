<main>
  <div class="heading-container">
    <!-- @TODO do we still want this underline?? -->
    <h1 class="center-lined">Welcome&nbsp;to&nbsp;the&nbsp;home of&nbsp;Moana's&nbsp;#1&nbsp;FAN!!</h1>
    <h1>Welcome&nbsp;to&nbsp;the&nbsp;home of&nbsp;Moana's&nbsp;#1&nbsp;FAN!!</h1>
  </div>
  <h2>I am a.....</h2>
  <div class="btns-container">
    <button class="vote-btn">Moana LOVER (yay)</button>
    <button class="vote-btn">Moana hater.. 🤥🤥</button>  
  </div>
</main>

<style lang="scss">
  $size-skinny: "only screen and (max-width: 30rem)"; // 480 px
  $size-medium: "only screen and (max-width: 50rem)"; // 800 px
  // @TODO flat?? like landscape mode

  $main-min-width: 20rem;
  $content-width: max(100vw, $main-min-width);

  @function cw($x) {
    @return calc(($x / 100) * $content-width);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: $main-min-width;
    padding: 1rem min(cw(3), 2rem) 5rem;
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
    font-size: min(cw(8), 3rem);
    padding: 0rem;
  }

  h1.center-lined {
    position: relative;
    display: inline;
    pointer-events: none;
    user-select: none;
    color: transparent;
    left: calc(($content-width - 100%)/-2);

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: .22rem;
      border-radius: .11rem;
      background-color: black;
      margin-left: calc(($content-width - 100%)/2);
    }
  }

  /* firefox digusting.... broken...... */
  @supports (-moz-appearance:none) {
    main::before {
      content: 'Moana does not like Firefox! sorry... 😢';
      opacity: 66%;
      font-size: min(cw(4.8), 1.2rem);
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
     @media #{$size-skinny} {
      background-color: blueviolet;
    }
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