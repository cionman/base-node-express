"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
} // Validation errors messages for Parsley
// Load this after Parsley


Parsley.addMessages('ko', {
  defaultMessage: "입력하신 내용이 올바르지 않습니다.",
  type: {
    email: "입력하신 이메일이 유효하지 않습니다.",
    url: "입력하신 URL이 유효하지 않습니다.",
    number: "입력하신 전화번호가 올바르지 않습니다.",
    integer: "입력하신 정수가 유효하지 않습니다.",
    digits: "숫자를 입력하여 주십시오.",
    alphanum: "입력하신 내용은 알파벳과 숫자의 조합이어야 합니다."
  },
  notblank: "공백은 입력하실 수 없습니다.",
  required: "필수 입력사항입니다.",
  pattern: "입력하신 내용이 올바르지 않습니다.",
  min: "입력하신 내용이 %s보다 크거나 같아야 합니다. ",
  max: "입력하신 내용이 %s보다 작거나 같아야 합니다.",
  range: "입력하신 내용이 %s보다 크고 %s 보다 작아야 합니다.",
  minlength: "%s 이상의 글자수를 입력하십시오. ",
  maxlength: "%s 이하의 글자수를 입력하십시오. ",
  length: "입력하신 내용의 글자수가 %s보다 크고 %s보다 작아야 합니다.",
  mincheck: "최소한 %s개를 선택하여 주십시오. ",
  maxcheck: "%s개 또는 그보다 적게 선택하여 주십시오.",
  check: "선택하신 내용이 %s보다 크거나 %s보다 작아야 합니다.",
  equalto: "같은 값을 입력하여 주십시오."
});
Parsley.setLocale('ko');
var parsleyConfig = {
  trigger: 'change',
  //successClass: "has-success",
  errorClass: "is-invalid",
  errorsWrapper: '<div class="invalid-feedback"></div>',
  errorTemplate: '<span></span>'
}; //var passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\\-_=+\\\\|\\[\\]{};:\'",.<>/?~`&]).{9,20}$'); //영 숫자 특문 포함

var passwordPattern = new RegExp('^([^가-힣])(?=.*[a-z])(?=.*[0-9]).{8,20}$'); //영 숫자 포함

/*
window.Parsley.addValidator('radioEtc', {
  validateString: function (value, requirement) {
    var data = $('input[name=' + requirement + ']:checked').val();
    if (!data) return true;
    if (data === 'etc') return !!value;
    return true;
  },
  messages: {
    ko: '필수 입력사항입니다.'
  }
});

*/

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name=_csrf_token]').attr('content')
  },
  contentType: 'application/json',
  dataType: 'json'
});
var SloAjax = {
  ajaxfunc: function ajaxfunc(url, method, data, afterSuccessFunc) {
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
        if (jqXHR.responseJSON.fieldErrors && jqXHR.responseJSON.fieldErrors.length > 0) {
          var msg = jqXHR.responseJSON.fieldErrors.map(function (item) {
            return item.field + ' ' + item.reason;
          }).join('\n');
          alert(msg);
        } else {
          jqXHR.responseJSON && alert(jqXHR.responseJSON.msg || jqXHR.responseJSON.message);
        }
      } else {
        jqXHR.responseJSON && alert(jqXHR.responseJSON.msg || jqXHR.responseJSON.message);
      }
    });
  },
  defaultAjaxErrorHandler: function defaultAjaxErrorHandler(jqXHR, textStatus, errorThrown) {
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
  afterAjaxTableRedraw: function afterAjaxTableRedraw(data) {
    alert(data.msg);
    $('table').sloDataTable('redraw');
  }
};
$.SloAjax = SloAjax;
var SloUtil = {
  mergeURLParameter: function mergeURLParameter(key, value) {
    var params = new URLSearchParams(new URL(document.baseURI).search);
    params.set(key, value);
    return params.toString();
  },
  getURLParameter: function getURLParameter(paramName) {
    var search = window.location.search.slice(1);
    var params = search.split('&');

    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=');

      if (param[0] === paramName) {
        return param[1] === undefined ? true : decodeURIComponent(param[1]);
      }
    }

    return false;
  },
  numberWithCommas: function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
$.SloUtil = SloUtil;
var EVENT_DONE = 'sloForm:done';
var EVENT_FAIL = 'sloForm:fail';

var SloForm = function SloForm(element, options) {
  var _ = this;

  var $form = $(element);
  var defaults = {
    url: $form.attr('action'),
    method: $form.attr('method'),
    confirm: $form.attr('data-confirm') || false,
    clearOnDone: $form.attr('data-clear-on-done') || false,
    alertErrorMsg: $form.attr('data-alert-error-msg') || false
  };
  _.options = $.extend({}, defaults, options);
  _.$form = $form;

  if (_.options.url) {
    _.init();
  }
};

SloForm.prototype.init = function () {
  var options = this.options,
      $form = this.$form;
  var processing = false;
  var $submit = $('button[type=submit]', $form);
  $submit.parent().append('<div class="help-block help-block-error"></div>');
  $form.parsley(window.parsleyConfig);
  $form.submit(function (event) {
    event.preventDefault();

    if (processing) {
      return;
    }

    if (options.confirm) {
      // eslint-disable-next-line no-alert
      if (!window.confirm(options.confirm)) {
        return false;
      }
    }

    processing = true;
    var data = $form.serializeObject();
    $.ajax({
      headers: {
        'X-CSRF-TOKEN': $('meta[name=_csrf_token]').attr('content')
      },
      method: options.method,
      contentType: 'application/json',
      dataType: 'json',
      url: options.url,
      data: JSON.stringify(data)
    }).done(function (result) {
      var msg = result.msg;

      if (options.clearOnDone) {
        $form[0].reset();
      }

      $submit.removeClass('has-error');
      $submit.addClass('has-success');

      if (msg && !$._data($form[0], "events")[EVENT_DONE]) {
        alert(msg);
        location.reload();
      }

      $form.trigger(EVENT_DONE, [result]);
    }).fail(function (result) {
      var status = result.status,
          responseJSON = result.responseJSON;
      var msg = responseJSON.msg;
      $submit.removeClass('has-success');

      if (status === 400) {
        var fieldErrors = responseJSON.fieldErrors;

        if (fieldErrors) {
          msg = fieldErrors.map(function (item) {
            return item.field + ' ' + item.reason;
          }).join('<br>');
        }
      }

      if (msg) {
        if (options.alertErrorMsg && options.alertErrorMsg === 'true') {
          alert(msg);
        } else {
          $submit.siblings('.help-block-error').html(msg);
          $submit.addClass('has-error');
        }
      }

      $form.trigger(EVENT_FAIL, [result]);
    }).always(function () {
      processing = false;
    });
  });
};

$.fn.sloForm = function (options) {
  return this.each(function (index, item) {
    item.sloForm = new SloForm(item, options);
  });
};

var EVENT_DRAW = 'sloDataTable:draw'; // const EVENT_FAIL = 'sloDataTable:fail';

var SloDataTable = function SloDataTable(element, options) {
  var _ = this;

  var $table = $(element);
  var settings = {
    url: $table.data('url'),
    searchForm: $table.data('search-form'),
    saveState: $table.data('save-state') || false,
    lengthMenu: $table.data('length-menu') || [10, 15, 20]
  };
  _.$table = $table;
  _.settings = settings;
  _.options = options || {};
  _.$searchForm = settings.searchForm ? $(settings.searchForm) : undefined;

  if (_.settings.url) {
    _.init();
  } else {
    // eslint-disable-next-line no-console
    console.error('table에 data-url 값을 입력해 주세요.');
  }
};

SloDataTable.prototype.init = function () {
  var $table = this.$table,
      $searchForm = this.$searchForm,
      settings = this.settings,
      options = this.options;
  var columns = $('th', $table).map(function (_, element) {
    var column = $(element).data('column');
    return {
      data: options[column] || column
    };
  });
  var searchFormData = $.extend({
    page: 1,
    size: settings.lengthMenu[0]
  }, $searchForm ? $searchForm.serializeObject() : null);

  if (settings.saveState) {
    if ($.SloUtil.getURLParameter('saveState')) {
      if (window.history.state) {
        searchFormData = window.history.state[settings.saveState] || searchFormData;
      }
    }
  }

  var $filters = $('[data-filter]', $table);
  $filters.change(function () {
    return $dataTable.draw();
  });
  var $dataTable = $table.on('draw.dt', function () {
    return $table.trigger(EVENT_DRAW);
  }).on('preXhr.dt', function (e, _, data) {
    var params = {
      page: data.start / data.length + 1,
      size: data.length
    };
    Object.keys(data).forEach(function (key) {
      return delete data[key];
    });
    var filters = {};
    $filters.each(function (_, filter) {
      var $filter = $(filter);
      filters[$filter.data('filter')] = $filter.val();
    });
    $.extend(data, searchFormData, params, filters);

    if (settings.saveState) {
      var currentState = window.history.state || {};
      currentState[settings.saveState] = data;
      window.history.pushState(currentState, '', '?' + $.SloUtil.mergeURLParameter('saveState', true));
    }
  }).on('xhr.dt', function (e, _, json) {
    json.recordsFiltered = json.totalElements;
    json.recordsTotal = json.totalElements;
    json.data = json.content;
  }).DataTable({
    lengthMenu: settings.lengthMenu,
    language: {
      infoEmpty: '검색 결과가 없습니다.',
      zeroRecords: '검색 결과가 없습니다.',
      emptyTable: '테이블에 표시할 내용이 없습니다.',
      info: '_TOTAL_ 개의 항목 중 _START_ ~ _END_',
      infoFiltered: ' (전체 _MAX_ 개)',
      lengthMenu: '페이지 당 _MENU_ 항목 표시',
      search: '',
      searchPlaceholder: '타이틀, 작성자 검색',
      paginate: {
        first: '«',
        previous: '‹',
        next: '›',
        last: '»'
      },
      aria: {
        paginate: {
          first: 'First',
          previous: 'Previous',
          next: 'Next',
          last: 'Last'
        }
      }
    },
    displayStart: (searchFormData.page - 1) * searchFormData.size,
    pageLength: searchFormData.size,
    searching: false,
    processing: true,
    // search: '',
    // searchDelay: 500,
    ordering: false,
    // order: [1, 'desc'],
    serverSide: true,
    ajax: {
      url: settings.url,
      type: 'GET',
      error: function error(e) {
        alert('데이터를 읽어오는 과정에서 에러가 발생했습니다. 화면을 리로드합니다.');
        console.error('datatable error : ', e);
        location.reload();
      }
    },
    columns: columns
  });
  this.$dataTable = $dataTable;

  if ($searchForm) {
    $searchForm.submit(function (event) {
      event.preventDefault();
      searchFormData = $searchForm.serializeObject();
      $dataTable.draw();
    });
    $searchForm.on('reset', function (event) {
      setTimeout(function () {
        searchFormData = $searchForm.serializeObject();
        $dataTable.draw();
      });
    });
  }
};

SloDataTable.prototype.redraw = function () {
  this.$dataTable.draw();
};

$.fn.sloDataTable = function (options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return this.each(function (index, item) {
    var ret;

    if (_typeof(options) === 'object' || typeof options === 'undefined') {
      item.sloDataTable = new SloDataTable(item, options);
    } else {
      var _item$sloDataTable;

      ret = (_item$sloDataTable = item.sloDataTable)[options].apply(_item$sloDataTable, args);
    }

    if (typeof ret !== 'undefined') {
      return ret;
    }
  });
};

function datagrid(dataUrl, columnData, initialState) {
  return $('#list').on('preXhr.dt', function (e, settings, data) {
    data['page'] = data.start / data.length + 1;
    data['size'] = data.length;
    delete data['search'];
    delete data['draw'];
    delete data['columns'];
    delete data['order'];
    delete data['start'];
    delete data['length'];
  }).on('xhr.dt', function (e, settings, json, xhr) {
    json['recordsFiltered'] = json.totalElements;
    json['recordsTotal'] = json.totalElements;
    json['data'] = json.content;
  }).DataTable({
    lengthMenu: [10, 15, 20],
    language: {
      'infoEmpty': '검색 결과가 없습니다.',
      'zeroRecords': '검색 결과가 없습니다.',
      'emptyTable': '테이블에 표시할 내용이 없습니다.',
      'info': '_TOTAL_ 개의 항목 중 _START_ ~ _END_',
      'infoFiltered': ' (전체 _MAX_ 개)',
      'lengthMenu': '페이지 당 _MENU_ 항목 표시',
      'search': '',
      'searchPlaceholder': '이름, 이메일 검색',
      paginate: {
        first: '«',
        previous: '‹',
        next: '›',
        last: '»'
      },
      aria: {
        paginate: {
          first: 'First',
          previous: 'Previous',
          next: 'Next',
          last: 'Last'
        }
      }
    },
    ordering: false,
    searching: false,
    serverSide: true,
    processing: true,
    displayStart: initialState && initialState.size && initialState.page ? initialState.size * initialState.page : undefined,
    pageLength: initialState ? initialState.size : undefined,

    /*stateSave: true,
    stateDuration: 60 * 60 * 24 * 30,*/
    ajax: {
      url: dataUrl,
      type: 'GET',
      error: function error(e) {
        alert('데이터를 읽어오는 과정에서 에러가 발생했습니다. 화면을 리로드합니다.');
        location.reload();
      }
    },
    columns: columnData
  });
}

(function ($) {
  'use strict';

  function extractMenuUid(uri) {
    var url = new URL(uri, document.baseURI);
    return new URLSearchParams(url.search).get('menuUid');
  } //active menu 설정


  $('.nav-sidebar a').each(function (index, target) {
    var href = target.getAttribute('href');

    if (href !== '#') {
      var menuUid = extractMenuUid(href);

      if (location.href.indexOf(menuUid ? menuUid : href) > -1) {
        $(target).addClass('active').css('display', 'block');
        $(target).parents('.has-treeview').addClass('menu-open');
        $(target).parents('.has-treeview').children('.nav-link').first().addClass('active');
      }
    }
  });
})(jQuery);