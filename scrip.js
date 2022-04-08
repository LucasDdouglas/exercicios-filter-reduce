
/* DESAFIO 01 */

let numbers = [20, 5, 60, 97, 107, 500, 1000, 1200]



let NewNumbers = numbers.filter(JustPair => {
    if (JustPair % 2 ==0 && JustPair % 5 ==0 ) return true
    else return false

})

console.log(NewNumbers)

/* RESULTADO */

[ 20, 60, 500, 1000, 1200 ]

/* DESAFIO 02 */

let companies = [
    { Name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", FoundeOn: 1938 },
    { Name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", FoundeOn: 1975 },
    { Name: "Intel", marketValue: 117, CEO: "Brian Krzanich", FoundeOn: 1968 },
    { Name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", FoundeOn: 2004 },
    { Name: "Spotify", marketValue: 30, CEO: "Daniel Ek", FoundeOn: 2006 },
    { Name: "Apple", marketValue: 845, CEO: "Tim Cook", FoundeOn: 1976 }
]

let NewCompanies = companies.filter(Companies =>{
 if (Companies.FoundeOn > 1975 &&  Companies.marketValue > 200) return true
 return false
})

console.log(NewCompanies)


/*  RESULTADO */

[
    { Name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', FoundeOn: 2004 },
    { Name: 'Apple', marketValue: 845, CEO: 'Tim Cook', FoundeOn: 1976 }
]


/* DESAFIO 03 */


let companies = [
    { Name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", FoundeOn: 1938 },
    { Name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", FoundeOn: 1975 },
    { Name: "Intel", marketValue: 117, CEO: "Brian Krzanich", FoundeOn: 1968 },
    { Name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", FoundeOn: 2004 },
    { Name: "Spotify", marketValue: 30, CEO: "Daniel Ek", FoundeOn: 2006 },
    { Name: "Apple", marketValue: 845, CEO: "Tim Cook", FoundeOn: 1976 }
]

let CompaniesValue = companies.reduce((acc, current) => acc + current.marketValue, 0)

console.log(`Valor de Mercado de todas as companhias juntas é de ${CompaniesValue}`)


/* RESULTADO */

Valor de Mercado de todas as companhias é de 1840