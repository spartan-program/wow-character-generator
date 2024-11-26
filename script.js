const charRaceOptions = ['Dwarf', 'Gnome', 'Human', 'Night Elf', 'Forsaken', 'Orc', 'Tauren', 'Troll'];
const charClassOptions = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];
const charNameOptions = ['Aind', 'Ainn', 'Airk', 'Aitze', 'Ald', 'Ance', 'Anxe', 'Ard', 'Ashf', 'Aulg', 'Aun', 'Aure', 'Authe', 'Baelt', 'Bakh', 'Bal', 'Balt', 'Balthe'];

let charRace = charRaceOptions[Math.floor(Math.random() * charRaceOptions.length)];
let charClass = charClassOptions[Math.floor(Math.random() * charClassOptions.length)];
let charName = charNameOptions[Math.floor(Math.random() * charNameOptions.length)];

const charReportOut = () => {
    console.log(`My name is ${charName}. I am a ${charClass}. I am of the ${charRace} race.`);
};

charReportOut();