function sub(string, stringSeq) {
    let str = string.toLowerCase();
    let seq = stringSeq.toLowerCase().split(" ");
    if (seq.includes(str)) console.log(str)
    else console.log(`${str} not found!`);
}
sub("goshO", "gogo gogi gigi gkgk gk gk sjf snjfn kfnk ")