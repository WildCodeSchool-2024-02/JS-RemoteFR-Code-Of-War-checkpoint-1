/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/
// "a" et "b" sont les valeurs respectivement de 2 angles du triangle donc a+b+3rd triangle = 180
function thirdAngle(a, b) {
  return 180-(a+b);
}

module.exports = thirdAngle;
