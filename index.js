//Question 1
function hasBalancedBrackets(s) {
    const stack = [];
    const brackets = { '(': ')', '[': ']', '{': '}' };

    for (const char of s) {
        if (brackets.hasOwnProperty(char)) {
            stack.push(char);
        } else if (brackets[stack.pop()] !== char) {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(hasBalancedBrackets("()"));  
console.log(hasBalancedBrackets("()[{}]"));  
console.log(hasBalancedBrackets("there (may [be] text){between [y]o[u]r (brackets)}")); 
console.log(hasBalancedBrackets(" ")); 
console.log(hasBalancedBrackets("]] [["));  


//Question 2
function timeToBuyTickets(tickets, k) {
    const n = tickets.length;
    let totalTime = 0;

    while (tickets[k] > 0) {
        for (let i = 0; i < n; i++) {
            if (tickets[i] > 0) {
                tickets[i]--;
                totalTime++;
                if (i === k && tickets[k] === 0) {
                    return totalTime;
                }
            }
        }
    }

    return totalTime;
}

const tickets = [2, 3, 2];
const k = 2;
const result = timeToBuyTickets(tickets, k);
console.log(result);  


//Question 3
function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let incorrectPositions = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            incorrectPositions++;
        }
    }

    return incorrectPositions;
}

//Example
const heights = [1, 1, 4, 2, 1, 3];
const result3 = heightChecker(heights);
console.log(result3); 


//Question 4 
function deckRevealedIncreasing(deck) {
    const n = deck.length;
    const result = new Array(n).fill(0);
    const indexQueue = Array.from({ length: n }, (_, i) => i);
    deck.sort((a, b) => a - b);

    for (const card of deck) {
        result[indexQueue.shift()] = card;
        if (indexQueue.length > 0) {
            indexQueue.push(indexQueue.shift());
        }
    }

    return result;
}

const deck = [17, 13, 11, 2, 3, 5, 7];
const output = deckRevealedIncreasing(deck);
console.log(output);  

