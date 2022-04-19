function reading(currentBookPages, pagesPerHour, daysToReadTheBook){
    let neededTime = (currentBookPages/pagesPerHour) / daysToReadTheBook
    console.log(neededTime)
}
reading(212,20,2)