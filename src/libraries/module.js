var name;


export class Employee {
    firstName="Naveen";
    lastName="Bolka";
    Designation="Software Developer";
    Details(){
        return `First Name = ${this.firstName} <br> Last Name = ${this.lastName} <br> Proffesion = ${this.Designation}`;
    }
}