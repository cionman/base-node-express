// Validation errors messages for Parsley
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
};

//var passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\\-_=+\\\\|\\[\\]{};:\'",.<>/?~`&]).{9,20}$'); //영 숫자 특문 포함
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


