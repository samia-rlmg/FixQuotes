// This script will find all straight quotes and turn them into smart (curly) quotes.// Note: This will only work if quotes are at the beginning or end of a word.// To use: Select composition in After Effects, and select all relevant text layers, then run script.var activeComp = app.project.activeItem; // Go to the active composition
// Only proceed if active comp exists
if (activeComp != null) {
  var selectedLayers = activeComp.selectedLayers;    // Loop through selected layers and make substitution
  for (var i = 0; i < selectedLayers.length; i++) {
    var regex_open = /\"(\b|\¿|\¡)/gi;
    var regex_close = /(\b|,|\.|\!|\?)\"/gi;
    var newClose = selectedLayers[i].sourceText.value.text.replace(regex_close, "$1\”");
    selectedLayers[i].sourceText.setValue(newClose); //Sub straight quotes for curly quotes
    var newOpen = selectedLayers[i].sourceText.value.text.replace(regex_open, "\“$1"); // Only replace quote ($1), not punctuation.
    selectedLayers[i].sourceText.setValue(newOpen); //Sub straight quotes for curly quotes
  }
};
