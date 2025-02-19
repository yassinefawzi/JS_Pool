

is.num = (value) => typeof value === 'number'
is.nan = (value) => Number.isNaN(value)
is.str = (value) => typeof value === 'string'
is.bool = (value) => typeof value === 'boolean'
is.undef = (value) => typeof value === 'undefined'
is.def = (value) => value !== undefined
is.arr = (value) => Array.isArray
is.obj = (value) => value !== null && typeof value === 'object'
is.fun = (value) => typeof value === 'function'
is.thruthy = (value) => !!value
is.falsy = (value) => !value