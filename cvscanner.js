console.log("Welcome to CV Scanner Applications");

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Vinay Kumar',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/81.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Javascript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
        name: 'Asha Bhat',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/87.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
        name: 'Bhuvan Sharma',
        age: 28,
        city: 'Pune',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    {
        name: 'Mohit Sharma',
        age: 29,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
        name: 'Surya Pawar',
        age: 21,
        city: 'Hyderabad',
        language: 'Javascript',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        name: 'Amrita Desai',
        age: 25,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/97.jpg'
    },
    {
        name: 'Mohan Banu',
        age: 24,
        city: 'Chennai',
        language: 'Javascript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/99.jpg'
    }
]


// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

// Candidates
let candidates = cvIterator(data);

nextCV();

// Event Listener for Next Button
let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", nextCV);

function nextCV() {
    let currentCandidate = candidates.next().value;

    let profilePicture = document.getElementById("image");
    let profileData = document.getElementById("profile");

    if (currentCandidate != undefined){
    profilePicture.innerHTML = `<img class="card-img-top" src="${currentCandidate.image}" alt="Card image cap">`;
    profileData.innerHTML = `<ul class="list-group list-group-flush">
                                <li class="list-group-item"><h5>${currentCandidate.name}</h5></li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Uses ${currentCandidate.framework} Framework</li>
                            </ul>`;
                        } else {
                            alert("End of Applications");
                            window.location.reload();
                        }
}
