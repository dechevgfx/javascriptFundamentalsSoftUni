function lastNKElement(n, k) {
    let seq = [1]
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k)
        let end = current
        let previousK = seq.slice(start, end)
        let sum = 0
        for (let i = 0; i < previousK.length; i++) {
            sum += previousK[i]
        }
        seq[current] = sum

    }
    console.log(seq.join(" "))
}
lastNKElement(6, 3)