class Enum{
    /**
     * @param  {...string} args 
     */
    constructor(...args){
        args = args.filter((val)=>typeof val == 'string');
        this.length = args.length;

        for(let i = 0; i < args.length; ++i){
            let v = args[i];

            let b = new BaseEnum(v,i);

            this[v] = b;
        }
    }

    length;
}

class BaseEnum extends Number{
    /**
     * 
     * @param {string} title 
     * @param {number} value 
     */
    constructor(title,value){
        super(value);
        this.#title = title;
    }

    #title = '';
    /**
     * 
     * @param {number?} radix 
     * @returns {string}
     */
    toString(radix){
        if(typeof radix == 'number'){
            if(radix > 0 && radix < 36){
                if(radix == 1) return super.toString();
                return super.toString(radix);
            }else {
                throw new RangeError('radix must be an integer at least 1 and no greater than 36')
            }
        }
        return this.#title;
    }
}

var e = new Enum('testing','tester','test','aaaaa');

// Todo: Add support for [string,number]|Object<string,number> (ways of setting the value)