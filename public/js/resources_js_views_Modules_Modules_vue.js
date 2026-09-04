"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Modules_Modules_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/TranslationHelper.js */ "./resources/js/mixins/TranslationHelper.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_TranslationHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: __('id'),
        "class": 'text-center',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'name',
        label: __('name'),
        "class": 'text-center'
      }, {
        key: 'image',
        label: __('image'),
        "class": 'text-center'
      }, {
        key: 'description',
        label: __('description') || 'Description',
        "class": 'text-center'
      }, {
        key: 'status',
        label: __('status'),
        "class": 'text-center'
      }, {
        key: 'actions',
        label: __('actions'),
        "class": 'text-center'
      }],
      totalRows: 0,
      currentPage: 1,
      perPage: this.$perPage || 10,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      isLoading: false,
      isSaving: false,
      modules: [],
      tableKey: 0,
      // Translation states
      id: null,
      status: 1,
      slug: '',
      slugManualEdit: false,
      languages: [],
      defaultLanguageId: null,
      currentLanguageId: null,
      activeTab: 0,
      form: {},
      imageFile: null,
      image_url: '',
      tabsKey: 0,
      // Translation settings
      translatableFields: ['name', 'description'],
      loadingEmpty: false,
      loadingOverwrite: false
    };
  },
  computed: {
    pageEnd: function pageEnd() {
      return Math.min(this.currentPage * this.perPage, this.totalRows);
    },
    translatedModules: function translatedModules() {
      var _this = this;
      var list = Array.isArray(this.modules) ? this.modules : [];
      if (!this.currentLanguageId || list.length === 0) {
        return list;
      }
      return list.map(function (module) {
        var translatedModule = _objectSpread({}, module);
        if (module.translations && Array.isArray(module.translations)) {
          var translation = module.translations.find(function (t) {
            return t.language_id === _this.currentLanguageId;
          });
          if (translation && translation.name && translation.name.trim() !== '') {
            translatedModule.name = translation.name;
          }
          if (translation && translation.description && translation.description.trim() !== '') {
            translatedModule.description = translation.description;
          }
        }
        return translatedModule;
      });
    }
  },
  created: function created() {
    this.loadLanguages();
    this.getRecords();
  },
  watch: {
    currentPage: function currentPage() {
      this.getRecords();
    },
    perPage: function perPage() {
      this.getRecords();
    },
    filter: function filter() {
      if (this.currentPage === 1) {
        this.getRecords();
      } else {
        this.currentPage = 1;
      }
    }
  },
  methods: {
    getRecords: function getRecords() {
      var _this2 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/modules', {
        params: {
          all: 1,
          page: this.currentPage,
          per_page: this.perPage,
          filter: this.filter
        }
      }).then(function (response) {
        _this2.isLoading = false;
        var data = response.data;
        _this2.modules = data.data;
        _this2.totalRows = data.data.length;
      })["catch"](function () {
        _this2.isLoading = false;
      });
    },
    resetForm: function resetForm() {
      var _this3 = this;
      this.form = {};
      this.id = null;
      this.status = 1;
      this.slug = '';
      this.slugManualEdit = false;
      this.imageFile = null;
      this.image_url = "";
      this.activeTab = 0;
      this.languages.forEach(function (lang) {
        _this3.$set(_this3.form, lang.id, {
          name: '',
          description: ''
        });
      });
    },
    initializeForm: function initializeForm() {
      var _this4 = this;
      this.languages.forEach(function (lang) {
        if (!_this4.form[lang.id]) {
          _this4.$set(_this4.form, lang.id, {
            name: '',
            description: ''
          });
        }
      });
    },
    loadLanguages: function loadLanguages() {
      var _this5 = this;
      return axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/active_languages').then(function (res) {
        _this5.languages = res.data.data;
        var defaultLang = _this5.languages.find(function (l) {
          return l.is_default;
        });
        _this5.defaultLanguageId = (defaultLang === null || defaultLang === void 0 ? void 0 : defaultLang.id) || null;
        var appLocale = window.appLocale || 'en';
        var currentLanguage = _this5.languages.find(function (lang) {
          return lang.code === appLocale;
        });
        if (currentLanguage) {
          _this5.currentLanguageId = currentLanguage.id;
        } else if (defaultLang) {
          _this5.currentLanguageId = defaultLang.id;
        }
        _this5.initializeForm();
      });
    },
    editRecord: function editRecord(item) {
      var _this6 = this;
      this.id = item.id;
      this.status = item.status;
      this.slug = item.slug || '';
      this.slugManualEdit = false;
      this.imageFile = null;
      this.image_url = item.image_url || '';
      this.initializeForm();
      this.languages.forEach(function (lang) {
        var translation = Array.isArray(item.translations) ? item.translations.find(function (t) {
          return t.language_id === lang.id;
        }) : null;
        if (lang.is_default) {
          _this6.$set(_this6.form, lang.id, {
            name: translation && translation.name && translation.name.trim() !== '' ? translation.name : item.name || '',
            description: translation && translation.description && translation.description.trim() !== '' ? translation.description : item.description || ''
          });
        } else {
          _this6.$set(_this6.form, lang.id, {
            name: translation && translation.name ? translation.name : '',
            description: translation && translation.description ? translation.description : ''
          });
        }
      });
      this.tabsKey++;
      this.$refs['edit-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['edit-modal'].hide();
    },
    handleFileUpload: function handleFileUpload(e) {
      var file = e.target.files[0];
      if (!file) return;
      var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        this.showError("Invalid image type");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        this.showError("Image must be less than 2MB");
        return;
      }
      this.imageFile = file;
      this.image_url = URL.createObjectURL(file);
    },
    dropFile: function dropFile(event) {
      event.preventDefault();
      this.$dragleaveFile(event);
      if (event.dataTransfer.files.length) {
        var file = event.dataTransfer.files[0];
        var validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "image/svg+xml"];
        if (!validTypes.includes(file.type)) {
          this.showError("Invalid image type");
          return;
        }
        if (file.size > 2 * 1024 * 1024) {
          this.showError("Image must be less than 2MB");
          return;
        }
        this.imageFile = file;
        this.image_url = URL.createObjectURL(file);
      }
    },
    toggleStatus: function toggleStatus(item) {
      var _this7 = this;
      if (item.status === 0) {
        var otherActiveModules = this.modules.filter(function (m) {
          return m.id !== item.id && m.status === 1;
        });
        if (otherActiveModules.length === 0) {
          this.showError(__('at_least_one_module_must_be_on') || 'At least one module must be active');
          item.status = 1;
          var originalModule = this.modules.find(function (m) {
            return m.id === item.id;
          });
          if (originalModule) {
            originalModule.status = 1;
          }
          this.tableKey++; // Force table re-render
          return;
        }
      }
      var fd = new FormData();
      fd.append('id', item.id);
      fd.append('name', item.name);
      fd.append('description', item.description || '');
      fd.append('status', item.status);
      fd.append('language_id', this.defaultLanguageId);
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/modules/update', fd).then(function (response) {
        if (response.data.status === 1) {
          _this7.showMessage('success', response.data.message || 'Status updated successfully');
          _this7.$eventBus.$emit('modulesUpdated');
          var _originalModule = _this7.modules.find(function (m) {
            return m.id === item.id;
          });
          if (_originalModule) {
            _originalModule.status = item.status;
          }
          var activeModuleId = Number(localStorage.getItem('active_module_id')) || 1;
          if (item.id === activeModuleId && item.status === 0) {
            var otherActiveModule = _this7.modules.find(function (m) {
              return m.id !== item.id && m.status === 1;
            });
            if (otherActiveModule) {
              localStorage.setItem('active_module_id', otherActiveModule.id);
              window.location.reload();
              return;
            }
          }
          _this7.getRecords();
        } else {
          _this7.showError(response.data.message);
          item.status = 1;
          var _originalModule2 = _this7.modules.find(function (m) {
            return m.id === item.id;
          });
          if (_originalModule2) {
            _originalModule2.status = 1;
          }
          _this7.tableKey++; // Force table re-render
          _this7.getRecords();
        }
      })["catch"](function () {
        _this7.showError(__('something_went_wrong'));
        item.status = 1;
        var originalModule = _this7.modules.find(function (m) {
          return m.id === item.id;
        });
        if (originalModule) {
          originalModule.status = 1;
        }
        _this7.tableKey++; // Force table re-render
        _this7.getRecords();
      });
    },
    validateDefaultLanguage: function validateDefaultLanguage() {
      if (!this.defaultLanguageId) {
        this.showError(__('default_language_not_found'));
        return false;
      }
      var defaultForm = this.form[this.defaultLanguageId];
      if (!defaultForm.name || defaultForm.name.trim() === '') {
        this.showError(__('please_fill_name_in_default_language'));
        this.switchToDefaultLanguageTab();
        return false;
      }
      if (!this.slug || this.slug.trim() === '') {
        this.showError(__('please_enter_slug') || 'Please enter slug');
        this.switchToDefaultLanguageTab();
        return false;
      }
      return true;
    },
    validateDefaultLanguageForTranslation: function validateDefaultLanguageForTranslation() {
      return this.validateDefaultLanguage();
    },
    switchToDefaultLanguageTab: function switchToDefaultLanguageTab() {
      var _this8 = this;
      var defaultLangIndex = this.languages.findIndex(function (lang) {
        return lang.id === _this8.defaultLanguageId;
      });
      if (defaultLangIndex !== -1) {
        this.activeTab = defaultLangIndex;
      }
    },
    saveRecord: function saveRecord() {
      var _this9 = this;
      if (!this.validateDefaultLanguage()) return;
      if (this.status === 0) {
        var otherActiveModules = this.modules.filter(function (m) {
          return m.id !== _this9.id && m.status === 1;
        });
        if (otherActiveModules.length === 0) {
          this.showError(__('at_least_one_module_must_be_on') || 'At least one module must be active');
          return;
        }
      }
      this.isSaving = true;
      var languagesToSave = [];
      var defaultLang = this.languages.find(function (l) {
        return l.is_default;
      });
      if (defaultLang) languagesToSave.push(defaultLang);
      this.languages.forEach(function (lang) {
        if (lang.is_default) return;
        var name = _this9.form[lang.id].name;
        if (name && name.trim() !== '') languagesToSave.push(lang);
      });
      var saveSequentially = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          var moduleId, _i, _languagesToSave, lang, fd;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  moduleId = _this9.id;
                  _i = 0, _languagesToSave = languagesToSave;
                case 2:
                  if (!(_i < _languagesToSave.length)) {
                    _context.next = 16;
                    break;
                  }
                  lang = _languagesToSave[_i];
                  fd = new FormData();
                  fd.append('id', moduleId);
                  fd.append('language_id', lang.id);
                  fd.append('name', _this9.form[lang.id].name);
                  fd.append('description', _this9.form[lang.id].description || '');
                  fd.append('status', _this9.status);
                  if (lang.is_default) {
                    fd.append('slug', _this9.slug);
                    if (_this9.imageFile) {
                      fd.append('image', _this9.imageFile);
                    }
                  }
                  _context.next = 13;
                  return axios__WEBPACK_IMPORTED_MODULE_1___default().post(_this9.$apiUrl + '/modules/update', fd);
                case 13:
                  _i++;
                  _context.next = 2;
                  break;
                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function saveSequentially() {
          return _ref.apply(this, arguments);
        };
      }();
      saveSequentially().then(function () {
        _this9.showMessage('success', __('module_updated_successfully') || 'Module updated successfully');
        _this9.$eventBus.$emit('modulesUpdated');
        var activeModuleId = Number(localStorage.getItem('active_module_id')) || 1;
        if (_this9.id === activeModuleId && _this9.status === 0) {
          var otherActiveModule = _this9.modules.find(function (m) {
            return m.id !== _this9.id && m.status === 1;
          });
          if (otherActiveModule) {
            localStorage.setItem('active_module_id', otherActiveModule.id);
            window.location.reload();
            return;
          }
        }
        _this9.hideModal();
        _this9.getRecords();
      })["catch"](function () {
        _this9.showError(__('something_went_wrong'));
      })["finally"](function () {
        _this9.isSaving = false;
      });
    },
    onNameInput: function onNameInput(e) {
      if (!this.slugManualEdit) {
        this.slug = this.slugify(e.target.value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/TranslationHelper.js":
/*!**************************************************!*\
  !*** ./resources/js/mixins/TranslationHelper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    translateEmpty: function translateEmpty(language) {
      var _this = this;
      this.$root.$emit('bv::hide::tooltip');
      if (typeof this.validateDefaultLanguageForTranslation === "function") {
        if (!this.validateDefaultLanguageForTranslation()) return;
      }
      if (this.hasOwnProperty("loadingEmpty")) {
        this.loadingEmpty = true;
      } else {
        this.isTranslating = true;
      }
      var fields = this.translatableFields || [];

      // Check if any field is empty in non-default language tabs
      var hasEmptyFields = this.checkNonDefaultLanguagesHaveEmptyFields(fields);
      if (!hasEmptyFields) {
        // All fields in all non-default languages already have values
        var errorMsg = __("translation_error_all_fields_filled") || "All fields already have values. There is nothing to translate.";
        if (this.hasOwnProperty("loadingEmpty")) {
          this.loadingEmpty = false;
        } else {
          this.isTranslating = false;
        }
        this.showError(errorMsg);
        return;
      }
      this.translateEmptyHelper(language, fields).then(function () {
        _this.showSuccess(__("translation_completed_successfully") || "Translation completed successfully");
      })["catch"](function () {
        // Error handling is done in translateEmptyHelper
      })["finally"](function () {
        if (_this.hasOwnProperty("loadingEmpty")) {
          _this.loadingEmpty = false;
        } else {
          _this.isTranslating = false;
        }
      });
    },
    translateOverwrite: function translateOverwrite(language) {
      var _this2 = this;
      this.$root.$emit('bv::hide::tooltip');
      if (typeof this.validateDefaultLanguageForTranslation === "function") {
        if (!this.validateDefaultLanguageForTranslation()) return;
      }
      if (this.hasOwnProperty("loadingOverwrite")) {
        this.loadingOverwrite = true;
      } else {
        this.isTranslating = true;
      }
      var fields = this.translatableFields || [];
      this.translateOverwriteHelper(language, fields).then(function () {
        _this2.showSuccess(__("translation_overwritten_successfully") || "Translation overwritten successfully");
      })["finally"](function () {
        if (_this2.hasOwnProperty("loadingOverwrite")) {
          _this2.loadingOverwrite = false;
        } else {
          _this2.isTranslating = false;
        }
      });
    },
    getDefaultLanguageData: function getDefaultLanguageData() {
      if (this.translations && this.translations[this.defaultLanguageId]) {
        return this.translations[this.defaultLanguageId];
      } else if (this.form && this.form[this.defaultLanguageId]) {
        return this.form[this.defaultLanguageId];
      }
      return {};
    },
    checkNonDefaultLanguagesHaveEmptyFields: function checkNonDefaultLanguagesHaveEmptyFields() {
      var fieldsToTranslate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // Determine target object (translations or form)
      var targetObj = null;
      if (this.translations) {
        targetObj = this.translations;
      } else if (this.form) {
        targetObj = this.form;
      }
      if (!targetObj || !this.languages || this.languages.length <= 1) {
        return true; // If no languages or only one language, allow translation
      }
      var fields = fieldsToTranslate.length > 0 ? fieldsToTranslate : this.translatableFields || [];
      if (fields.length === 0) {
        return true; // If no fields to check, allow translation
      }

      // Check if any non-default language has at least one empty field
      var _iterator = _createForOfIteratorHelper(this.languages),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var lang = _step.value;
          if (lang.is_default) continue; // Skip default language

          var langData = targetObj[lang.id];
          if (!langData) {
            return true; // If language data doesn't exist, there are empty fields
          }

          // Check if any field is empty for this language
          var _iterator2 = _createForOfIteratorHelper(fields),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var field = _step2.value;
              var value = langData[field];
              if (value === null || value === undefined || value === "" || typeof value === "string" && value.trim() === "") {
                return true; // Found at least one empty field
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false; // All fields in all non-default languages have values
    },
    translateEmptyHelper: function translateEmptyHelper(language) {
      var _this3 = this;
      var fieldsToTranslate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var source = this.getDefaultLanguageData();
      if (!source || Object.keys(source).length === 0) {
        var errorMsg = __("default_language_data_missing");
        this.showError(errorMsg);
        return Promise.reject("default_language_data_missing");
      }

      // Determine target object (translations or form)
      var targetObj = null;
      if (this.translations) {
        targetObj = this.translations;
      } else if (this.form) {
        targetObj = this.form;
      }
      var dataToSend = {};
      if (fieldsToTranslate.length > 0) {
        fieldsToTranslate.forEach(function (field) {
          dataToSend[field] = source[field];
        });
      } else {
        Object.keys(source).forEach(function (key) {
          if (_typeof(source[key]) !== "object") {
            dataToSend[key] = source[key];
          }
        });
      }

      // Check if all fields in dataToSend are null or empty
      var allFieldsNull = Object.keys(dataToSend).length > 0 && Object.keys(dataToSend).every(function (field) {
        var value = dataToSend[field];
        return value === null || value === undefined || value === "" || typeof value === "string" && value.trim() === "";
      });
      if (allFieldsNull) {
        var _errorMsg = __("translation_error_all_fields_empty") || "All fields are empty. Please fill at least one field in default language before translating.";
        this.showError(_errorMsg);
        return Promise.reject(new Error(_errorMsg));
      }
      return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/languages/translate-empty", {
        target_language: language.code,
        data: dataToSend
      }).then(function (res) {
        if (res.data.status === 0) {
          throw new Error(res.data.message || __("something_went_wrong"));
        }
        var allTranslations = res.data.data;
        _this3.languages.forEach(function (lang) {
          if (lang.is_default) return; // skip default language

          var translated = allTranslations[lang.code];
          if (!translated) return;
          Object.keys(translated).forEach(function (field) {
            if (targetObj && targetObj[lang.id]) {
              if (!targetObj[lang.id][field] || targetObj[lang.id][field] === "") {
                _this3.$set(targetObj[lang.id], field, translated[field]);
              }
            }
          });
        });
        if (typeof _this3.convertTagNamesToIds === "function") {
          _this3.$nextTick(function () {
            _this3.convertTagNamesToIds();
          });
        }
        return res;
      })["catch"](function (error) {
        var msg = error.message;
        if (error.response && error.response.data && error.response.data.message) {
          msg = error.response.data.message;
        }
        var errorMessage = msg || __("something_went_wrong");
        _this3.showError(errorMessage);
        throw error;
      });
    },
    translateOverwriteHelper: function translateOverwriteHelper(language) {
      var _this4 = this;
      var fieldsToTranslate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var source = this.getDefaultLanguageData();
      if (!source || Object.keys(source).length === 0) {
        var errorMsg = __("default_language_data_missing");
        this.showError(errorMsg);
        return Promise.reject("default_language_data_missing");
      }

      // Determine target object (translations or form)
      var targetObj = null;
      if (this.translations) {
        targetObj = this.translations;
      } else if (this.form) {
        targetObj = this.form;
      }
      var dataToSend = {};
      if (fieldsToTranslate.length > 0) {
        fieldsToTranslate.forEach(function (field) {
          dataToSend[field] = source[field];
        });
      } else {
        Object.keys(source).forEach(function (key) {
          if (_typeof(source[key]) !== "object") {
            dataToSend[key] = source[key];
          }
        });
      }

      // Check if all fields in dataToSend are null or empty
      var allFieldsNull = Object.keys(dataToSend).length > 0 && Object.keys(dataToSend).every(function (field) {
        var value = dataToSend[field];
        return value === null || value === undefined || value === "" || typeof value === "string" && value.trim() === "";
      });
      if (allFieldsNull) {
        var _errorMsg2 = __("translation_error_all_fields_empty") || "All fields are empty. Please fill at least one field in default language before translating.";
        this.showError(_errorMsg2);
        return Promise.reject(new Error(_errorMsg2));
      }
      return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/languages/translate-overwrite", {
        target_language: language.code,
        data: dataToSend
      }).then(function (res) {
        if (res.data.status === 0) {
          throw new Error(res.data.message || __("something_went_wrong"));
        }
        var allTranslations = res.data.data;
        _this4.languages.forEach(function (lang) {
          if (lang.is_default) return;
          var translated = allTranslations[lang.code];
          if (!translated) return;
          Object.keys(translated).forEach(function (field) {
            if (targetObj && targetObj[lang.id]) {
              _this4.$set(targetObj[lang.id], field, translated[field]);
            }
          });
        });
        if (typeof _this4.convertTagNamesToIds === "function") {
          _this4.$nextTick(function () {
            _this4.convertTagNamesToIds();
          });
        }
        return res;
      })["catch"](function (error) {
        var msg = error.message;
        if (error.response && error.response.data && error.response.data.message) {
          msg = error.response.data.message;
        }
        var errorMessage = msg || __("something_went_wrong");
        _this4.showError(errorMessage);
        throw error;
      })["finally"](function () {
        _this4.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.file-input-div[data-v-b99ddee0] {\n    border: 2px dashed #d1d5db;\n    border-radius: 8px;\n    padding: 20px;\n    text-align: center;\n    cursor: pointer;\n    display: block;\n    transition: all 0.2s ease-in-out;\n}\n.file-input-div[data-v-b99ddee0]:hover {\n    background-color: #f3f4f6;\n    border-color: #9ca3af;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_style_index_0_id_b99ddee0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_style_index_0_id_b99ddee0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_style_index_0_id_b99ddee0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Modules/Modules.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Modules/Modules.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modules_vue_vue_type_template_id_b99ddee0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules.vue?vue&type=template&id=b99ddee0&scoped=true */ "./resources/js/views/Modules/Modules.vue?vue&type=template&id=b99ddee0&scoped=true");
/* harmony import */ var _Modules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules.vue?vue&type=script&lang=js */ "./resources/js/views/Modules/Modules.vue?vue&type=script&lang=js");
/* harmony import */ var _Modules_vue_vue_type_style_index_0_id_b99ddee0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css */ "./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modules_vue_vue_type_template_id_b99ddee0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Modules_vue_vue_type_template_id_b99ddee0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b99ddee0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Modules/Modules.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Modules/Modules.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/Modules/Modules.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modules.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_style_index_0_id_b99ddee0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=style&index=0&id=b99ddee0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Modules/Modules.vue?vue&type=template&id=b99ddee0&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Modules/Modules.vue?vue&type=template&id=b99ddee0&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_template_id_b99ddee0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_template_id_b99ddee0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modules_vue_vue_type_template_id_b99ddee0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modules.vue?vue&type=template&id=b99ddee0&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=template&id=b99ddee0&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=template&id=b99ddee0&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Modules/Modules.vue?vue&type=template&id=b99ddee0&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "page-heading" }, [
        _c("div", { staticClass: "page-title mb-2" }, [
          _c(
            "div",
            {
              staticClass: "d-flex justify-content-between align-items-center",
            },
            [
              _c("h3", { staticClass: "modern-page-title mb-0" }, [
                _vm._v(_vm._s(_vm.__("modules") || "Modules")),
              ]),
              _vm._v(" "),
              _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
                _c("ol", { staticClass: "breadcrumb mb-0" }, [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-muted",
                          attrs: { to: "/dashboard" },
                        },
                        [_vm._v(_vm._s(_vm.__("dashboard")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active text-primary",
                      attrs: { "aria-current": "page" },
                    },
                    [_vm._v(_vm._s(_vm.__("modules") || "Modules"))]
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "figma-main-section-card" }, [
          _c("div", { staticClass: "card-body p-0" }, [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between align-items-center flex-wrap gap-2 figma-action-bar-row",
              },
              [
                _c("div", { staticClass: "flex-grow-1" }, [
                  _c("div", { staticClass: "figma-search-container" }, [
                    _c("i", { staticClass: "fa fa-search text-muted" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filter,
                          expression: "filter",
                        },
                      ],
                      staticClass: "figma-search-input",
                      attrs: { type: "text", placeholder: _vm.__("search") },
                      domProps: { value: _vm.filter },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.filter = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex gap-2 align-items-center flex-wrap" },
                  [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: true },
                          },
                        ],
                        staticClass:
                          "btn btn-figma-filter d-flex align-items-center gap-2",
                        attrs: { title: _vm.__("refresh") },
                        on: {
                          click: function ($event) {
                            return _vm.getRecords()
                          },
                        },
                      },
                      [
                        _c("i", { staticClass: "fa fa-refresh" }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.__("refresh") || "Refresh")),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive mb-0" },
              [
                _c("b-table", {
                  key: _vm.tableKey,
                  staticClass: "mb-0",
                  attrs: {
                    items: _vm.translatedModules,
                    fields: _vm.fields,
                    filter: _vm.filter,
                    "sort-by": _vm.sortBy,
                    "sort-desc": _vm.sortDesc,
                    "sort-direction": _vm.sortDirection,
                    bordered: false,
                    busy: _vm.isLoading,
                    "show-empty": "",
                    small: "",
                  },
                  on: {
                    "update:sortBy": function ($event) {
                      _vm.sortBy = $event
                    },
                    "update:sort-by": function ($event) {
                      _vm.sortBy = $event
                    },
                    "update:sortDesc": function ($event) {
                      _vm.sortDesc = $event
                    },
                    "update:sort-desc": function ($event) {
                      _vm.sortDesc = $event
                    },
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "table-busy",
                      fn: function () {
                        return [
                          _c(
                            "div",
                            { staticClass: "text-center text-black my-2" },
                            [
                              _c("b-spinner", { staticClass: "align-middle" }),
                              _vm._v(" "),
                              _c("strong", [
                                _vm._v(_vm._s(_vm.__("loading")) + "..."),
                              ]),
                            ],
                            1
                          ),
                        ]
                      },
                      proxy: true,
                    },
                    {
                      key: "cell(id)",
                      fn: function (row) {
                        return [
                          _vm._v(
                            "\n                            " +
                              _vm._s(row.item.id) +
                              "\n                        "
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(image)",
                      fn: function (row) {
                        return [
                          !row.item.image_url
                            ? _c("p", { staticClass: "mb-0 text-muted" }, [
                                _vm._v(_vm._s(_vm.__("no_image"))),
                              ])
                            : _c("img", {
                                staticClass: "rounded",
                                staticStyle: {
                                  "object-fit": "cover",
                                  width: "50px",
                                },
                                attrs: {
                                  src: row.item.image_url,
                                  height: "50",
                                },
                              }),
                        ]
                      },
                    },
                    {
                      key: "cell(description)",
                      fn: function (row) {
                        return [
                          _c(
                            "p",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: true },
                                },
                              ],
                              staticClass:
                                "mb-0 text-truncate text-center mx-auto",
                              staticStyle: { "max-width": "250px" },
                              attrs: {
                                title:
                                  row.item.description ||
                                  _vm.__("no_description"),
                              },
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    row.item.description ||
                                      _vm.__("no_description")
                                  ) +
                                  "\n                            "
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(status)",
                      fn: function (row) {
                        return [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-check form-switch d-flex justify-content-center",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.item.status,
                                    expression: "row.item.status",
                                  },
                                ],
                                staticClass: "form-check-input",
                                staticStyle: { cursor: "pointer" },
                                attrs: {
                                  type: "checkbox",
                                  id: "status-" + row.item.id,
                                  "true-value": 1,
                                  "false-value": 0,
                                },
                                domProps: {
                                  checked: Array.isArray(row.item.status)
                                    ? _vm._i(row.item.status, null) > -1
                                    : _vm._q(row.item.status, 1),
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      var $$a = row.item.status,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? 1 : 0
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              row.item,
                                              "status",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              row.item,
                                              "status",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(row.item, "status", $$c)
                                      }
                                    },
                                    function ($event) {
                                      return _vm.toggleStatus(row.item)
                                    },
                                  ],
                                },
                              }),
                            ]
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(actions)",
                      fn: function (row) {
                        return [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-center gap-2",
                            },
                            [
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: true },
                                    },
                                  ],
                                  staticClass: "figma-action-btn",
                                  attrs: { title: _vm.__("edit") },
                                  on: {
                                    click: function ($event) {
                                      return _vm.editRecord(row.item)
                                    },
                                  },
                                },
                                [
                                  _c("base-icon", {
                                    attrs: {
                                      name: "edit icon",
                                      hoverName: "edit Hover",
                                      width: "24",
                                      height: "24",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "figma-table-footer flex-wrap gap-3" }, [
              _c("div", { staticClass: "showing-results-text small" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.__("Showing Result")) +
                    " : "
                ),
                _c("span", { staticClass: "showing-bold" }, [
                  _vm._v(_vm._s(_vm.pageEnd)),
                ]),
                _vm._v(" " + _vm._s(_vm.__("of") || "of") + " "),
                _c("span", { staticClass: "showing-bold" }, [
                  _vm._v(_vm._s(_vm.totalRows)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center gap-3" },
                [
                  _c("b-pagination", {
                    staticClass: "figma-pagination mb-0",
                    attrs: {
                      "total-rows": _vm.totalRows,
                      "per-page": _vm.perPage,
                      align: "right",
                      "hide-goto-end-buttons": "",
                      "hide-ellipsis": "",
                      "prev-text": "<",
                      "next-text": ">",
                    },
                    model: {
                      value: _vm.currentPage,
                      callback: function ($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage",
                    },
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "edit-modal",
          attrs: {
            id: "editModuleModal",
            title: _vm.__("edit_module") || "Edit Module",
            scrollable: "",
            "no-close-on-backdrop": "",
            "no-fade": "",
            static: "",
          },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function () {
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "primary", disabled: _vm.isSaving },
                      on: {
                        click: function ($event) {
                          return _vm.$refs["dummy_submit"].click()
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.__("save")) +
                          "\n                "
                      ),
                      _vm.isSaving
                        ? _c("b-spinner", {
                            attrs: { small: "", label: "Saving" },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary" },
                      on: { click: _vm.hideModal },
                    },
                    [_vm._v(_vm._s(_vm.__("cancel")))]
                  ),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "form",
            {
              ref: "edit-form",
              attrs: { novalidate: "" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.saveRecord.apply(null, arguments)
                },
              },
            },
            [
              _vm.languages.length
                ? _c(
                    "b-tabs",
                    {
                      key: _vm.tabsKey,
                      attrs: { "content-class": "mt-3" },
                      model: {
                        value: _vm.activeTab,
                        callback: function ($$v) {
                          _vm.activeTab = $$v
                        },
                        expression: "activeTab",
                      },
                    },
                    _vm._l(_vm.languages, function (lang, index) {
                      return _c(
                        "b-tab",
                        {
                          key: lang.id,
                          attrs: {
                            title: lang.name,
                            active: lang.is_default == 1,
                          },
                        },
                        [
                          lang.is_default && _vm.languages.length > 1
                            ? _c(
                                "div",
                                { staticClass: "mb-3" },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      staticClass: "mr-2",
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-primary",
                                        title: _vm.__(
                                          "only_empty_fields_will_be_translated_existing_content_will_not_be_changed"
                                        ),
                                        disabled: _vm.loadingEmpty,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.translateEmpty(lang)
                                        },
                                      },
                                    },
                                    [
                                      !_vm.loadingEmpty
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.__("translate_empty_fields")
                                              )
                                            ),
                                          ])
                                        : _c("b-spinner", {
                                            attrs: { small: "" },
                                          }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-danger",
                                        title: _vm.__(
                                          "all_fields_will_be_translated_and_existing_content_will_be_overwritten"
                                        ),
                                        disabled: _vm.loadingOverwrite,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.translateOverwrite(lang)
                                        },
                                      },
                                    },
                                    [
                                      !_vm.loadingOverwrite
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.__(
                                                  "translate_and_overwrite"
                                                )
                                              )
                                            ),
                                          ])
                                        : _c("b-spinner", {
                                            attrs: { small: "" },
                                          }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group mb-3" }, [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v(_vm._s(_vm.__("name")) + " "),
                              lang.is_default
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*"),
                                  ])
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form[lang.id].name,
                                  expression: "form[lang.id].name",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: _vm.__("enter_name"),
                                required: lang.is_default ? true : undefined,
                              },
                              domProps: { value: _vm.form[lang.id].name },
                              on: {
                                input: [
                                  function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form[lang.id],
                                      "name",
                                      $event.target.value
                                    )
                                  },
                                  function ($event) {
                                    lang.is_default
                                      ? _vm.onNameInput($event)
                                      : null
                                  },
                                ],
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          lang.is_default
                            ? _c("div", { staticClass: "form-group mb-3" }, [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v(
                                    _vm._s(_vm.__("slug") || "Slug") + " "
                                  ),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*"),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.slug,
                                      expression: "slug",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder:
                                      _vm.__("enter_slug") || "Enter Slug",
                                    required: "",
                                  },
                                  domProps: { value: _vm.slug },
                                  on: {
                                    input: [
                                      function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.slug = $event.target.value
                                      },
                                      function ($event) {
                                        _vm.slugManualEdit = true
                                      },
                                    ],
                                  },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group mb-3" }, [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v(_vm._s(_vm.__("description"))),
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form[lang.id].description,
                                  expression: "form[lang.id].description",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                rows: "3",
                                placeholder:
                                  _vm.__("enter_description") ||
                                  "Enter Description",
                              },
                              domProps: {
                                value: _vm.form[lang.id].description,
                              },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form[lang.id],
                                    "description",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          lang.is_default
                            ? [
                                _c("div", { staticClass: "form-group mb-3" }, [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(_vm._s(_vm.__("image"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "d-none",
                                    attrs: {
                                      type: "file",
                                      id: "module_image",
                                      accept: "image/*",
                                    },
                                    on: { change: _vm.handleFileUpload },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "file-input-div bg-gray-100",
                                      attrs: { for: "module_image" },
                                      on: {
                                        dragover: _vm.$dragoverFile,
                                        dragleave: _vm.$dragleaveFile,
                                        drop: _vm.dropFile,
                                      },
                                    },
                                    [
                                      _vm.imageFile && _vm.imageFile.name
                                        ? [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.__("selected_file_name")
                                                ) +
                                                ": " +
                                                _vm._s(_vm.imageFile.name) +
                                                "\n                                "
                                            ),
                                          ]
                                        : [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-cloud-upload-alt fa-2x mb-2 text-muted",
                                            }),
                                            _c("br"),
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.__(
                                                    "drop_files_here_or_click_to_upload"
                                                  )
                                                ) +
                                                "\n                                "
                                            ),
                                          ],
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _vm.image_url
                                    ? _c(
                                        "div",
                                        { staticClass: "mt-2 text-center" },
                                        [
                                          _c("img", {
                                            staticClass: "img-thumbnail",
                                            staticStyle: {
                                              "max-height": "150px",
                                              "object-fit": "contain",
                                            },
                                            attrs: { src: _vm.image_url },
                                          }),
                                        ]
                                      )
                                    : _vm._e(),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group mb-3" },
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "form-label d-block" },
                                      [_vm._v(_vm._s(_vm.__("status")))]
                                    ),
                                    _vm._v(" "),
                                    _c("b-form-radio-group", {
                                      attrs: {
                                        options: [
                                          {
                                            text: _vm.__("deactivate"),
                                            value: 0,
                                          },
                                          {
                                            text: _vm.__("activate"),
                                            value: 1,
                                          },
                                        ],
                                        buttons: "",
                                        "button-variant": "outline-primary",
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.status,
                                        callback: function ($$v) {
                                          _vm.status = $$v
                                        },
                                        expression: "status",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            : _vm._e(),
                        ],
                        2
                      )
                    }),
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("button", {
                ref: "dummy_submit",
                staticStyle: { display: "none" },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);