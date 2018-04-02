
//---------------------------------------------------------------------
// custommethods - for Discord Bot Maker
// Contains functions for actions using custommethods
// Stolen from Wrex :troll: ~ Lasse
//---------------------------------------------------------------------
// Changelog:
// 1.0.0 - Lasse
//   - Added getWebhook()
//
// 1.0.1 - Lasse
//   - Added toDate()
//---------------------------------------------------------------------

const custommethods= {};

custommethods.API = {};

custommethods.DBM = null;

custommethods.Version = "1.0.0";

// Methods:

custommethods.getWebhook = function(type, varName, cache) {
    const server = cache.server;
    switch(type) {
        case 1:
            return cache.temp[varName];
            break;
        case 2:
            if(server && this.server[server.id]) {
                return this.server[server.id][varName];
            }
            break;
        case 3:
            return this.global[varName];
            break;
        default:
            break;
    }
    return false;
};

/**
 * Gets the date for the given Unix timestamp.
 *
 * @param {Number} time A timestamp
 * @returns {Date} The corresponding date
 */
custommethods.toDate = function (time) {
  if (! isNumber(time)) {
    throw new Error('Expected a number');
  }
  return new Date(time * 1000);
};


//---------------------------------------------------------------------



// This function is called by DBM when the bot is started
var customaction = {};
customaction.name = "custommethods";
customaction.section = "Other Stuff";
customaction.author = "DBM Mods"; //Init.: Lasse
customaction.version = "1.8.7"; //Added in 1.8.7 - Changelog at the top!
customaction.short_description = "Required for some mods. Does nothing";

customaction.html = function() {
	return `
<div id ="wrexdiv" style="width: 550px; height: 350px; overflow-y: scroll;">
     <p>
		<u>Custom Methods:</u><br><br>
		This isn't an action, but it is required for the actions under this category. <br><br>
		<b> Create action wont do anything </b>
	</p>
</div>`
};

customaction.getcustommethods = function(){
	return custommethods;
}


customaction.mod = function(DBM) {

	custommethods.DBM = DBM

	DBM.Actions.getcustommethods = function(){
		return custommethods;
	}
};
module.exports = customaction;
