﻿// This script will find all straight quotes and turn them into smart (curly) quotes.
// Only proceed if active comp exists
if (activeComp != null) {
  var selectedLayers = activeComp.selectedLayers;
  for (var i = 0; i < selectedLayers.length; i++) {
    var regex_open = /\"(\b|\¿|\¡)/gi;
    var regex_close = /(\b|,|\.|\!|\?)\"/gi;
    var newClose = selectedLayers[i].sourceText.value.text.replace(regex_close, "$1\”");
    selectedLayers[i].sourceText.setValue(newClose); //Sub straight quotes for curly quotes
    var newOpen = selectedLayers[i].sourceText.value.text.replace(regex_open, "\“$1"); // Only replace quote ($1), not punctuation.
    selectedLayers[i].sourceText.setValue(newOpen); //Sub straight quotes for curly quotes
  }
};