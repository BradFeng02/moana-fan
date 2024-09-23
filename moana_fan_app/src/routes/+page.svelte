<script lang="ts">
  export let data;

  let love_votes = 12323344;
  let hate_votes = 123424;

  function num_repr(x: number) {
    return x.toLocaleString();
  }

  $: love_votes_str = num_repr(love_votes);
  $: hate_votes_str = num_repr(hate_votes);

  const default_name = data.random_name;
  let vote_name = '';
  $: vote_name, console.log(vote_name + ' ' + !!vote_name.trim());

  function vote_name_onblur() {
    vote_name = vote_name.trim();
  }

  function vote_name_onkeydown(e: KeyboardEvent) {
    if (!e.shiftKey && e.key === 'Enter' && e.target instanceof HTMLElement) {
      e.target.blur();
    }
  }
</script>

<main>
  <div id="heading-container">
    <!-- @TODO do we still want this underline?? -->
    <h1 id="center-lined">Welcome&nbsp;to the&nbsp;home&nbsp;of Moana's&nbsp;#1&nbsp;FAN!!</h1>
    <h1>Welcome&nbsp;to the&nbsp;home&nbsp;of Moana's&nbsp;#1&nbsp;FAN!!</h1>
  </div>
  <div id="vote-counts">
    <div id="love">
      <span class="vote-count">{love_votes_str}</span>
      <span class="vote-type">fans</span>
    </div>
    <div id="hate">
      <span class="vote-count">{hate_votes_str}</span>
      <span class="vote-type">liars..</span>
    </div>
  </div>
  <div id="voting-container">
    <div id="vote-name-container">
      <div id="name-row">
        <span class="name-message" id="name-start">My name is</span>
        <input
          class="name-message"
          id="name-input"
          type="text"
          maxlength="50"
          spellcheck="false"
          placeholder={default_name}
          bind:value={vote_name}
          on:blur={vote_name_onblur}
          on:keydown={vote_name_onkeydown}
        />
        <span class="name-message in-row" id="name-end">and I am a Moana...</span>
      </div>
      <span class="name-message out-row" id="name-end">and I am a Moana...</span>
    </div>
    <div id="vote-buttons">
      <!-- <button class="vote-btn">Moana&nbsp;LOVER&nbsp;(yay)</button>
      <button class="vote-btn">Moana&nbsp;hater..&nbsp;🤥&#8288;🤥</button> -->
      <button class="vote-btn">LOVER!</button>
      <button class="vote-btn">Hater</button>
    </div>
  </div>
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

  #heading-container {
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

    &#center-lined {
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

    > div {
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
    .vote-type {
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
  }

  #love {
    color: lightseagreen;
  }
  #hate {
    color: saddlebrown;
  }

  #voting-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0rem 0.5rem;
  }

  #vote-name-container {
    margin: 0rem;
    margin-bottom: min(cs(5), 2rem);
    text-align: left;
    width: 100%;
  }

  #name-row {
    display: table;
  }

  #name-start {
    display: table-cell;
    white-space: nowrap;
    padding-right: min(cs(2), 0.66rem);
  }

  #name-end.in-row {
    display: table-cell;
    white-space: nowrap;
    padding-left: min(cs(2), 0.66rem);
    @media #{$layout-tall} {
      display: none;
    }
  }

  #name-end.out-row {
    display: none;
    white-space: nowrap;
    margin-top: min(cs(1), 0.4rem);
    @media #{$layout-tall} {
      display: block;
    }
  }

  #name-input {
    display: table-cell;
    outline: none;
    border: none;
    box-shadow: inset 0px -0.123rem black;
    padding: 0;
    padding-left: min(cs(1), 0.4rem);
    padding-right: min(cs(1), 0.4rem);
    width: 100%;
    max-width: 20rem;
    // 'Handwritten' from https://modernfontstacks.com/
    font-family: 'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive;
    font-weight: bold;
    &::placeholder {
      color: #909090;
    }
  }

  .name-message {
    font-size: min(cs(6), 2rem);
    line-height: normal;
  }

  #vote-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: min(cs(5), 2rem);
    padding: 0rem;
    width: 100%;
  }

  .vote-btn {
    flex-grow: 1;
    font-size: min(cs(7.5), 2.5rem);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: min(cs(20), 7rem);
    max-width: min(cs(60), 21rem);
    background-color: transparent;
    border: 0.2rem solid black;
    cursor: pointer;
  }
</style>
