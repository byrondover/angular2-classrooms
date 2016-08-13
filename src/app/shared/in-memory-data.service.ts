export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    let students = [
      {id: 11, first_name: "Porter", last_name:"Torres", gender: "Male"},
      {id: 12, first_name: "Mal", last_name:"Brock", gender: "Male"},
      {id: 13, first_name: "Susan", last_name:"French", gender: "Female"},
      {id: 14, first_name: "Koby", last_name:"Bell", gender: "Male"},
      {id: 15, first_name: "Molly", last_name:"Burke", gender: "Female"},
      {id: 16, first_name: "Haley", last_name:"White", gender: "Female"}
    ];
    return {
      heroes,
      students
    };
  }
}
