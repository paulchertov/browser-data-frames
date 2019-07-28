import NumericColumn from './NumericColumn'

class Int32Column extends NumericColumn {
	constructor(name, data){
		super(name, data)
		this._data_type = 'Int32'
	}
}

export default Int32Column;