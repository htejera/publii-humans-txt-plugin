class HumansTxtPlugin {
    constructor(API, name, config) {
        this.API = API;
        this.name = name;
        this.config = config;
    }

    addEvents() {
        this.API.addEvent('beforeRender', this.saveHumansTxt.bind(this), 1);
    }

    saveHumansTxt(rendererInstance) {
        let output = this.config.humansText || "";
        let updateDateText = this.config.updateDateText || "Last updated: ";

        if (this.config.includeUpdateDate) {
            let currentDate = new Date();
            output += "\n\n" + updateDateText + currentDate.toISOString();
        }

        this.API.createFile('[ROOT-FILES]/humans.txt', output, this);
    }
}

module.exports = HumansTxtPlugin;
