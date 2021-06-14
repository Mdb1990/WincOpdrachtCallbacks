/** @format */

const huisWerkMaken = (vak, callback) => {
  console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
  setTimeout(klaarMetHuiswerk, 2000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huisWerkMaken("wiskunde", klaarMetHuiswerk);
