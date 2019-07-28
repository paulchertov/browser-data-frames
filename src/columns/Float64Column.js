import NumericColumn from './NumericColumn'

class Float64Column extends NumericColumn {
    constructor(name, data){
		super(name, data)
		this._data_type = 'Float64'
	}
}

export default Float64Column;