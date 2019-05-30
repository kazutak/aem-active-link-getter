javascript: (function () {
  if ($('div#form-debug').length === 0) {
    $('body').append('<div style="float:left;position:fixed;top:0px;left:0px;border:1px solid red;background:#eee;font-size:12px;padding:10px;" id="form-debug"><h2>AEM Activate Link Getter</h2><br /><a onclick="$(this).parent().remove()" style="cursor:pointer;display:block;position:absolute;right:2px;top:2px;"{>Dismiss</a></div>');
    var c; var tmp;
    if (location.href.indexOf('/ja_jp/home/') > 0){
      c = 'jp'; tmp = '/ja_jp/home/';
    }
    else if (location.href.indexOf('/ko_kr/home/') > 0){
      c = 'kr'; tmp = '/ko_kr/home/';
    } 
    if (c !== undefined ) {
      $("#cq-siteadmin-grid .x-grid3-td-published").each(function(i,e){ 
        if ($(e).find('.status-activated').length != 0)
          { 
            h = location.href;
            h = h.substr(h.indexOf(tmp) + tmp.length);
            h = 'https://www.salesforce.com/'+ c + '/' +h + '/' + $("#cq-siteadmin-grid .x-grid3-td-name .x-grid3-col-name")[i-1].innerText;
            $('div#form-debug').append('<a href=' + h + ' style=\'text-decoration: underline solid blue;\' target=\'_blank\'>' +h + '<br />');
          } 
      });
    }
    $('div#form-debug').append('<br><br><sub>(Kazu v1.0)</sub>');
  } else {
    $('div#form-debug').remove();
  }
})();