function dogYears(planet, age) {
    var multi = undefined
    if (planet == "earth") {

    } else if (planet == "earth") {
        multi = 1
    } else if (planet == "mercury") {
        age = age * 0.2408467
    } else if (planet == "venus") {
        age = age * 0.61519726
    } else if (planet == "mars") {
        age = age * 1.8808158
    } else if (planet == "jupiter") {
        age = age * 11.862615
    } else if (planet == "saturn") {
        age = age * 29.447498
    } else if (planet == "uranus") {
        age = age * 84.016846
    } else if (planet == "neptune") {
        age = age * 164.79132
    } else {
        return "Error Please Correct Planet name"
    }

	age = (age / 31557600) * 7
	return age.toFixed(2)
}