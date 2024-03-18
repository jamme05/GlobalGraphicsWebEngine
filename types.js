/**
 * @typedef {EngineConfigSettingsBase} EngineConfigSettings
*/
/**
 * @typedef {any} CustomEngine
 */
/**
 * @typedef EngineConfigSettingsBase
 * @prop {('auto'|'custom'|'webgpu'|'webgl'|'webgl2')|any} target 
 * The desired engine. Auto will be equvalent to webgpu.
 * 
 * Default to auto.
 * 
 * - NOTE: If it isn't a string the base engine will interpret it as your custom engine.
 * 
 * @prop {boolean?} forceTarget 
 * - If the engine will shut down after trying the desired engine.
 * 
 * @prop {('webgpu'|'webgl'|'webgl2'|'custom')[]?} order 
 * A custom order to attempt the engines. If order is set it will ignore target.
 * 
 * The base order for each target is:
 * - auto:
 *   - custom, webgpu, webgl2, webgl
 * - webgpu:
 *   - webgpu, custom, webgl2, webgl
 * - webgl2:
 *   - webgl2, webgl, custom, webgpu
 * - webgl:
 *   - webgl, webgl2, custom, webgpu
*/