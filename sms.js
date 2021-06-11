
const appId = "94MguznMMeCb5ip5KpcMnGC8k4XzuxXL";
const appSercet = "9187c95f19058452262e5846fadaab53a254a3e11de41dea6a438edc402adc00";
const shortCode = "21585411";
const shortCodeLast4Digit = "5411";
const registrationLink = "https://developer.globelabs.com.ph/dialog/oauth/" + appId;
const userIdCookieName = 'firebaseUID';

function saveToCookie(cookieName, cookieValue){
  if(!cookieName)return;
  document.cookie = cookieName + "=" + cookieValue + ";expires=Thu, 18 Dec 3013 12:00:00 UTC;";
}

function getCookie(cname = userIdCookieName) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

