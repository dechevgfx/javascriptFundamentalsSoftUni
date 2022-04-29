function maxSequence(array) {
    let maxSeq = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let currentSeq = [element]
        for (let j = i + 1; j < array.length; j++) {
            if (element == array[j]) {
                currentSeq.push(element)
            } else {

                break;
            }
        }
        if (maxSeq.length < currentSeq.length) {
            maxSeq = currentSeq
        }
    }
console.log(maxSeq.join(" "))
}
maxSeq([2,1,1,2,3,3,2,2,2,1])