
import { hover } from '@testing-library/user-event/dist/hover';
import Person from './Person';

function PeopleList() {

    const people = [{name: 'Jakub', age: 15 }, { name: 'Maciek', age: 48}, {name: 'Bartek', age: 22}]

    const filteredPeople = people.filter((person) => person.age >= 18)

    function hoverPerson() {
        console.log("nie najechano na osobe")
    }

    return <div className="wrapper">{filteredPeople.map((person, index) => {
    return <Person className="person" key={index} name={person.name} age={person.age} fun={hoverPerson}><p>Cos</p></Person>
    })}</div>
}

export default PeopleList