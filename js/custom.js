function addIframe() {
  $('#iframePosition').replaceWith(createIframe);
}

function createIframe () {
  var _iframeHtml = document.createElement('iframe');
  _iframeHtml.src = "http://localhost:3001"
  _iframeHtml.id = 'myIframe';
  _iframeHtml.width = '100%';
  _iframeHtml.frameBorder = '0';
  _iframeHtml.style['display'] = 'block';
  return _iframeHtml;
}

function addFullScreenStyle(iframe) {
  iframe.css({'position':"fixed", 'top':"0px", "left":"0px", "bottom":"0px", "right":"0px", "width":"100%", "height":"100%", "border":"none", "margin":"0", "padding":"0", "overflow":"hidden", "z-index":"999999", "background-color":"white"});
}

function setHeight(e, iframe){
  var iframeHeight = e.data[1];
  iframe.height(iframeHeight);
}

function replaceIframeElement (iframe) {
  var replacement = document.createElement('div');
  replacement.id = 'iframePosition';
  iframe.replaceWith(replacement);
}


function reactToEvent (e) {
  var iframe = $("#myIframe");
  var eventName = e.data[0];

  switch(eventName) {
    case 'setHeight':
      setHeight(e, iframe);
      break;
    case 'goFullScreen':
      addFullScreenStyle(iframe);
      break;
    case 'hideFrame':
      replaceIframeElement(iframe)
      break;
  }
}
function messageEventResponse(e) {
   reactToEvent(e);
}
window.addEventListener('message', messageEventResponse, false);
