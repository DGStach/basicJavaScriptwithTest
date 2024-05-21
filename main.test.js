const {spreadUpdatingObjectsFun, spreadUpdatingObjects} = require('./main.js');
const {spreadOperAddingElements, spreadOperAddingElementsFun} = require("./main.js")


test('spreadUpdatingObjectsFun should update firsLowerLetter to "a"', ()=>{
    const result = spreadUpdatingObjectsFun();
    expect(result).toEqual({ firsUpperLetter: 'A', firsLowerLetter: 'a' });
});

test('spreadUpdatingObjects should be the updatd object', ()=>{
    const result = spreadUpdatingObjects;
    expect(result).toEqual({ firsUpperLetter: "A", firsLowerLetter: "a" })
});

test('spreadUpdatingObjectsFun should add elements correctly ',()=>{
    const result = spreadOperAddingElementsFun();
    expect(result).toEqual(["AA", "A","B","C","CC"]);
})
