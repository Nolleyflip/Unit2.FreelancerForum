// alert('The average starting price is:'${averagePrice})

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
  ];

const others = [
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Prof. Prism", price: 90, occupation: "teacher" },
    { name: "Dr. Impulse", price: 110, occupation: "teacher" },
    { name: "Prof. Spark", price: 130, occupation: "programmer" },
    { name: "Dr. Wire", price: 150, occupation: "teacher" },
    { name: "Prof. Goose", price: 170, occupation: "driver" },
];

let averagePrice = 0;

function newFreelancers (freelancer) {
    
    const row = document.createElement('tr')
    
    const name = document.createElement('td')
    name.textContent = freelancer.name

    const occupation = document.createElement('td')
    const price = document.createElement('td')

    name.appendChild('tr')
}

console.log(freelancer)
