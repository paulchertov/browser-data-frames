import {createColumn} from './columns/core'

global.int1 = createColumn("inferredInt32", [1,2,3,4,5])
global.float1 = createColumn("inferredFloat64", [2.12, 3.14, 3.13, 1.11, 2.33])
global.int2 = createColumn("explicitInt32", [0,0,0,0,0], "Int32")
global.float2 = createColumn("explicitFloat64", [2.12, 3.14, 3.13, 1.11, 2.33], "Float64")
global.wrongInt = createColumn("wrongInt32", [2.12, 3.14, 3.13, 1.11, 2.33], "Int32")
