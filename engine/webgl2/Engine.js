export default class WebGL2Engine{
    static get MAX_INDICIES(){if(this.#max_indicies == undefined) throw new Error('A WebGL2 Engine must been constructed before getting this value.'); return this.#max_indicies;} // More than UInt16
    get MAX_INDICIES(){if(WebGL2Engine.#max_indicies == undefined) throw new Error('A WebGL2 Engine must been constructed before getting this value.'); return WebGL2Engine.#max_indicies;} // More than UInt16
    static #max_indicies = undefined;
    /**
     * 
     * @param {WebGL2RenderingContext} gl 
     */
    constructor(gl){
        WebGL2Engine.#max_indicies = gl.getParameter(gl.MAX_ELEMENTS_INDICES);
    }
}