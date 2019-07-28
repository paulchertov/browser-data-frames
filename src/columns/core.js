import Column from "./Column"
import Int32Column from './Int32Column'
import Float64Column from './Float64Column'


export function createColumn(name, data, type){
	const isNumeric = x => typeof x  === 'number'
	const isInt = x => x === parseInt(x, 10)
	const specialNumeric = x => isNaN(x) 
	const inferNumericTypes = {
			"Int32": (x) => (isInt(x) && x > -2147483649 && x < 2147483648) || specialNumeric(x),
			"Float64": (x) => {
				var val = Math.abs(x)
				return (val > 4.9e-324 && val < 1.79e308) || specialNumeric(x)
			}
	}
	switch(typeof(data)) {
		case "Int32Array":
			return new Int32Column(name, data)
		case "Float64Array":
			return new Float64Column(name, data)
	}	
	if(!Array.isArray(data))
		throw "not sequence value provided as '" + name + "' column data"
	if(typeof type === 'undefined'){
		if(data.every(isNumeric)){
			for(var key in inferNumericTypes){
				if(data.every(inferNumericTypes[key])){
					type = key
					break
				}
			}
		}
	}
	switch(type){
		case "Int32": 
			return new Int32Column(name, Int32Array.from(data))
		case "Float64":
			return new Float64Column(name, Float64Array.from(data))
	}
	return new Column(name, data)
}

