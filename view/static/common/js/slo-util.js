const SloUtil = {
  mergeURLParameter: (key, value) => {
    const params = new URLSearchParams(new URL(document.baseURI).search);
    params.set(key, value);

    return params.toString();

  },
  getURLParameter: paramName => {
    const search = window.location.search.slice(1);
    const params = search.split('&');

    for (let i = 0; i < params.length; i++) {
      const param = params[i].split('=');

      if (param[0] === paramName) {
        return param[1] === undefined ? true : decodeURIComponent(param[1]);
      }
    }

    return false;
  },
  numberWithCommas: x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

$.SloUtil = SloUtil;
