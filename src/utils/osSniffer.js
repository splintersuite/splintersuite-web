class OsSniffer {
    checkOsType(navigator) {
        let osType;
        if (navigator.userAgent.indexOf('Win') != -1) osType = 'Windows OS';
        if (navigator.userAgent.indexOf('Mac') != -1) osType = 'Macintosh';
        if (navigator.userAgent.indexOf('Linux') != -1) osType = 'Linux OS';
        return osType;
    }

    checkOsVersion(navigator) {
        let osVersion;

        return osVersion;
    }
}

export default OsSniffer;
