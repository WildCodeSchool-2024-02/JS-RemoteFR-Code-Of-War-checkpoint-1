/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des devs web seniors
- Le second ne contient que des data analysts seniors
(Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)


*/
const persons = [
  { name: 'Mary', experience: 2, job: 'web dev' },
  { name: 'Tony', experience: 6, job: 'data analyst' },
  { name: 'John', experience: 2, job: 'data analyst' },
  { name: 'Jane', experience: 6, job: 'web dev' },
  { name: 'Maggie', experience: 2, job: 'web dev' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'data analyst' },
  { name: 'Mickael', experience: 7, job: 'web dev' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
  { name: 'Homer', experience: 5, job: 'data analyst' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'web dev' },
  { name: 'Lisa', experience: 3, job: 'web dev' },
  { name: 'Millie', experience: 5, job: 'data analyst' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
];

function findSeniors(persons) {
  // créer les nouveaux tableaux
  const devWebSeniors = [];
  const dataAnalystSeniors = [];

  // utiliser foreach
  persons.forEach(person => {
    // condition experience >=5
    if (person.experience >=5 ){
      // condition job = web dev
      if (person.job === "web dev"){
        // on push la data sur le tableau
        devWebSeniors.push(person);
      } else if (person.job === "data analyst"){
        dataAnalystSeniors.push(person);
      }
    }
  });
  // retorne les tableaux
  return [devWebSeniors, dataAnalystSeniors];
}

module.exports = findSeniors;
