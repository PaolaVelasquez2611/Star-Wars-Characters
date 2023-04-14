export default async function getApi() {

    try {
        const array = [];
        for (let index = 1; index < 5; index++) {
            const starWarsCaracter = await (await fetch("https://swapi.dev/api/people/" + index)).json()
            array.push(starWarsCaracter)
        }
        console.log(array)
        return array

    }

    catch (error) {
        console.log("there has been an error")

    }


}