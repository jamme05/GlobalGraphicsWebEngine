/**
 * 
 * @param {EngineConfig} config 
 */
async function SelectEngine(config){
    // Attempt to init Engine
    for(let i = 0; i < config.target.length; ++i){
        switch(config.target[i]){
            case 'custom':
                if(config.customEngine != null){
                    let engine = config.CustomEngine.init(config);

                    if(engine != null) return engine;
                }
                break;
            case 'webgl':
                let gl = InitWebGL(config);

                if(gl == null) break;

                var engine = await import('./engine/webgl/index.js');
                return engine.default;
        }
    }
}

/**
 * 
 * @param {EngineConfig} config - Your context
 */
async function InitWebGL(config){
    return null;
    var gl = config.canvas.getContext("webgl");

    return gl;
}
/**
 * 
 * @param {EngineConfig} config 
 */
async function InitWebGL2(config){
    var gl = config.canvas.getContext("webgl2");

    return gl;
}
/**
 * 
 */
async function InitWebGPU(){
    return null;
    if(!navigator.gpu){
        return null;
    }

    var adapter = navigator.gpu.requestAdapter();
    if(!adapter){
        return null;
    }
    return adapter;
}