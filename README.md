# GlobalGraphicsWebEngine

A graphics engine implementing WebGL, WebGL2, WebGPU or a custom engine fitting the base framework. 
It will have the main focus of working as a game engine, but I will add support to separate any graphics related works.

## The plan:
### Engines:
The are the currently planned (and from my knowledge) only existing graphics apis which are supported by most browsers. Due to WebGPU still being in its early stages, development may take (extra) time and include errors at times.
- WebGL
- WebGL2
- WebGPU

Whilst working on these the base engine will be structured out and the documentation on how to create custom engines will be worked on.

### The base engine:
The base engine is planned to include:
- A transform class
- Methods for matrix math, as well as other important math. (this is a call for help)
- A custom shading language as well as *compilers.
- Methods to load models (will start with obj as everything is written)
- Methods to send custom model data.
- A more dynamic random number generator

*These compilers shall both work for server side and client side (client side first, then server side). The method it uses to compile will be documented as well. Creating the possibility for custom compilers. The current plan will be structured more towards WebGL(2) as it's what I'm currently the most comfortable with.

#### **NOTE:**
A lot of the base engine will be similar to unity, as it's also what I'm the most comfortable with.

### Experimental thoughts:
- The current name I came up with in a couple of seconds and will probably be changed to something shorter and more "flashy".
- The base engine might get the option to dynamicly switch between engines on will. Which will be a safety in case of an engine error (specificly targeted at WebGPU or any future implamentations)
- Once I have a strong base finished I might attempt to create an external engine for making projects. With creating this I will make a less "human" internal functions as well as better methods of saving *Scenes.

*I'm unsure of when and how I will implament scenes/nodes which it's usually called. In the beginning the base engine will only be able to support
 a single scene. But the api will be fluid enough so if needed, it can be created yourself.
 
### Final thoughts:
This engine will start of rather unoptimized, but as time passes I will hopefully be able to made a engine which is both overall fun and "easy" to use.
