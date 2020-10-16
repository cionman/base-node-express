const EVENT_DRAW = 'sloDataTable:draw';
// const EVENT_FAIL = 'sloDataTable:fail';

const SloDataTable = function (element, options) {
    const _ = this;
    const $table = $(element);

    const settings = {
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
    const { $table, $searchForm, settings, options } = this;

    const columns = $('th', $table).map((_, element) => {
        const column = $(element).data('column');
        return {
            data: options[column] || column
        };
    });

    let searchFormData = $.extend({ page: 1, size: settings.lengthMenu[0] },
        $searchForm ? $searchForm.serializeObject() : null);
    if (settings.saveState) {
        if ($.SloUtil.getURLParameter('saveState')) {
            if (window.history.state) {
                searchFormData = window.history.state[settings.saveState]
                    || searchFormData;
            }
        }
    }

    const $filters = $('[data-filter]', $table);
    $filters.change(() => $dataTable.draw());

    const $dataTable = $table.on('draw.dt', () => $table.trigger(EVENT_DRAW)
    ).on('preXhr.dt', (e, _, data) => {
        const params = {
            page: (data.start / data.length) + 1,
            size: data.length,
        };
        Object.keys(data).forEach(key => delete data[key]);

        const filters = {};
        $filters.each((_, filter) => {
            const $filter = $(filter);
            filters[$filter.data('filter')] = $filter.val();
        });

        $.extend(data, searchFormData, params, filters);

        if (settings.saveState) {
            const currentState = window.history.state || {};
            currentState[settings.saveState] = data;
            window.history.pushState(currentState, '',
                '?' + $.SloUtil.mergeURLParameter('saveState', true));
        }
    }).on('xhr.dt', (e, _, json) => {
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
            error: (e) => {
                alert('데이터를 읽어오는 과정에서 에러가 발생했습니다. 화면을 리로드합니다.');
                console.error('datatable error : ', e);
                location.reload();
            }
        },
        columns
    });
    this.$dataTable = $dataTable;

    if ($searchForm) {
        $searchForm.submit(event => {
            event.preventDefault();

            searchFormData = $searchForm.serializeObject();
            $dataTable.draw();
        });
        $searchForm.on('reset', (event => {
            setTimeout(() => {
                searchFormData = $searchForm.serializeObject();
                $dataTable.draw();
            });
        }));
    }
};

SloDataTable.prototype.redraw = function () {
    this.$dataTable.draw();
};

$.fn.sloDataTable = function (options, ...args) {
    return this.each((index, item) => {
        let ret;
        if (typeof options === 'object' || typeof options === 'undefined') {
            item.sloDataTable = new SloDataTable(item, options);
        } else {
            ret = item.sloDataTable[options](...args);
        }

        if (typeof ret !== 'undefined') {
            return ret;
        }
    });
};
