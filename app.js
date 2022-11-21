// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var Kalvian1 = "harish";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(Kalvian1);
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var Kalvian2 = "raibachan";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(Kalvian2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
function length (string){
    var i = 0;
    while(string[i]!=null)
    {
        i++
    }
    return i;
}
if(length(Kalvian2)>length(Kalvian1))
{
    console.log("The navigator has the longest name, it has ", length(Kalvian2), " characters.")
}
else{
    console.log("The driver has the longest name, it has ", length(Kalvian1), " characters.")
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
    function checkVowels(string)
    {
        for(i = 0 ; i<length(string) ; i++)
        {
            if(string[i]=='a' || string[i]=='e' ||string[i]=='i' ||string[i]=='o' ||string[i]=='u')
            {
                console.log(i)
            }
        }
        for(i = 0 ; i<length(string) ; i++)
        {
            if(string[i]=='a' || string[i]=='e' ||string[i]=='i' ||string[i]=='o' ||string[i]=='u')
            {
                console.log(string[i]);
            }
        }
    }

    checkVowels(Kalvian2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function checkcase(string)
{
    var up=0;
    var low=0;
    for(i=0; i<length(string);i++)
    {
        if(string[i] == 'a' || string[i] == 'b' ||string[i] == 'c' ||string[i] == 'd' ||string[i] == 'e' ||string[i] == 'f' ||string[i] == 'g' ||string[i] == 'h' ||string[i] == 'i' ||string[i] == 'j' ||string[i] == 'k' ||string[i] == 'l' ||string[i] == 'm' ||string[i] == 'n' ||string[i] == 'o' ||string[i] == 'p' ||string[i] == 'q' ||string[i] == 'r' ||string[i] == 's' || string[i] == 't' ||string[i] == 'u' ||string[i] == 'v' ||string[i] == 'w' ||string[i] == 'x' || string[i] == 'y' ||string[i] == 'z' )
        {
            low++;
        }
        else
        {
            up++;
        }
    }
    console.log(up,low)
}
checkcase("Good");

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
for(i=0;i<length(Kalvian1);i++)
{
    console.log((Kalvian1[i]).toUpperCase())
}
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
for(i=length(Kalvian2);i>=0;i--)
{
    console.log(Kalvian1[i])
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
var merged = Kalvian1 + Kalvian2;
merged = Kalvian2 + Kalvian1;
console.log(merged)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?




// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
console.log(length(lorem))
var count=0;
for( i=0 ; i<length(lorem) ; i++)
{
    if((lorem[i]=='e' && lorem[i+1]=='t') || (lorem[i]='t' && lorem[i-1])=='e' )
    {
        count++
    }
}
console.log(count)
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
var phrase = "stack cats";
for(j = length(phrase)-1;j>=0;j--)
{
    var rev;
    rev += phrase[j]
}
if(rev==phrase)
{
    console.log("palindrome")
}

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
