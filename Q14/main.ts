let guestList: string[] = ["Imran Khan", "Nawaz Sharif", "IMF"];

console.log(`${guestList[1]} can't make it to the dinner.`);

guestList[1] = "Gen. Asim Munir"; // IMF with Gen. Asim Munir

for (let person of guestList) {
  console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for an evening of great food and fascinating conversations.`);
}
export{}