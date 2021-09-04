var obj = {​
        "{​": "}​",
        "[": "]",
        "(": ")"
}​

function check(input){​
    let stack = []
    let character
    for(let i = 0; i < input.length; i++){​
        if(obj[input[i]]){​
            stack.push(input[i])
        }​
        else {​
            character = stack.pop()
            if(obj[character] !== input[i]){​
                return false
            }​
        }​
    }​
    return stack.length === 0 ? true: false
}​

exp = "{​[({​}​)]}​[]"
invaid = "{​[(])}​"

edgecase = "}()"

check(exp)
check(invaid)