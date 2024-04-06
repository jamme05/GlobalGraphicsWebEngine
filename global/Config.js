class EngineConfig{
    /**
     * @type {HTMLCanvasElement}
     */
    canvas;

    get target(){ return this.#target; }
    /**
     * @type {EngineTarget}
     */
    #target;

    #customEngine;

    get CustomEngine(){return this.#customEngine}

    /**
     * @param {HTMLCanvasElement} canvas - The target canvas for this config
     * @param {object} opt - Options for the engine
     * @param {EngineConfigSettings?} opt.engine - Options for picking the internal Engine
     */
    constructor(canvas,opt){
        this.canvas = canvas;

        if(opt.engine){
            if(typeof opt.engine.engine == 'object' && opt.engine.engine != null && opt.engine.engine.init != null){
                this.#customEngine = opt.engine.engine;
            }

            if(Array.isArray(opt.engine.order) && opt.engine.order.length > 0){
                this.#target = opt.engine.order.filter((val)=>((!this.#target.includes(val))&&EngineTargets.Auto.includes(val)));
            }else{
                if(['auto','custom','webgpu','webgl','webgl2'].includes(opt.engine.target)){
                    if(opt.engine.forceTarget){
                        switch(opt.engine.target) {
                            case 'auto':
                                this.#target = EngineTargets.Auto;
                                break;
                            case 'custom':
                                this.#target = ['custom'];
                                break;
                            case 'webgl':
                                this.#target = ['webgl'];
                                break;
                            case 'webgl2':
                                this.#target = ['webgl2'];
                                break;
                            case 'webgpu':
                                this.#target = ['webgpu'];
                                break;
                            default:
                                this.#target = EngineTargets.Auto;
                        }
                    }else{
                        switch(opt.engine.target) {
                            case 'auto':
                            case 'custom':
                                this.#target = EngineTargets.Auto;
                                break;
                            case 'webgl':
                                this.#target = EngineTargets.WebGL;
                                break;
                            case 'webgl2':
                                this.#target = EngineTargets.WebGL2;
                                break;
                            case 'webgpu':
                                this.#target = EngineTargets.WebGPU;
                                break;
                            default:
                                this.#target = EngineTargets.Auto;
                        }
                    }
                }
                else this.#target = EngineTargets.Auto;
            }
        }else {
           this.#target = EngineTargets.Auto;
        }
        console.log(this.#target);
    }
}

class EngineTargets{
    /**
     * @type {['custom','webgpu','webgl2','webgl']}
     */
    static Auto=['custom','webgpu','webgl2','webgl'];
    /**
     * @type {['webgpu','custom','webgl2','webgl']}
     */
    static WebGPU=['webgpu','custom','webgl2','webgl'];
    /**
     * @type {['webgl','webgl2','custom','webgpu']}
     */
    static WebGL=['webgl','webgl2','custom','webgpu'];
    /**
     * @type {['webgl2','webgpu','custom','webgl']}
     */
    static WebGL2=['webgl2','webgl','custom','webgpu'];
}

class CustomEngineTest{
    init(config){
        console.log('HAHAH');
    }
}