function getEndPointUrl() {
	url = "http://swat.ikanow.com/api/";
    return url;
}

function getDomainUrl() {
	domainURL = "http://www.ikanow.com/";
	return domainURL;
}

function getForgottenPasswordUrl() {
	forgotUrl = getEndPointUrl() + "auth/forgotpassword"; //app.saas=false
//	forgotUrl = getDomainUrl() + "FORGOT_PASSWORD_URL"; // app.saas=true
	return forgotUrl;
}

function getDomainLogoutUrl() {
	logoutURL = ""; //app.saas=false
//	logoutURL = getDomainUrl() + "LOGOUT_URL"; // app.saas=true
	return logoutURL;
}

function getMapLicenseKey() {
	key =  "ABQIAAAAPG0G6825cvmxfkO4sLnuNxTYkENnCsJoLpowsVPNC5bT4IvfARSFTUkvReEMUsu3mpCi83eID8s4JA";
	return key;
}

function getTimeoutSeconds() {
	return 1800;
}
