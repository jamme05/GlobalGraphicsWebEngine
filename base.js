function TestEngine(config){
    
}

/**
 * 
 * @param {EngineConfig} config - Your context
 */
async function GetWebGL(config){
    var gl = config.canvas.getContext("webgl");

    return gl;
}
/**
 * 
 * @param {EngineConfig} config 
 */
async function GetWebGL2(config){
    var gl = config.canvas.getContext("webgl2");

    return gl;
}
/**
 * 
 */
async function TestWebGPU(){
    if(!navigator.gpu){
        return null;
    }

    var adapter = navigator.gpu.requestAdapter();
    if(!adapter){
        return null;
    }
    return adapter;
}