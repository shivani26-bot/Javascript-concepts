// 1. string length
let str = "Hello, world!";
console.log(str.length);
// 2. string concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
// 3. string to uppercase
let str3 = "hello world!";
console.log(str3.toUpperCase());
// 4. string to uppercase
let str4 = "HELLO WORLD";
console.log(str3.toLowerCase());
// 5. string includes
// to check whether a string is included in another string or not returns true or false
let str5 = "Hello , World!";
console.log(str5.includes("Hello")); //true
console.log(str5.includes("hello")); //false

// 6. string startsWith
let str6 = "Hello , World!";
console.log(str5.startsWith("Hello")); //true

// 7. string endsWith
let str7 = "Hello , World!";
console.log(str7.endsWith("Hello")); //false
console.log(str7.endsWith("World!")); //true

// 8. extracting substring
let str8 = "Hello, World!";
console.log(str8.substring(0, 5)); // "Hello"

// 9. string indexOf
// it returns the index of the first occurrence of a specified value in a string
// if the value is not found, it returns -1
let str9 = "Hello, World!";
console.log(str9.indexOf("o"));
console.log(str9.indexOf("Hello"));

// 10.string lastindexof
let str10 = "Hello, World! Hello, World!";
console.log(str10.lastIndexOf("H"));

// 11. splitting string

// split() method splits a string into an array of substrings based on a specified delimiter
// it returns an array containing the split substrings
let str11 = "Hello, World!";
console.log(str11.split(", ")); //[ 'Hello', 'World!' ]
console.log(str11.split(" ")); // [ 'Hello,', 'World!' ]
console.log(str11.split(" !")); // [ 'Hello, World!' ]

// 12. joining strings
// join() method joins all elements of an array into a string
// it returns a string that is the concatenation of all elements in the array
let arr = ["Hello", "World"];
console.log(arr.join(" ")); // "Hello World"
console.log(arr.join(", ")); // "Hello, World"

// 13. replacing substring
// replace() method replaces a specified value with another value in a string
// it returns a new string with the replaced value
let str12 = "Hello, World!";
console.log(str12.replace("Hello", "Hi")); // "Hi, World!"
console.log(str12.replace("World", "Universe")); // "Hello, Universe!"

// 14. trimming whitespaces
// trims white spaces from starting and ending of string
let str13 = "   Hello, World!   ";
console.log(str13);
console.log(str13.trim()); // "Hello, World!"

// 15. padding string start
// padStart() method adds specified text to the start of a string until the specified length
// it returns a new string with the specified text added to the start of the original string
let str14 = "Hello";
console.log(str14.padStart(10, "-")); // "----Hello"

// 16. padding string end
// padEnd() method adds specified text to the end of a string until the specified length
// it returns a new string with the specified text added to the end of the original string
let str15 = "Hello";
console.log(str15.padEnd(10, "-")); // "Hello-----"

// 17. starting fromCharCode
// char codes ko string mei convert kr skte hai
// create a string from Unicode values
let str16 = String.fromCharCode(45, 72, 78, 101, 110);
console.log(str16);

// 18.character at specific index
let str17 = "Hello, World!";
console.log(str17.charAt(7)); // "o"

// 19. char code at specific index
// string ke specified index pr character ka char code nikaal skte hai

let str18 = "Hello, World!";
console.log(str18.charCodeAt(7)); // 87

// 20. string repeat
// repeat() method creates a new string that contains the specified number of copies of the original string
// it returns a new string with the specified number of copies of the original string
let str19 = "Hello";
console.log(str19.repeat(3)); // "HelloHelloHello"

// string raw
// String.raw is a special tag function that returns the raw string, meaning it ignores escape sequences and returns the string exactly as written, without interpreting special characters like \n (newline) or \\ (escaped backslash).
let str20 = String.raw`Hello\\n World`;
console.log(str20);

// Template literals
let name = "World";
let greeting = `Hello, ${name}!`;
console.log(greeting);

// String slice
let str21 = "Hello, World!";
console.log(str21.slice(0, 5));

// difference between slice and substring in javascript
// slice():
// Negative indices can be used to count from the end of the string.
// If the startIndex is greater than the endIndex, it returns an empty string

// substring():
// It does not support negative indices; if you provide negative values, they are treated as 0.
// If the startIndex is greater than the endIndex, it swaps the two indices, effectively behaving as if you called substring(endIndex, startIndex).

let str22 = "Hello, World!";

// Using slice()
console.log(str22.slice(7, 12)); // Output: "World"
console.log(str22.slice(-6)); // Output: "World!"
console.log(str22.slice(12, 7)); // Output: "" (empty string)

// Using substring()
console.log(str22.substring(7, 12)); // Output: "World"
console.log(str22.substring(-6)); // Output: "Hello, World!" (treated as 0)
console.log(str22.substring(12, 7)); // Output: "World" (indices are swapped)

// String search
// to search a specific value in the string and return it's index

let str23 = "Hello, World!";
console.log(str23.search("World")); // Output: 7

// String match
// search a string for a pattern, returning the matched results as an array. It can be used to match a regular expression or simply a substring within a string.
// string.match(regexp);
// The behavior of match() depends on whether the regexp parameter has the global (g) flag set or not:

// If the g flag is not set:
// The method returns the first match as an array with additional properties (index, input).
// If no match is found, null is returned.
// If the g flag is set:
// The method returns an array of all matches found in the string.
// If no match is found, null is returned.
let str24 = "Hello, world!";

// Match the first occurrence of "world"
let result = str24.match(/world/);
console.log(result);
// Output: [ 'world', index: 7, input: 'Hello, world!', groups: undefined ]

// Match the first occurrence of "o"
result = str24.match(/o/);
console.log(result);
// Output: [ 'o', index: 4, input: 'Hello, world!', groups: undefined ]

let str25 = "Hello, world!";

// Match all occurrences of "o"
let result1 = str25.match(/o/g);
console.log(result1);
// Output: [ 'o', 'o' ]

// string match all
// all matches of a regular expression in a string, including capture groups. Unlike match(), which either returns the first match or an array of all matches (when the g flag is set), matchAll() provides an iterator that returns detailed information about each match, such as the capture groups and the index of the match.

let str26 = "test1 test2 test3";
let matches = [...str.matchAll(/test\\d/g)];
console.log(matches);

// replace all

let str27 = "test1 test2 test3";
let newStr = str27.replaceAll("test", "exam");
console.log(newStr);

// string localecompare
// used to compare two strings in a way that is sensitive to the locale (language and region) and collation rules (sorting order) of a given language
// -1: If string1 comes before string2 in the specified locale.
// 0: If string1 and string2 are considered equal.
// 1: If string1 comes after string2.
// string1.localeCompare(string2, [locales], [options])
//locales (optional): A locale string or array of locale strings that define the language/region (e.g., "en", "fr", "de-DE").
// options (optional): An object that defines comparison behavior, such as sensitivity to accents, case, etc.

let str28 = "a";
let str29 = "b";

console.log(str28.localeCompare(str29)); // Output: 0

// string normalize
// used to convert Unicode strings into a specific form of Unicode Normalization. Unicode characters can sometimes have multiple representations, such as precomposed characters (like é) or decomposed characters (like e followed by a combining accent).
// string.normalize([form]);
// form (optional): A string representing the normalization form to use. The default is "NFC". Possible values:
// "NFC" (Normalization Form C): Canonical Composition.
// "NFD" (Normalization Form D): Canonical Decomposition.
// "NFKC" (Normalization Form KC): Compatibility Composition.
// "NFKD" (Normalization Form KD): Compatibility Decomposition.
let str30 = "café"; // Composed character
let normalizedStr = str30.normalize("NFC");
console.log(normalizedStr); // Output: true (They are now the same)
