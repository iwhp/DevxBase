import Entity = require('./Entity');
import Module = require('./Module');
import ModuleTemplate = require('./ModuleTemplate');

class Config {
    public name: string;
    public description: string;
    public version: string;
    public entities: Entity;
    public modules: Module[];
    public moduleTemplate: ModuleTemplate;
}    

export = Config;