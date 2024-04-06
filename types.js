/**
 * @typedef {EngineConfigSettingsBase} EngineConfigSettings
*/
/**
 * 
 * @typedef {{init:Init}} CustomEngine
 */
/**
 * @callback Init
 * @param {EngineConfig} config
 * @returns {any}
 */
/**
 * @typedef EngineConfigSettingsBase
 * @prop {('auto'|'custom'|'webgpu'|'webgl'|'webgl2')} [target] 
 * The desired engine. Auto will be equvalent to custom if custom if .
 * 
 * Defaults to auto.
 * 
 * - NOTE: If it isn't a string the base engine will interpret it as your custom engine.
 * 
 * @prop {boolean} [forceTarget] 
 * - If the engine will shut down after trying the desired engine.
 * 
 * - Auto will not change behaviour with forceTarget enabled.
 * 
 * @prop {('webgpu'|'webgl'|'webgl2'|'custom')[]} [order] 
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
 * 
 * Repetitions will be ignored.
 * 
 * @prop {CustomEngine?} engine - Set if you're having custom in either the target or the custom order.
*/
/**
 * @typedef {('webgpu'|'webgl'|'webgl2'|'custom')[]} EngineTarget
 */
/**
 * @typedef {object} BaseEngine
 */