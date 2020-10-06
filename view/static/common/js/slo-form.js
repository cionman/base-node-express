const EVENT_DONE = 'sloForm:done';
const EVENT_FAIL = 'sloForm:fail';

const SloForm = function (element, options) {
  const _ = this;
  const $form = $(element);

  const defaults = {
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
  const {options, $form} = this;
  let processing = false;

  const $submit = $('button[type=submit]', $form);
  $submit.parent().append(
      '<div class="help-block help-block-error"></div>');

  $form.parsley(window.parsleyConfig);

  $form.submit(event => {
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

    const data = $form.serializeObject();

    $.ajax({
      headers: {'X-CSRF-TOKEN': $('meta[name=_csrf_token]').attr('content')},
      method: options.method,
      contentType: 'application/json',
      dataType: 'json',
      url: options.url,
      data: JSON.stringify(data)
    }).done(result => {
      const {msg} = result;

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
    }).fail(result => {
      const {status, responseJSON} = result;
      let {msg} = responseJSON;

      $submit.removeClass('has-success');

      if (status === 400) {
        const {fieldErrors} = responseJSON;
        if (fieldErrors) {
          msg = fieldErrors.map(
              item => item.field + ' ' + item.reason).join('<br>');
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
    }).always(() => {
      processing = false;
    });
  });
};

$.fn.sloForm = function (options) {
  return this.each((index, item) => {
    item.sloForm = new SloForm(item, options);
  });
};
