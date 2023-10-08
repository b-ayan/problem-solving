function findLongestString(strings) {
    let longestString = strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    return longestString;
}

let stringArray = ["Java", "JavaScript", "Python", "C++", "PHP"];
let longestString = findLongestString(stringArray);

console.log("Longest String:", longestString);
