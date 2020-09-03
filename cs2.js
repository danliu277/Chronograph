const entities = {
	fund: {
		1: { id: 1, name: 'VCPT Ventures III' },
		2: { id: 2, name: 'Huron Oak Equity V' },
		3: { id: 3, name: 'Pacific Capital Partners I' },
	},
	company: {
		15: { id: 15, name: 'FidoFarm', fund_id: 2, exited: false },
		23: { id: 23, name: 'Accumentor', fund_id: 2, exited: true },
		52: { id: 52, name: 'Dronez', fund_id: 1, exited: true },
		63: { id: 63, name: 'CoffeeBuilders', fund_id: 3, exited: false },
	},
}

// Since funds is not stored in an array but in a object we need the keys
// Convert the keys into funds
// Sort the funds using sort and a comparator
const alphabeticalFunds = () => {
    let keys = Object.keys(entities.fund)
    let funds = keys.map(key => {
        return entities.fund[key]
    })
    return funds.sort((x, y) => {
        if(x.name < y.name)
            return -1
        if(x.name > y.name)
            return 1
        return 0
    })
}

// Since companies are stored in an object we need all the keys
// Convert keys into conpanies
// Filter companies where the fund_id equals to 2
const company2Funds = () => {
    let keys = Object.keys(entities.company)
    let companies = keys.map(key => {
        return entities.company[key]
    })
    return companies.filter(company => company.fund_id === 2)
}

// Get companies and funds inside an array
// Filter companies by checking exited
// Map result to fund_id
// Remove duplicates
// Map to funds
const fundsWithExitedCompany = () => {
    let keys = Object.keys(entities.company)
    let companies = keys.map(key => {
        return entities.company[key]
    })

    companies = companies.filter(company => company.exited)
    companies = companies.map(company => company.fund_id)
    companies = companies.filter((fund_id, index) => {
        return companies.indexOf(fund_id) === index;
    });

    return companies.map(fund_id => entities.fund[fund_id])
}