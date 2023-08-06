var person1 = {
    name: 'Dev',
    age: 34,
    sports: ['Cricket', 'Table TEnnis']
};
// Array to store values of type string 
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person1.name);
for (var _i = 0, _a = person1.sports; _i < _a.length; _i++) {
    var sport = _a[_i];
    console.log(sport.toUpperCase());
}
