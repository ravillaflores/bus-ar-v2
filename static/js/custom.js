
/*!
  * Custom Javascript
  */

function setFooterDate(target) {
    var today = new Date();
    var yr = today.getFullYear();
    $(target).html(yr);
}


function toggleInfo(target) {
    var loc = $.trim(target.substring(5,20));
    var tgtID = '#info-'+loc;
    //alert(tgtID);
    var chk = document.getElementById($.trim(tgtID.substring(1,20))).hasAttribute("hidden");
    if(chk){
      $(tgtID).removeAttr('hidden');
    }
    else {
      $(tgtID).attr('hidden','hidden');
    }
}