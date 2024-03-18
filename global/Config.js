class EngineConfig{
    /**
     * @type {HTMLCanvasElement}
     */
    canvas;

    /**
     * @type {EngineTarget}
     */
    target;

    /**
     * 
     * @param {HTMLCanvasElement} canvas - The target canvas for this config
     * @param {object} opt - Options for the engine
     * @param {EngineConfigSettings} opt.engine - Options for picking the internal Engine
     */
    constructor(canvas,opt){
        this.canvas = canvas;
    }
}

var t = new EngineConfig(null,{engine:{target}})

class EngineTarget{
    /**
     * @type {'auto'|'webgpu'|'webgl'|'webgl2'}
     */
    target = 'auto';

    forceTarget = false;

    /**
     * @type {'webgpu'|'webgl'|'webgl2'[]?}
     */
    order = null;
}