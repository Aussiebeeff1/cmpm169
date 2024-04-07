// project.js - Project 1 Rattat Adventures 
// Author: Austin Chen
// Date: 4/7/2024

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class

function main() {

const fillers = {
  adventurer: ["Powder", "Luna", "Chia", "Maple", "Brie", "Puff", "Potato", "Rats", "老鼠"],
  murders: ["murders", "killings", "slughters", "carnages", "assasinations", "destructions"],
  disturbing: ["uncomfortable", "disturbing", "annoyance", "violent", "噁心"],
  mysterious: ["mysterious", "strange", "weird","uneasy", "unorthadoxed", "irksome", "奇怪"],
  neighborhood: ["community", "land", "neighborhood", "world", "area", "district", "zone", "地區"],
  item: ["axe", "staff", "rat trap", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "cheese", "potato", "武器"],
  scarce: ["scarce", "little to be known", "unknown", "broken puzzles", "little", "small", "being figured out", "unspecified", "不明"],
  larger: ["big", "huge", "bigger", "larger", "humongous", "vast", "immense", "更大"],
  message: ["calling", "message", "cheese", "words", "shoutz", "tweets", "Lines",  ".... wait you're not trying to leave are you?", "...wait, no! Come back", "語言"],
  
};

const template = `$adventurer, heed my $message!

Attention All Rat Residents! 


Dear $adventurer,

We regret to inform you of a $disturbing development in our community. Reports have surfaced regarding a $mysterious series of rat $murders that have been taking place in various parts of our $neighborhood. 
Details are still $scarce, but it appears that these incidents are not isolated and may be connected to a $larger, more sinister plot. Remain vigilant and take necessary precautions to ensure their safety and that of their loved ones.

Here's an $item for your journey!


`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();
  
}

// let's get this party started - uncomment me
main();