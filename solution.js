function solution(S) {
    // Implement your solution here
    let finalSubstring = "";
    let currentSubstring = "";
    for (let i in S){
        if(/\d/.test(S[i])){
            currentSubstring = "";
        }
        else{
            currentSubstring = currentSubstring + S[i];
        }

        if (/[A-Z]/.test(currentSubstring) && currentSubstring.length > finalSubstring.length){
            finalSubstring = currentSubstring;
        }
    }

    if (finalSubstring.length > 0){
        return finalSubstring.length;
    }
    else{
        return -1;
    }
}