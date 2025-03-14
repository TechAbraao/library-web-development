import Person from "../models/Person.js"


export default function incrementPerson(req, res) {
    res.status(200).send("oi")
    console.log(Person)
}