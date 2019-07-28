class Column {
	constructor(name, data){
		this._name = name
		this._data = data
		this._data_type = null 
	}
	get data() {
		return this._data
	}
	get data_type(){
		return this._data_type
	}
	get name() {
		return this._name
	}
	set name(val){
		this._name = val	
	}
}

export default Column;