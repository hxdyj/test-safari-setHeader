;(function() {
  var src = './eruda.js'
  if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>')
  document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>')
})()
window.___gestureCall = function(gesture) {
  if (gesture.Name == 'star') {
    if (/eruda=true/.test(location.href)) {
      location.href = location.href.replace('eruda=true', 'eruda=false')
    } else {
      if (/eruda=false/.test(location.href)) {
        location.href = location.href.replace('eruda=false', 'eruda=true')
      } else {
        if (/\?/.test(location.href)) {
          location.href = location.href + '&eruda=true'
        } else {
          location.href = location.href + '?eruda=true'
        }
      }
    }
  }
}
