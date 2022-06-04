function companyU(array) {
    let listOfCompanies = {};

    for (let item of array) {
        let [company, number] = item.split(" -> ");

        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }
        if (!listOfCompanies[company].includes(number)) {
            listOfCompanies[company].push(number);
        }
    }
    let sortedCompanies = Object.keys(listOfCompanies);
    sortedCompanies.sort((a, b) => a.localeCompare(b));

    for (let singleCompany of sortedCompanies) {
        console.log(singleCompany)
        for (let employees of listOfCompanies[singleCompany]) {
            console.log(`-- ${employees}`);
        }
    }
}