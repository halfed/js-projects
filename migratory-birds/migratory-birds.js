// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    //EXAMPLE arr = [1, 3, 14, 1, 3, 14, 1]
    //CREATE AN OBJECT TO STORE THE arr ARRAY ITEMS BY ID AND HOW MANY TIMES THEY ARE IN THE ARRAY
    const resultObj = {};

    //LOOP THROUGH THE OBJECT AND GET HOW MANY TIMES EACH ONE EXISTS IN THE arr ARRAY
    // THE ORDERING HELPS IN CASE WE HAVE A 2:3, 5:3, 1:2, 3:2 SCENARIO THEN 2:3 WOULD BE WHAT WE WANT
    arr.forEach(x=>{if(typeof(resultObj[x]) === 'undefined')  resultObj[x]=0; resultObj[x]++;});

    //WE NEED TO GET ALL COUNTS FOR EACH ITEM THAT APPEARS MORE THAN ONCE
    const sum = Object.keys(resultObj)
        .map(val => {return resultObj[val];})
        .filter(value => value > 1);

    //WE WILL TEST TO SEE IF THE COUNTS ARE THE SAME, IF SO THEN WE WILL NEED TO DETERMINE THE LOWEST ITEM AS PER 
    //THE DIRECTIONS
    const testSum = sum.every((x, index, arr) => x === arr[0]);

    function getKeyByValue(object, value) { 
        return Object.keys(object).find(key => object[key] === value); 
    }

    //IF THE TEST SUM IS NOT EQUAL THEN ONE ITEM IN THE LIST HAS MORE COUNTS SO THAT ONE IS THE 
    //ONE THAT WE WILL RETURN
    //CONSOLE LOGS ARE HERE TO TEST IN A BROWSER CONSOLE OR A JS SANDBOX
    if(!testSum) {
        const max = Math.max(...sum);
        const returnKey = getKeyByValue(resultObj, max);
        console.log(returnKey);
        return returnKey;
    }else {//ALL THE COUNTS ARE THE SAME SO WE WILL FIND THE LOWEST ITEM IN THE LIST 
        const sameSum = Object.keys(resultObj)
            .filter(val => { if(resultObj[val] > 1) {return val;}});
        const min = Math.min(...sameSum);
        console.log(min);
        return min;
    }
}