$.ajaxSetup({
  headers: {'X-CSRF-TOKEN': $('meta[name=_csrf_token]').attr('content')},
  contentType: 'application/json',
  dataType: 'json'
});

const SloAjax = {
  ajaxfunc: (url, method, data, afterSuccessFunc) => {
    $.ajax({
      contentType: 'application/json',
      dataType: 'json',
      url: url,
      type: method,
      data: data
    }).done(function (data) {
      if (afterSuccessFunc) {
        afterSuccessFunc(data);
        return;
      } else {
        alert(data.msg);
        location.reload();
      }
    }).fail(function (jqXHR, textStatus, errorThrown) {
      if (jqXHR.status === 400) {
        if (jqXHR.responseJSON.fieldErrors
            && jqXHR.responseJSON.fieldErrors.length > 0) {
          var msg = jqXHR.responseJSON.fieldErrors.map(function (item) {
            return item.field + ' ' + item.reason;
          }).join('\n');
          alert(msg);
        } else {
          jqXHR.responseJSON && alert(
              jqXHR.responseJSON.msg || jqXHR.responseJSON.message);
        }
      } else {
        jqXHR.responseJSON && alert(
            jqXHR.responseJSON.msg || jqXHR.responseJSON.message);
      }
    });
  },
  defaultAjaxErrorHandler: (jqXHR, textStatus, errorThrown) => {
    if (jqXHR.status === 400) {
      if (jqXHR.responseJSON.fieldErrors) {
        var msg = jqXHR.responseJSON.fieldErrors.map(function (item) {
          return item.fieldError;
        }).join('/n');
        alert(msg);
      } else {
        alert(jqXHR.responseJSON.msg);
      }
    }
    if (jqXHR.status === 401) {
      alert('로그인이 필요합니다.');
      window.location.href = '/login.do';
    }
    if (jqXHR.status === 403) {
      alert('해당 작업을 수행할 수 없습니다.');
      window.location.reload();
    }
  },
  afterAjaxTableRedraw: (data) => {
    alert(data.msg)
    $('table').sloDataTable('redraw')
  }
};

$.SloAjax = SloAjax;
