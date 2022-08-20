var carObject ={
    vehicle: 'car',
    imageUrl:"https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    fareperkilo: 3,
    capacity: 4,
    description: "lfdjfhuasdfhjsdfndjnd dn ff ij know for somme reason that this is complete shit but I still do it. Even though I know that its not something that I would like to "
};

var bikeObject = {
    vehicle: "Bike",
    imageUrl:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80",
    fareperkilo: 3,
    capacity: 2,
    description: "I don't know why lorem is not working on this one but heck i need to change this it's getting ridiculous as it can get"
}
var busObject = {
    vehicle: "Bus",
    imageUrl:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    fareperkilo: 10,
    capacity: 20,
    description: "I don't know why lorem is not working on this one but heck i need to change this it's getting ridiculous as it can get"
}

function displayServices(service){
    console.log("helloe")
    const mainSection = document.getElementById('card-section');

    const div = document.createElement('div');
    div.classList.add('card', 'mb-3');
    // div.classList.add('mb-3');


    div.innerHTML = `
  
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${service.imageUrl}" class="img-fluid rounded-start card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">Transport Mood : ${service.vehicle}</h3>
          <p class="card-text">${service.description}</p>
          <div class="d-flex justify-content-between">
            <h5>Fare per kilo:${service.fareperkilo}</5>
            <h5>Capacity: ${service.capacity}</h5>
          </div>
          <button class="btn btn-info">Book now</button>
        </div>
      </div>
    </div>
  
 `

    mainSection.appendChild(div);

}

displayServices(busObject);
displayServices(bikeObject);
displayServices(carObject);