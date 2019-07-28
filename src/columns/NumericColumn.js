import Column from './Column'

class NumericColumn extends Column{
	constructor(name, data){
		super(name, data)
	}
	sum(){
		return this.data.sum()
	}
}

export default NumericColumn;