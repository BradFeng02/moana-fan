<script lang="ts">
  let love_votes = 12323344;
  let hate_votes = 123424;

  function num_repr(x: number) {
    return x.toLocaleString();
  }

  $: love_votes_str = num_repr(love_votes);
  $: hate_votes_str = num_repr(hate_votes);
</script>

<main>
  <div class="heading-container">
    <!-- @TODO do we still want this underline?? -->
    <h1 class="center-lined">Welcome&nbsp;to the&nbsp;home&nbsp;of Moana's&nbsp;#1&nbsp;FAN!!</h1>
    <h1>Welcome&nbsp;to the&nbsp;home&nbsp;of Moana's&nbsp;#1&nbsp;FAN!!</h1>
  </div>
  <div id="vote-counts">
    <div id="love">
      <span class="vote-count">{love_votes_str}</span>
      <span class="vote-name">fans!</span>
    </div>
    <div id="hate">
      <span class="vote-count">{hate_votes_str}</span>
      <span class="vote-name">liars</span>
    </div>
  </div>
  <!-- <h2>I am a.....</h2>
  <div class="btns-container">
    <button class="vote-btn">Moana LOVER (yay)</button>
    <button class="vote-btn">Moana hater.. 🤥🤥</button>  
  </div> -->
</main>

<style lang="scss">
  $layout-skinny: 'only screen and (max-width: 30rem)'; // 480 px portrait
  $layout-flat: 'only screen and (max-height: 30rem)'; // 480 px landscape
  $layout-tall: 'only screen and (max-width: 50rem)'; // 800 px portrait
  $layout-short: 'only screen and (max-height: 50rem)'; // 800 px landscape

  $main-min-size: 20rem;
  $content-size: max(100vmin, $main-min-size);

  @function cs($x) {
    @return calc(($x / 100) * $content-size);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: $main-min-size;
    min-height: $main-min-size;
    padding: 1rem min(cs(3), 2rem) 5rem;
    overflow-x: hidden;
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
    font-size: min(cs(10), 3.5rem);
    padding: 0rem;

    @media #{$layout-skinny} {
      background-color: cornflowerblue;
    }
    @media #{$layout-flat} {
      background-color: goldenrod;
    }
    @media #{$layout-tall} {
      background-color: greenyellow;
    }
    @media #{$layout-short} {
      font-size: min(cs(8.5), 3rem);
      background-color: hotpink;
    }

    &.center-lined {
      position: relative;
      display: inline;
      pointer-events: none;
      user-select: none;
      color: transparent;
      left: calc(($content-size - 100%) / -2);

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 0.22rem;
        border-radius: 0.11rem;
        background-color: black;
        margin-left: calc(($content-size - 100%) / 2);
      }
    }
  }

  /* firefox digusting.... broken...... */
  @supports (-moz-appearance: none) {
    main::before {
      content: 'Moana does not like Firefox! sorry... 😢';
      opacity: 66%;
      font-size: min(cs(4.8), 1.2rem);
      padding: 0.5rem;
    }
    h1.center-lined {
      visibility: hidden;
    }
  }

  #vote-counts {
    margin: 5rem 0rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    max-width: 77rem;
    @media #{$layout-tall} {
      margin: 4rem 0rem;
      flex-direction: column;
      gap: 2rem;
    }
    @media #{$layout-short} {
      margin: 3rem 0rem;
      max-width: 55rem;
    }

    div {
      flex-grow: 1;
      text-align: center;
    }
    .vote-count {
      display: block;
      font-size: min(cs(12), 4rem);
      font-weight: bold;
      margin-bottom: 1rem;
      @media #{$layout-tall} {
        display: inline;
        margin: 0;
      }
      @media #{$layout-short} {
        display: block;
        font-size: min(cs(10), 3.5rem);
      }
    }
    .vote-name {
      display: block;
      font-size: min(cs(9), 3rem);
      font-weight: 600;
      color: black;
      @media #{$layout-tall} {
        display: inline;
        margin-left: cs(4);
      }
      @media #{$layout-short} {
        display: block;
        font-size: min(cs(7.5), 2.5rem);
      }
    }
    #love {
      color: lightseagreen;
    }
    #hate {
      color: saddlebrown;
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
