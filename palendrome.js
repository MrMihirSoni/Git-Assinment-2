let palendrome = "Naman";
let palendromeChecker = "";

for(let i=palendrome.length; i>0; i--) palendromeChecker+=palendrome[i];

if(palendromeChecker===palendrome) console.log("palendrome");
else console.log("Not Palendrome");