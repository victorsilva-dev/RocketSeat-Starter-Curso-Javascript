var usuarios = [
    { nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"] },
    { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }];

function printarNomesEHabilidades() {
    for (const pessoa of usuarios) {
        var stringPessoa = "O " + pessoa.nome + " possui as habilidades: " + pessoa.habilidades.join(", ")
        console.log(stringPessoa)
    }
}
printarNomesEHabilidades()

