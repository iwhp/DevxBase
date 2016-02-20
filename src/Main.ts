import fs = require('fs');
import Config = require('./model/Config');

class Main {
    private configFile: string ;

    public init(configFile: string = 'devx.json'){
        if (configFile !== null) {
            this.configFile = configFile;
        }

        var config:Config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
        console.log(config.name);
        console.log(config.description);
        console.log(config.version);

        console.log(config.entities.name);
        
        config.entities.items.forEach((entity) => {
            console.log(entity.name);
            entity.items.forEach((entity2) => {
                console.log(entity2.name);
            });
        });
        
        config.modules.forEach((module) => {
            console.log(module.key + ' ' + module.name);
        });
        
        console.log(config.moduleTemplate.suffixLast);
        config.moduleTemplate.templates.forEach((template) => {
            console.log(template.key);
            template.targets.forEach((target) => {
                console.log(target.template);
                console.log(target.outDir);
                console.log(target.suffix);
                console.log(target.generateGroup);
            });
        });
    }
}    

export = Main;