class OsSniffer {
    checkOsType(navigator) {
        let osType;
        if (navigator.userAgent.indexOf('Win') != -1) osType = 'win32';
        if (navigator.userAgent.indexOf('Mac') != -1) osType = 'darwin';
        if (navigator.userAgent.indexOf('Linux') != -1) osType = 'deb';
        return osType;
    }

    checkOsVersion(navigator) {
        let osVersion;

        return osVersion;
    }
}

export default OsSniffer;
