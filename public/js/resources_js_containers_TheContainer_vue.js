"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_containers_TheContainer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar */ "./resources/js/containers/TheSidebar.vue");
/* harmony import */ var _TheFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter */ "./resources/js/containers/TheFooter.vue");
/* harmony import */ var _VerticalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalHeader */ "./resources/js/containers/VerticalHeader.vue");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth */ "./resources/js/Auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
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
  name: 'TheContainer',
  components: {
    TheSidebar: _TheSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheFooter: _TheFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    VerticalHeader: _VerticalHeader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.closeSideBarMenu();
    this.checkPermissions();
  },
  watch: {
    '$route': 'checkPermissions'
  },
  mounted: function mounted() {
    if (window.localStorage.getItem('lang')) {
      this.lang = window.localStorage.getItem('lang');
      console.log(this.lang);
    }
    function slideToggle(t, e, o) {
      0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o);
    }
    function slideUp(t, e, o) {
      j(t, e, o);
    }
    function slideDown(t, e, o) {
      j(t, e, o, !0);
    }
    function j(t, e, o, i) {
      void 0 === e && (e = 400), void 0 === i && (i = !1), t.style.overflow = "hidden", i && (t.style.display = "block");
      var p,
        l = window.getComputedStyle(t),
        n = parseFloat(l.getPropertyValue("height")),
        a = parseFloat(l.getPropertyValue("padding-top")),
        s = parseFloat(l.getPropertyValue("padding-bottom")),
        r = parseFloat(l.getPropertyValue("margin-top")),
        d = parseFloat(l.getPropertyValue("margin-bottom")),
        g = n / e,
        y = a / e,
        m = s / e,
        u = r / e,
        h = d / e;
      window.requestAnimationFrame(function l(x) {
        void 0 === p && (p = x);
        var f = x - p;
        i ? (t.style.height = g * f + "px", t.style.paddingTop = y * f + "px", t.style.paddingBottom = m * f + "px", t.style.marginTop = u * f + "px", t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px", t.style.paddingTop = a - y * f + "px", t.style.paddingBottom = s - m * f + "px", t.style.marginTop = r - u * f + "px", t.style.marginBottom = d - h * f + "px"), f >= e ? (t.style.height = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.marginTop = "", t.style.marginBottom = "", t.style.overflow = "", i || (t.style.display = "none"), "function" == typeof o && o()) : window.requestAnimationFrame(l);
      });
    }
    var sidebarItems = document.querySelectorAll('.sidebar-item.has-sub');
    // Mark initially open submenus with 'open' class for toggle icon
    sidebarItems.forEach(function (item) {
      var submenu = item.querySelector('.submenu');
      if (submenu && submenu.classList.contains('active')) {
        item.classList.add('open');
      }
    });
    var _loop = function _loop() {
      var sidebarItem = sidebarItems[i];
      sidebarItems[i].querySelector('.sidebar-link').addEventListener('click', function (e) {
        var _submenu$classList;
        e.preventDefault();
        var submenu = sidebarItem.querySelector('.submenu');
        var isCurrentlyOpen = submenu === null || submenu === void 0 ? void 0 : (_submenu$classList = submenu.classList) === null || _submenu$classList === void 0 ? void 0 : _submenu$classList.contains('active');

        // Accordion: close all other open submenus
        sidebarItems.forEach(function (otherItem) {
          if (otherItem !== sidebarItem) {
            var otherSubmenu = otherItem.querySelector('.submenu');
            if (otherSubmenu && otherSubmenu.classList.contains('active')) {
              otherSubmenu.classList.remove('active');
              // Use the same animation instead of setting display: none instantly
              slideUp(otherSubmenu, 300);
              otherItem.classList.remove('open');
            }
          }
        });

        // Toggle current submenu
        if (isCurrentlyOpen) {
          var _submenu$classList2;
          submenu === null || submenu === void 0 ? void 0 : (_submenu$classList2 = submenu.classList) === null || _submenu$classList2 === void 0 ? void 0 : _submenu$classList2.remove('active');
          sidebarItem.classList.remove('open');
          slideUp(submenu, 300);
        } else {
          var _submenu$classList3;
          submenu === null || submenu === void 0 ? void 0 : (_submenu$classList3 = submenu.classList) === null || _submenu$classList3 === void 0 ? void 0 : _submenu$classList3.add('active');
          sidebarItem.classList.add('open');
          slideDown(submenu, 300);
        }
      });
    };
    for (var i = 0; i < sidebarItems.length; i++) {
      _loop();
    }
    window.addEventListener('DOMContentLoaded', function (event) {
      var w = window.innerWidth;
      if (w < 1200) {
        var _document$getElementB, _document$getElementB2;
        (_document$getElementB = document.getElementById('sidebar')) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.classList) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.remove('active');
      }
    });
    // Update backdrop when sidebar opens/closes on small screens
    var updateSidebarBackdrop = function updateSidebarBackdrop() {
      var _sidebar$classList;
      var sidebar = document.getElementById('sidebar');
      var backdrop = document.querySelector('.sidebar-backdrop');
      var isSmallScreen = window.innerWidth < 1200;
      var isActive = sidebar === null || sidebar === void 0 ? void 0 : (_sidebar$classList = sidebar.classList) === null || _sidebar$classList === void 0 ? void 0 : _sidebar$classList.contains('active');
      if (backdrop) backdrop.remove();
      if (isSmallScreen && isActive) {
        var b = document.createElement('div');
        b.className = 'sidebar-backdrop';
        b.addEventListener('click', function () {
          var _sidebar$classList2;
          sidebar === null || sidebar === void 0 ? void 0 : (_sidebar$classList2 = sidebar.classList) === null || _sidebar$classList2 === void 0 ? void 0 : _sidebar$classList2.remove('active');
          updateSidebarBackdrop();
        });
        document.body.appendChild(b);
      }
    };
    window.addEventListener('resize', function (event) {
      var w = window.innerWidth;
      if (w < 1200) {
        var _document$getElementB3, _document$getElementB4;
        (_document$getElementB3 = document.getElementById('sidebar')) === null || _document$getElementB3 === void 0 ? void 0 : (_document$getElementB4 = _document$getElementB3.classList) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.remove('active');
        updateSidebarBackdrop();
      } else {
        var _document$getElementB5, _document$getElementB6;
        (_document$getElementB5 = document.getElementById('sidebar')) === null || _document$getElementB5 === void 0 ? void 0 : (_document$getElementB6 = _document$getElementB5.classList) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.add('active');
        updateSidebarBackdrop();
      }
    });
    document.querySelector('.burger-btn').addEventListener('click', function () {
      var _document$getElementB7, _document$getElementB8;
      (_document$getElementB7 = document.getElementById('sidebar')) === null || _document$getElementB7 === void 0 ? void 0 : (_document$getElementB8 = _document$getElementB7.classList) === null || _document$getElementB8 === void 0 ? void 0 : _document$getElementB8.toggle('active');
      updateSidebarBackdrop();
    });
    document.querySelector('.sidebar-hide').addEventListener('click', function () {
      var _document$getElementB9, _document$getElementB10;
      (_document$getElementB9 = document.getElementById('sidebar')) === null || _document$getElementB9 === void 0 ? void 0 : (_document$getElementB10 = _document$getElementB9.classList) === null || _document$getElementB10 === void 0 ? void 0 : _document$getElementB10.toggle('active');
      updateSidebarBackdrop();
    });
    // Perfect Scrollbar Init
    if (typeof PerfectScrollbar["default"] == 'function') {
      var container = document.querySelector(".sidebar-wrapper");
      var ps = new PerfectScrollbar["default"](container, {
        wheelPropagation: false
      });
    }

    // Scroll into active sidebar
    if (document.querySelector('.sidebar-item.active')) {
      document.querySelector('.sidebar-item.active').scrollIntoView(false);
    }
  },
  data: function data() {
    return {
      lang: 'en',
      search: '',
      isLoading: false,
      suspecious: null,
      sidebarItems: [{
        name: __('dashboard'),
        icon: 'tachometer-alt',
        url: '/dashboard',
        permission: 'manage_dashboard'
      }, {
        name: __('modules'),
        icon: 'cubes',
        url: '/modules',
        permission: 'module_list',
        is_general: true
      }, {
        name: __('orders'),
        icon: 'shopping-cart',
        url: '/orders',
        permission: 'order_list'
      }, {
        name: __('self_pickup_orders'),
        icon: 'box-open',
        url: '/self_pickup_orders',
        permission: 'self_pickup_order_list'
      }, {
        name: __('categories'),
        icon: 'bullseye',
        permission: null,
        submenu: [{
          name: __('add_category'),
          icon: 'grid-fill',
          url: '/manage_categories/create',
          permission: 'category_create'
        }, {
          name: __('manage_categories'),
          icon: 'grid-fill',
          url: '/manage_categories',
          permission: 'category_list'
        }, {
          name: __('categories_order'),
          icon: 'grid-fill',
          url: '/categories_order',
          permission: 'manage_categories_order'
        }]
      }, {
        name: __('products'),
        icon: 'cubes',
        permission: null,
        submenu: [{
          name: __('add_product'),
          icon: 'grid-fill',
          url: '/manage_products/create',
          permission: 'product_create'
        }, {
          name: __('manage_products'),
          icon: 'grid-fill',
          url: '/manage_products',
          permission: 'product_list'
        }, {
          name: __('approve_requests'),
          icon: 'grid-fill',
          url: '/approve_requests',
          permission: 'approve_requests'
        }, {
          name: __('units'),
          icon: 'grid-fill',
          url: '/units',
          permission: 'units'
        }, {
          name: __('product_ratings'),
          icon: 'grid-fill',
          url: '/product_ratings',
          permission: 'product_ratings'
        }, {
          name: __('media'),
          icon: 'grid-fill',
          url: '/media',
          permission: 'manage_media'
        }, {
          name: __('bulk_upload'),
          icon: 'grid-fill',
          url: '/bulk_upload',
          permission: 'manage_product_bulk_upload'
        }, {
          name: __('bulk_update'),
          icon: 'grid-fill',
          url: '/bulk_update',
          permission: 'manage_product_bulk_upload'
        }, {
          name: __('taxes'),
          icon: 'grid-fill',
          url: '/taxes',
          permission: 'taxes'
        }, {
          name: __('brands'),
          icon: 'grid-fill',
          url: '/brands',
          permission: 'brands'
        }, {
          name: __('product_order'),
          icon: 'grid-fill',
          url: '/product_order',
          permission: 'manage_product_order'
        }]
      }, {
        name: __('stock_management'),
        icon: 'cubes',
        url: '/manage_stock',
        permission: 'stock_management'
      }, {
        name: __('sellers'),
        icon: 'male',
        permission: null,
        submenu: [{
          name: __('add_seller'),
          icon: 'grid-fill',
          url: '/sellers/create',
          permission: 'seller_create'
        }, {
          name: __('seller_requests'),
          icon: 'grid-fill',
          url: '/registered_sellers',
          permission: 'seller_requests'
        }, {
          name: __('manage_sellers'),
          icon: 'grid-fill',
          url: '/sellers',
          permission: 'seller_list'
        }, {
          name: __('seller_wallet_transactions'),
          icon: 'grid-fill',
          url: '/seller_wallet_transactions',
          permission: 'seller_wallet_transactions'
        }, {
          name: __('policies_seller'),
          icon: 'grid-fill',
          url: '/privacy_policy_seller',
          permission: 'manage_privacy_policy_seller_app'
        }]
      }, {
        name: __('home_sliders'),
        icon: 'picture-o',
        permission: 'home_slider_image_list',
        submenu: [{
          name: __('add_home_slider'),
          icon: 'grid-fill',
          url: '/home_sliders/create',
          permission: 'home_slider_image_create'
        }, {
          name: __('manager_home_sliders'),
          icon: 'grid-fill',
          url: '/home_sliders',
          permission: 'home_slider_image_list'
        }]
      }, {
        name: __('offer_image'),
        icon: 'gift',
        permission: null,
        submenu: [{
          name: __('add_offer_images'),
          icon: 'grid-fill',
          url: '/offers/create',
          permission: 'new_offer_image_create'
        }, {
          name: __('manage_offer_images'),
          icon: 'grid-fill',
          url: '/offers',
          permission: 'new_offer_image_list'
        }, {
          name: __('manage_popup_offer'),
          icon: 'grid-fill',
          url: '/popup',
          permission: 'new_offer_image_list'
        }]
      }, {
        name: __('promo_code'),
        icon: 'gift',
        permission: 'promo_code_list',
        submenu: [{
          name: __('add_promo_code'),
          icon: 'grid-fill',
          url: '/promo_code/create',
          permission: 'promo_code_create'
        }, {
          name: __('manage_promo_code'),
          icon: 'grid-fill',
          url: '/promo_code',
          permission: 'promo_code_list'
        }]
      }, {
        name: __('featured_sections'),
        icon: 'puzzle-piece',
        permission: 'featured_section_list',
        submenu: [{
          name: __('add_section'),
          icon: 'grid-fill',
          url: '/sections/create',
          permission: 'featured_section_create'
        }, {
          name: __('manage_section'),
          icon: 'grid-fill',
          url: '/sections',
          permission: 'featured_section_list'
        }]
      }, {
        name: __('return_requests'),
        icon: 'retweet',
        url: '/return_requests',
        permission: 'return_request_list'
      }, {
        name: __('withdrawal_requests'),
        icon: 'credit-card',
        url: '/withdrawal_requests',
        permission: 'withdrawal_request_list'
      }, {
        name: __('delivery_boys'),
        icon: 'male',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('add_delivery_boy'),
          icon: 'grid-fill',
          url: '/delivery_boys/create',
          permission: 'delivery_boy_create'
        }, {
          name: __('dlivery_boy_requests'),
          icon: 'grid-fill',
          url: '/registered_delivery_boys',
          permission: 'delivery_boy_list'
        }, {
          name: __('manage_delivery_boys'),
          icon: 'grid-fill',
          url: '/delivery_boys',
          permission: 'delivery_boy_list'
        }, {
          name: __('fund_transfers'),
          icon: 'grid-fill',
          url: '/fund_transfers',
          permission: 'fund_transfers_list'
        }, {
          name: __('delivery_boy_cash'),
          icon: 'grid-fill',
          url: '/cash_collection',
          permission: 'cash_collection_list'
        }, {
          name: __('delivery_boy_policies'),
          icon: 'grid-fill',
          url: '/privacy_policy_delivery_boy',
          permission: 'manage_privacy_policy_delivery_boy'
        }, {
          name: __('Salary'),
          icon: 'grid-fill',
          url: '/salary',
          permission: 'salary_list'
        }]
      }, {
        name: __('notifications'),
        icon: 'share-square',
        url: '/notifications',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('send_notifications'),
          icon: 'grid-fill',
          url: '/notifications/create',
          permission: 'send_notification'
        }, {
          name: __('manage_notifications'),
          icon: 'grid-fill',
          url: '/notifications',
          permission: 'notification_list'
        }]
      }, {
        name: __('email'),
        icon: 'share-square',
        url: '/emails',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('email_templates'),
          icon: 'grid-fill',
          url: '/email_templates',
          permission: 'email_templates'
        }, {
          name: __('manage_emails'),
          icon: 'grid-fill',
          url: '/emails',
          permission: 'manage_emails'
        }]
      }, {
        name: __('system'),
        icon: 'wrench',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('store_settings'),
          icon: 'grid-fill',
          url: '/store_settings',
          permission: 'manage_store_settings'
        }, {
          name: __('delivery_settings'),
          icon: 'grid-fill',
          url: '/delivery_settings',
          permission: 'manage_time_slots'
        }, {
          name: __('payment_methods'),
          icon: 'grid-fill',
          url: '/payment_methods',
          permission: 'manage_payment_methods'
        }, {
          name: __('additional_charge'),
          icon: 'grid-fill',
          url: '/additional_charges',
          permission: 'additional_charges_list'
        }, {
          name: __('contact_us'),
          icon: 'grid-fill',
          url: '/contact_us',
          permission: 'manage_contact_us'
        }, {
          name: __('about_us'),
          icon: 'grid-fill',
          url: '/about_us',
          permission: 'manage_about_us'
        }, {
          name: __('firebase_settings'),
          icon: 'grid-fill',
          url: '/firebase-settings',
          permission: 'manage_Notification_settings'
        }, {
          name: __('notification_templates'),
          icon: 'grid-fill',
          url: '/notification-templates',
          permission: 'manage_Notification_settings'
        }, {
          name: __('sms_settings'),
          icon: 'grid-fill',
          url: '/sms-settings',
          permission: 'manage_store_settings'
        }, {
          name: __('sms_templates'),
          icon: 'grid-fill',
          url: '/sms-templates',
          permission: 'manage_store_settings'
        }, {
          name: __('seo_settings'),
          icon: 'grid-fill',
          url: '/seo-settings',
          permission: 'manage_store_settings'
        }, {
          name: __('system_registration'),
          icon: 'grid-fill',
          url: '/purchase_code',
          permission: 'manage_system_registration'
        }, {
          name: __('system_updater'),
          icon: 'grid-fill',
          url: '/system_updater',
          permission: 'manage_store_settings'
        }]
      }, {
        name: __('web_settings'),
        icon: 'gear',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('general_web_settings'),
          icon: 'grid-fill',
          url: '/general_settings',
          permission: 'general_settings'
        }, {
          name: __('social_media'),
          icon: 'grid-fill',
          url: '/social_media',
          permission: 'manage_social_media_list'
        }]
      }, {
        name: __('blogs'),
        icon: 'pen',
        permission: null,
        submenu: [{
          name: __('blog_categories'),
          icon: 'grid-fill',
          url: '/blog_categories',
          permission: 'blog_category_list'
        }, {
          name: __('blogs'),
          icon: 'grid-fill',
          url: '/blogs',
          permission: 'blog_list'
        }]
      }, {
        name: __('subscriptions'),
        icon: 'credit-card',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('subscription_plans'),
          icon: 'grid-fill',
          url: '/subscriptions',
          permission: 'subscription_list'
        }, {
          name: __('subscriptions_faqs'),
          icon: 'grid-fill',
          url: '/subscriptions_faqs',
          permission: 'subscription_faq_list'
        }]
      }, {
        name: __('languages'),
        icon: 'language',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('add_language'),
          icon: 'grid-fill',
          url: '/languages/create',
          permission: 'language_create'
        }, {
          name: __('manage_languages'),
          icon: 'grid-fill',
          url: '/languages',
          permission: 'language_list'
        }]
      }, {
        name: __('countries'),
        icon: 'globe-asia',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('add_country'),
          icon: 'grid-fill',
          url: '/countries/create',
          permission: 'country_create'
        }, {
          name: __('manage_countries'),
          icon: 'grid-fill',
          url: '/countries',
          permission: 'country_list'
        }]
      }, {
        name: __('location'),
        icon: 'map',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('add_city'),
          icon: 'grid-fill',
          url: '/cities/create',
          permission: 'city_create'
        }, {
          name: __('manage_cities'),
          icon: 'grid-fill',
          url: '/cities',
          permission: 'city_list'
        }]
      }, {
        name: __('customers'),
        icon: 'male',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('customers'),
          icon: 'grid-fill',
          url: '/users',
          permission: 'customer_list'
        }, {
          name: __('wishlists'),
          icon: 'grid-fill',
          url: '/wishlists',
          permission: 'manage_wishlists'
        }, {
          name: __('product_requests'),
          icon: 'grid-fill',
          url: '/product_requests',
          permission: 'product_request_list'
        }, {
          name: __('wallet_transactions'),
          icon: 'grid-fill',
          url: '/wallet_transactions',
          permission: 'manage_customer_wallet'
        }, {
          name: __('transactions'),
          icon: 'grid-fill',
          url: '/transactions',
          permission: 'transaction_list'
        }, {
          name: __('customer_policies'),
          icon: 'grid-fill',
          url: '/privacy_policy',
          permission: 'manage_privacy_policy'
        }]
      }, {
        name: __('reports'),
        icon: 'folder-open',
        permission: null,
        is_general: true,
        submenu: [{
          name: __('product_sales_report'),
          icon: 'grid-fill',
          url: '/product_sales_reports',
          permission: 'product_sales_reports'
        }, {
          name: __('sales_reports'),
          icon: 'grid-fill',
          url: '/sales_reports',
          permission: 'sales_reports'
        }, {
          name: __('commission_reports'),
          icon: 'grid-fill',
          url: '/commission_reports',
          permission: 'commission_reports'
        }]
      }, {
        name: __('system_users'),
        icon: 'users',
        url: '/system_users',
        role: true,
        is_general: true
      }, {
        name: __('role'),
        icon: 'user-secret',
        url: '/role',
        role: true,
        is_general: true
      }, {
        name: __('faqs'),
        icon: 'info',
        url: '/faqs',
        permission: 'faq_list',
        is_general: true
      }],
      databasedownloadBtn: [{
        name: __('database_backup'),
        icon: 'info',
        permission: 'database_backup_download'
      }]
    };
  },
  computed: {
    modulesSidebarItems: function modulesSidebarItems() {
      var activeModuleId = Number(localStorage.getItem('active_module_id')) || 1;
      var items = this.sidebarItems.filter(function (item) {
        return !item.is_general;
      });

      // Allowed modules sidebar items configuration
      var moduleMenusConfig = {
        1: null,
        2: ['dashboard', 'orders', 'self_pickup_orders', 'categories', 'products', 'stock_management', 'home_sliders', 'offer_image', 'promo_code', 'featured_sections', 'blogs', 'sellers', 'return_requests', 'withdrawal_requests']
      };
      var allowedMenus = moduleMenusConfig[activeModuleId];
      if (!allowedMenus) {
        return items;
      }
      return items.filter(function (item) {
        return allowedMenus.some(function (allowed) {
          if (allowed === 'dashboard' && item.url === '/dashboard') return true;
          if (allowed === 'orders' && item.url === '/orders') return true;
          if (allowed === 'self_pickup_orders' && item.url === '/self_pickup_orders') return true;
          if (allowed === 'categories' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('categories');
          })) return true;
          if (allowed === 'products' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('product') || s.url.includes('brand') || s.url.includes('unit') || s.url === '/media';
          })) return true;
          if (allowed === 'stock_management' && item.url === '/manage_stock') return true;
          if (allowed === 'home_sliders' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('slider');
          })) return true;
          if (allowed === 'offer_image' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('offer') || s.url.includes('popup');
          })) return true;
          if (allowed === 'promo_code' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('promo');
          })) return true;
          if (allowed === 'featured_sections' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('sections');
          })) return true;
          if (allowed === 'blogs' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('blog');
          })) return true;
          if (allowed === 'sellers' && item.submenu && item.submenu.some(function (s) {
            return s.url.includes('seller');
          })) return true;
          if (allowed === 'return_requests' && item.url === '/return_requests') return true;
          if (allowed === 'withdrawal_requests' && item.url === '/withdrawal_requests') return true;
          return false;
        });
      });
    },
    generalSidebarItems: function generalSidebarItems() {
      return this.sidebarItems.filter(function (item) {
        return item.is_general;
      });
    },
    filteredDatabaseDownloadBtn: function filteredDatabaseDownloadBtn() {
      return this.databasedownloadBtn;
    }
  },
  methods: {
    filterItem: function filterItem() {
      var filter = this.search;
      $(".sidebar-menu li:not(.sidebar-search):not(.sidebar-title)").each(function (index, element) {
        var item = $(element);
        var parentListIsNested = item.closest('ul').hasClass('submenu');
        if (item.text().match(new RegExp(filter, 'gi'))) {
          item.fadeIn();
          if (parentListIsNested) {
            item.closest('ul').removeClass('active');
          }
        } else {
          item.fadeOut();
          if (parentListIsNested) {
            item.closest('ul').addClass('active');
          }
        }
      });
    },
    subIsActive: function subIsActive(item) {
      var _this = this;
      var paths = Array.isArray(item.submenu) ? item.submenu : [];
      return paths.some(function (path) {
        return _this.$route.path.indexOf(path.url) === 0;
      });
    },
    isActive: function isActive(url) {
      if (this.$route.path == url) {
        return true;
      }
      return false;
    },
    isHasSub: function isHasSub(item) {
      if (item.hasOwnProperty("submenu")) {
        if (item.submenu.length > 0) {
          return true;
        }
      }
      return false;
    },
    hasAnySubmenuPermission: function hasAnySubmenuPermission(item) {
      var _this2 = this;
      if (!item.submenu || item.submenu.length === 0) {
        return false;
      }
      return item.submenu.some(function (submenu) {
        if (submenu.role) {
          return _this2.$role('Super Admin') && (item.name === 'Role' || item.name === 'System Users');
        }
        return submenu.permission && _this2.$can(submenu.permission);
      });
    },
    checkPermissions: function checkPermissions() {
      var current_path = this.$route.path;
      var permission = '';
      this.sidebarItems.forEach(function (menu) {
        //Only Main Categories
        if (menu.submenu && menu.submenu.length > 0) {
          menu.submenu.forEach(function (submenu) {
            if (submenu.url === current_path) {
              permission = submenu.permission;
            }
          });
        } else {
          if (menu.url === current_path) {
            permission = menu.permission;
          }
        }
      });
      if (_Auth__WEBPACK_IMPORTED_MODULE_3__["default"].check() && UserPermissions.length === 0) {
        //this.$router.push({path:'/login'});
        if (window.localStorage.getItem('loginCheck') == 1) {
          _Auth__WEBPACK_IMPORTED_MODULE_3__["default"].logout();
        }
        window.localStorage.setItem('loginCheck', 1);
        window.location.reload();
      } else if (_Auth__WEBPACK_IMPORTED_MODULE_3__["default"].check() && permission && !this.$can(permission)) {
        this.$router.push({
          path: '/unauthorized'
        });
      }
    },
    closeSideBarMenu: function closeSideBarMenu() {
      var w = window.innerWidth;
      if (w < 1200) {
        var _document$getElementB11, _document$getElementB12;
        (_document$getElementB11 = document.getElementById('sidebar')) === null || _document$getElementB11 === void 0 ? void 0 : (_document$getElementB12 = _document$getElementB11.classList) === null || _document$getElementB12 === void 0 ? void 0 : _document$getElementB12.remove('active');
        var backdrop = document.querySelector('.sidebar-backdrop');
        if (backdrop) backdrop.remove();
      }
    },
    downloadDatabase: function downloadDatabase() {
      var _this3 = this;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_4___default()({
        method: 'get',
        url: this.$apiUrl + '/database_backup_download',
        responseType: 'blob' // important: responseType must be 'blob' for file download
      }).then(function (response) {
        var blob = new Blob([response.data]);
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);

        // Extracting the filename from the response headers
        var contentDisposition = response.headers['content-disposition'];
        var filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/);
        var filename = filenameMatch ? filenameMatch[1] : 'downloaded-database-backup.sql';
        link.download = filename;
        link.click();
        _this3.showMessage("success", __('database_downloaded_successfully'));
        _this3.isLoading = false;
      })["catch"](function (error) {
        console.error('Error downloading file:', error);
        // Handle error accordingly
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheFooter.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheFooter.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'TheFooter',
  data: function data() {
    return {
      copyrightDetails: window.copyrightDetails,
      currentVersion: window.currentVersion
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheSidebar.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheSidebar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'TheSidebar',
  data: function data() {
    return {
      //minimize: false,
      nav: [],
      //show: true,
      buffor: []
    };
  },
  computed: {
    show: function show() {
      //return this.$store.state.sidebarShow
    },
    minimize: function minimize() {
      //return this.$store.state.sidebarMinimize
    }
  },
  methods: {
    dropdown: function dropdown(data) {
      var result = {
        _name: 'CSidebarNavDropdown',
        name: data['name'],
        route: data['href'],
        icon: data['icon'],
        _children: []
      };
      for (var i = 0; i < data['elements'].length; i++) {
        if (data['elements'][i]['slug'] == 'dropdown') {
          result._children.push(this.dropdown(data['elements'][i]));
        } else {
          result._children.push({
            _name: 'CSidebarNavItem',
            name: data['elements'][i]['name'],
            to: data['elements'][i]['href'],
            icon: data['elements'][i]['icon']
          });
        }
      }
      return result;
    },
    rebuildData: function rebuildData(data) {
      this.buffor = [{
        _name: 'CSidebarNav',
        _children: []
      }];
      for (var k = 0; k < data.length; k++) {
        switch (data[k]['slug']) {
          case 'link':
            if (data[k]['href'].indexOf('http') !== -1) {
              this.buffor[0]._children.push({
                _name: 'CSidebarNavItem',
                name: data[k]['name'],
                href: data[k]['href'],
                icon: data[k]['icon'],
                target: '_blank'
              });
            } else {
              this.buffor[0]._children.push({
                _name: 'CSidebarNavItem',
                name: data[k]['name'],
                to: data[k]['href'],
                icon: data[k]['icon']
              });
            }
            break;
          case 'title':
            this.buffor[0]._children.push({
              _name: 'CSidebarNavTitle',
              _children: [data[k]['name']]
            });
            break;
          case 'dropdown':
            this.buffor[0]._children.push(this.dropdown(data[k]));
            break;
        }
      }
      return this.buffor;
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$root.$on('toggle-sidebar', function () {
      var sidebarOpened = _this.show === true || _this.show === 'responsive';
      _this.show = sidebarOpened ? false : 'responsive';
    });
    this.$root.$on('toggle-sidebar-mobile', function () {
      var sidebarClosed = _this.show === 'responsive' || _this.show === false;
      _this.show = sidebarClosed ? true : 'responsive';
    });
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.$apiAdress + '/api/menu?token=' + localStorage.getItem("api_token")).then(function (response) {
      self.nav = self.rebuildData(response.data);
    })["catch"](function (error) {
      self.$router.push({
        path: '/login'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth.js */ "./resources/js/Auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
  data: function data() {
    var cachedModules = [];
    try {
      cachedModules = JSON.parse(localStorage.getItem('modules')) || [];
    } catch (e) {
      console.error('Error parsing cached modules', e);
    }
    return {
      websiteUrl: window.websiteUrl,
      lang: window.localStorage.getItem('lang') || window.appLocale || 'en',
      user: _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user,
      role: Role,
      profile_url: Role === 'Seller' ? _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.seller.logo_url : Role === 'Delivery Boy' ? this.$baseUrl + '/images/admin_logo.png' : this.$baseUrl + '/images/admin_logo.png',
      notifications: [],
      userTheme: "theme-light",
      isToggle: false,
      //seller status
      sellerStatus: null,
      sellerStatusLoading: false,
      deliveryBoyStatus: null,
      deliveryBoyStatusLoading: false,
      remark: '',
      popoverShow: false,
      isSystemRefreshing: false,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      languages: [],
      notifications_unread_count: 0,
      modules: cachedModules,
      activeModuleId: Number(localStorage.getItem('active_module_id')) || 1
    };
  },
  computed: {
    isSellerRoute: function isSellerRoute() {
      // Use this.$route to access the current route
      return this.$route.path.startsWith('/seller/') || this.$route.path === '/seller';
    },
    isDeliveryBoyRoute: function isDeliveryBoyRoute() {
      return this.$route.path.startsWith('/delivery_boy');
    },
    currentFlag: function currentFlag() {
      var flags = {
        'en': 'us',
        'ar': 'sa',
        'hi': 'in',
        'es': 'es',
        'fr': 'fr',
        'de': 'de',
        'it': 'it',
        'ja': 'jp',
        'ko': 'kr',
        'gu': 'in',
        'be': 'by',
        'zh': 'cn',
        'pt': 'pt',
        'ru': 'ru',
        'tr': 'tr',
        'vi': 'vn',
        'th': 'th',
        'id': 'id',
        'ms': 'my',
        'nl': 'nl',
        'pl': 'pl',
        'uk': 'ua',
        'sv': 'se',
        'no': 'no',
        'da': 'dk',
        'fi': 'fi',
        'ro': 'ro',
        'cs': 'cz',
        'hu': 'hu',
        'sk': 'sk',
        'bg': 'bg',
        'hr': 'hr',
        'sr': 'rs',
        'sl': 'si',
        'et': 'ee',
        'lv': 'lv',
        'lt': 'lt',
        'el': 'gr',
        'he': 'il',
        'fa': 'ir',
        'ur': 'pk',
        'bn': 'bd',
        'pa': 'in',
        'ta': 'in',
        'te': 'in',
        'kn': 'in',
        'ml': 'in',
        'mr': 'in'
      };
      var code = flags[(this.lang || 'en').toLowerCase()] || 'us';
      return "https://flagcdn.com/w80/".concat(code, ".png");
    },
    currentLanguageName: function currentLanguageName() {
      var _this = this;
      var lang = this.languages.find(function (l) {
        return l.code === _this.lang;
      });
      return lang ? lang.name.substring(0, 3) : (this.lang || 'en').substring(0, 3);
    },
    currentModule: function currentModule() {
      var activeModuleId = Number(localStorage.getItem('active_module_id')) || 1;
      return this.modules.find(function (m) {
        return m.id === activeModuleId;
      }) || null;
    },
    currentModuleName: function currentModuleName() {
      return this.currentModule ? this.currentModule.name : 'Grocery';
    },
    currentModuleIcon: function currentModuleIcon() {
      var activeModuleId = Number(localStorage.getItem('active_module_id')) || 1;
      if (activeModuleId === 2) {
        return 'fa fa-capsules';
      }
      return 'bi bi-basket';
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('DOMContentLoaded', this.onResize);
    this.$eventBus.$off('modulesUpdated');
  },
  mounted: function mounted() {
    var _this2 = this;
    // Fetch initial seller status if the user is a seller
    if (this.role === this.$roleSeller) this.getSellerStatus();

    // Fetch initial delivery boy status if the user is a delivery boy
    if (this.role === this.$roleDeliveryBoy) this.getDeliveryBoyStatus();
    this.$nextTick(function () {
      window.addEventListener('resize', _this2.onResize);
      window.addEventListener('DOMContentLoaded', _this2.onResize);
    });
    var initUserTheme = this.getTheme();
    this.setTheme(initUserTheme);
    this.timer = setInterval(function () {
      _this2.getNotifications();
    }, 40000); // 40 seconds

    this.getLanguage();
    if (this.role === this.$roleSuperAdmin) {
      this.getModules();
    }
    this.$eventBus.$on('modulesUpdated', function () {
      if (_this2.role === _this2.$roleSuperAdmin) {
        _this2.getModules();
      }
    });
  },
  created: function created() {
    this.getNotifications();
  },
  watch: {
    'user.delivery_boy.id': function userDelivery_boyId(id) {
      if (id && this.role === this.$roleDeliveryBoy) {
        this.getDeliveryBoyStatus();
      }
    }
  },
  methods: {
    //seller status toggle
    getSellerStatus: function getSellerStatus() {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/seller/get_seller_status', {
        seller_id: this.user.seller.id
      }).then(function (response) {
        if (response.data && response.data.data) {
          _this3.sellerStatus = Number(response.data.data.status);
        }
      })["catch"](function (error) {
        var _error$response;
        console.error('Error fetching seller status:', ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data) || error);
      });
    },
    //delivery boy status toggle
    getDeliveryBoyStatus: function getDeliveryBoyStatus() {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/delivery_boy/get_delivery_boy_status', {
        id: this.user.delivery_boy.id
      }).then(function (response) {
        if (response.data && response.data.data) {
          _this4.deliveryBoyStatus = Number(response.data.data.status);
        }
      })["catch"](function (error) {
        var _error$response2;
        console.error('Error fetching delivery boy status:', ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data) || error);
      });
    },
    // Toggle seller status update
    toggleSellerStatus: function toggleSellerStatus() {
      var _this5 = this;
      if (this.sellerStatusLoading) return;
      var previousStatus = this.sellerStatus === 1 ? 3 : 1;
      this.sellerStatusLoading = true;
      var formData = new FormData();
      formData.append('seller_id', this.user.seller.id);
      formData.append('status', this.sellerStatus);
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/sellers/update_status', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        if (response.data.status === 1) {
          console.log('Seller status updated:', response.data);
        } else {
          console.error('API returned error:', response.data.message);
          _this5.sellerStatus = previousStatus;
        }
      })["catch"](function (error) {
        var _error$response3;
        console.error('API error:', ((_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.data) || error);
        _this5.sellerStatus = previousStatus;
      })["finally"](function () {
        _this5.sellerStatusLoading = false;
      });
    },
    // Toggle delivery boy status update
    toggleDeliveryBoyStatus: function toggleDeliveryBoyStatus() {
      var _this6 = this;
      if (this.deliveryBoyStatusLoading) return;
      var previousStatus = this.deliveryBoyStatus === 1 ? 3 : 1;
      this.deliveryBoyStatusLoading = true;
      var formData = new FormData();
      formData.append('id', this.user.delivery_boy.id);
      formData.append('status', this.deliveryBoyStatus);
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/delivery_boys/update-status', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        if (response.data.status === 1) {
          console.log('Delivery boy status updated:', response.data);
        } else {
          console.error('API returned error:', response.data.message);
          _this6.deliveryBoyStatus = previousStatus;
        }
      })["catch"](function (error) {
        var _error$response4;
        console.error('API error:', ((_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.data) || error);
        _this6.deliveryBoyStatus = previousStatus;
      })["finally"](function () {
        _this6.deliveryBoyStatusLoading = false;
      });
    },
    logout: function logout() {
      var _this7 = this;
      var role_id = _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.role_id;

      // Clear language session on server before logout
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/clear_language_session').then(function () {
        // Now proceed with logout
        _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].logout();
        setTimeout(function () {
          if (role_id === 3) {
            _this7.$router.push('/seller/login');
          } else if (role_id === 4) {
            _this7.$router.push('/delivery_boy/login');
          } else {
            _this7.$router.push('/login');
          }
          window.location.reload();
        }, 500);
      })["catch"](function () {
        // If API call fails, still proceed with logout
        _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].logout();
        setTimeout(function () {
          if (role_id === 3) {
            _this7.$router.push('/seller/login');
          } else if (role_id === 4) {
            _this7.$router.push('/delivery_boy/login');
          } else {
            _this7.$router.push('/login');
          }
          window.location.reload();
        }, 500);
      });
    },
    getFlagByCode: function getFlagByCode(langCode) {
      var flags = {
        'en': 'us',
        'ar': 'sa',
        'hi': 'in',
        'es': 'es',
        'fr': 'fr',
        'de': 'de',
        'it': 'it',
        'ja': 'jp',
        'ko': 'kr',
        'gu': 'in',
        'be': 'by',
        'zh': 'cn',
        'pt': 'pt',
        'ru': 'ru',
        'tr': 'tr',
        'vi': 'vn',
        'th': 'th',
        'id': 'id',
        'ms': 'my',
        'nl': 'nl',
        'pl': 'pl',
        'uk': 'ua',
        'sv': 'se',
        'no': 'no',
        'da': 'dk',
        'fi': 'fi',
        'ro': 'ro',
        'cs': 'cz',
        'hu': 'hu',
        'sk': 'sk',
        'bg': 'bg',
        'hr': 'hr',
        'sr': 'rs',
        'sl': 'si',
        'et': 'ee',
        'lv': 'lv',
        'lt': 'lt',
        'el': 'gr',
        'he': 'il',
        'fa': 'ir',
        'ur': 'pk',
        'bn': 'bd',
        'pa': 'in',
        'ta': 'in',
        'te': 'in',
        'kn': 'in',
        'ml': 'in',
        'mr': 'in'
      };
      var code = flags[(langCode || 'en').toLowerCase()] || 'us';
      return "https://flagcdn.com/w80/".concat(code, ".png");
    },
    selectLanguage: function selectLanguage(code) {
      this.changeLanguage({
        target: {
          value: code
        }
      });
    },
    changeLanguage: function changeLanguage(event) {
      var _this8 = this;
      // Update the selected language based on the change event
      this.lang = event.target.value;
      window.localStorage.setItem('lang', this.lang);
      this.isLoading = true;
      var data = {
        language: this.lang
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.$apiUrl + '/change_language', data).then(function (response) {
        _this8.isLoading = false;
        // Apply RTL based on language type from API (any language can be RTL)
        _this8.applyRtlForLanguage(_this8.lang);
        // Update the default language in local state
        _this8.updateDefaultLanguage(_this8.lang);
        window.localStorage.removeItem('language');
        var currentUrl = window.location.href.split('?')[0].split('#')[0];
        var cacheBuster = '_t=' + Date.now();
        window.location.href = currentUrl + '?' + cacheBuster;
      });
    },
    updateDefaultLanguage: function updateDefaultLanguage(newDefaultLanguage) {
      // Update the default language in the languages array
      this.languages.forEach(function (language) {
        if (language.code === newDefaultLanguage) {
          language.is_default = 1;
        } else {
          language.is_default = 0;
        }
      });
    },
    getLanguage: function getLanguage() {
      var _this9 = this;
      this.isLoading = true;
      var data = {
        params: {
          system_type: 4
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/system_languages', data).then(function (response) {
        _this9.isLoading = false;
        var data = response.data;
        if (data && Array.isArray(data.data)) {
          _this9.languages = data.data;
          _this9.totalRows = _this9.languages.length;
        } else {
          _this9.languages = [];
          _this9.totalRows = 0;
        }
        // Apply RTL based on language type from API (any language can be RTL)
        _this9.applyRtlForLanguage(window.localStorage.getItem('lang') || _this9.lang);
      })["catch"](function (error) {
        _this9.isLoading = false;
        console.error('Error fetching languages:', error);
      });
    },
    getModules: function getModules() {
      var _this10 = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/modules').then(function (response) {
        if (response.data && response.data.data) {
          _this10.modules = response.data.data;
          localStorage.setItem('modules', JSON.stringify(response.data.data));
        }
      })["catch"](function (error) {
        console.error('Error fetching modules:', error);
      });
    },
    selectModule: function selectModule(moduleId) {
      localStorage.setItem('active_module_id', moduleId);
      window.axios.defaults.headers.common['X-Module-Id'] = moduleId;
      window.location.reload();
    },
    /**
     * Apply or remove RTL class on body based on language type from API.
     * Uses language.type from supported_languages (rtl/ltr) - not hardcoded to any specific language.
     */
    applyRtlForLanguage: function applyRtlForLanguage(langCode) {
      var lang = this.languages.find(function (l) {
        return (l.code || '').toLowerCase() === (langCode || '').toLowerCase();
      });
      var isRtl = lang && String(lang.type || '').toLowerCase() === 'rtl';
      if (isRtl) {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    },
    getNotifications: function getNotifications(event) {
      var _this11 = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/get_top_notifications').then(function (response) {
        _this11.notifications = response.data.data.notifications;
        _this11.notifications_unread_count = response.data.data.unread;
      });
    },
    markAsReadNotification: function markAsReadNotification(notification) {
      var _this12 = this;
      if (notification.read_at == null) {
        axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/notification_read?id=' + notification.id).then(function (response) {
          _this12.getNotifications();
        });
      }
    },
    confirmMarkAllAsRead: function confirmMarkAllAsRead() {
      var _this13 = this;
      // Show SweetAlert confirmation dialog before marking all notifications as read
      this.$swal.fire({
        title: __('are_you_sure'),
        text: __('do_you_want_to_mark_all_notifications_as_read'),
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: __('yes_sure'),
        cancelButtonText: __('cancel'),
        confirmButtonColor: '#37a279',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        // If user confirms, proceed to mark all as read
        if (result.value) {
          _this13.markAllAsRead();
        }
      });
    },
    markAllAsRead: function markAllAsRead() {
      var _this14 = this;
      // Mark all notifications as read by calling the API without id parameter
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/notification_read').then(function (response) {
        // Refresh notifications to update the UI
        _this14.getNotifications();
        // Show success message
        _this14.showMessage("success", response.data.message || "All notifications marked as read");
      })["catch"](function (error) {
        // Show error message if something goes wrong
        _this14.showError("Failed to mark all notifications as read");
      });
    },
    changeDateTime: function changeDateTime(dateTime) {
      return moment(dateTime).fromNow();
    },
    setTheme: function setTheme(theme) {
      sessionStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      // Only swap theme classes so RTL class is preserved (sidebar stays on correct side in RTL + dark mode).
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(theme);
    },
    getMediaPreference: function getMediaPreference() {
      var hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (hasDarkPreference) {
        return "theme-dark";
      } else {
        return "theme-light";
      }
    },
    getTheme: function getTheme() {
      var user_theme = sessionStorage.getItem("user-theme");
      this.userTheme = user_theme;
      return user_theme;
    },
    toggleTheme: function toggleTheme() {
      var activeTheme = sessionStorage.getItem("user-theme");
      if (activeTheme === "theme-light" || activeTheme == "" || activeTheme == "undefined" || activeTheme == "null") {
        this.setTheme("theme-dark");
      } else {
        this.setTheme("theme-light");
      }
    },
    onResize: function onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    },
    clearCache: function clearCache() {
      var vm = this;
      vm.isSystemRefreshing = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$baseUrl + '/clear').then(function (response) {
        var data = response.data;
        if (data.status === 1) {
          setTimeout(function () {
            vm.showMessage("success", data.message);
            vm.isSystemRefreshing = false;
            vm.popoverShow = false;
            window.location.reload();
          }, 2000);
        } else {
          vm.showError(data.message);
          vm.isSystemRefreshing = false;
        }
      })["catch"](function (error) {
        var _error$request;
        vm.isSystemRefreshing = false;
        if (error !== null && error !== void 0 && (_error$request = error.request) !== null && _error$request !== void 0 && _error$request.statusText) {
          vm.showError(error.request.statusText);
        } else if (error.message) {
          vm.showError(error.message);
        } else {
          vm.showError(__('something_went_wrong'));
        }
      });
    },
    handleNotificationClick: function handleNotificationClick(notification) {
      var _this15 = this;
      this.markAsReadNotification(notification);
      var orderId = notification.data.order_id;
      if (this.isSellerRoute) {
        this.$router.push('/seller/orders/view/' + orderId);
      } else if (this.isDeliveryBoyRoute) {
        this.$router.push('/delivery_boy/orders/view/' + orderId);
      } else {
        axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.$apiUrl + '/orders/view/' + orderId).then(function (response) {
          var order = response.data.data.order;
          if (order) {
            if (order.order_type === 'selfpickup') {
              _this15.$router.push('/self_pickup_orders/view/' + orderId);
            } else {
              _this15.$router.push('/orders/view/' + orderId);
            }
          } else {
            _this15.$router.push('/orders/view/' + orderId);
          }
        })["catch"](function (error) {
          _this15.$router.push('/orders/view/' + orderId);
        });
      }
    },
    parseNotification: function parseNotification(notification) {
      var text = notification.data.text || '';
      var title = 'Notification';
      var body = text;
      var type = notification.data.type || '';
      var lowerText = text.toLowerCase();

      // Extract order ID using regex or direct attribute
      var orderIdMatch = text.match(/#\d+/);
      var extractedOrderId = orderIdMatch ? orderIdMatch[0] : '';
      var orderId = notification.data.order_id ? "#".concat(notification.data.order_id) : extractedOrderId || '#0000';

      // Deterministic mock fallbacks based on notification ID to simulate realism if not enriched
      var seed = parseInt(String(notification.id || '').replace(/\D/g, '')) || 0;
      var fallbackCustomers = ['Emily Johnson', 'John Smith', 'Michael Brown', 'Sophia Williams', 'David Jones'];
      var fallbackStores = ['Green Basket', 'FreshMart', 'Local Harvest', 'Daily Needs', 'Super Saver'];
      var fallbackTotals = ['1,250', '850', '2,400', '150', '580'];
      var customerName = notification.data.customer_name || fallbackCustomers[seed % fallbackCustomers.length];
      var storeName = notification.data.store_name || fallbackStores[seed % fallbackStores.length];
      var total = notification.data.total || fallbackTotals[seed % fallbackTotals.length];
      var currency = notification.data.currency || '₹';
      var moduleName = notification.data.module_name || 'grocery';
      if (type === 'return_request_new' || type === 'return_request_sent' || type === 'return_request_status' || lowerText.includes('return')) {
        title = 'Return Request Received';
        body = "".concat(customerName, " requested a return for order ").concat(orderId, " from ").concat(storeName);
      } else if (lowerText.includes('cancel')) {
        title = 'Order Cancelled';
        body = "".concat(customerName, " cancelled order ").concat(orderId, " from ").concat(storeName);
      } else if (lowerText.includes('receive') || lowerText.includes('place') || lowerText.includes('new order')) {
        title = 'New Order Placed';
        body = "".concat(customerName, " placed a new ").concat(moduleName, " order worth ").concat(currency).concat(total, " from ").concat(storeName);
      } else if (lowerText.includes('assign')) {
        title = 'Order Assigned';
        body = "Order ".concat(orderId, " from ").concat(storeName, " has been assigned to a delivery boy");
      } else if (lowerText.includes('picked') || lowerText.includes('pickup')) {
        title = 'Order Out for Pickup';
        body = "Order ".concat(orderId, " from ").concat(storeName, " is out for pickup");
      } else if (lowerText.includes('deliver')) {
        title = 'Order Delivered';
        body = "Order ".concat(orderId, " has been successfully delivered to ").concat(customerName);
      } else {
        title = 'Order Status Update';
        body = "".concat(customerName, " updated status of order ").concat(orderId, " from ").concat(storeName);
      }
      return {
        title: title,
        body: body
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active[data-v-59a2dd7f],\r\n.fade-leave-active[data-v-59a2dd7f] {\r\n    transition: opacity 0.3s;\n}\n.fade-enter[data-v-59a2dd7f],\r\n.fade-leave-to[data-v-59a2dd7f] {\r\n    opacity: 0;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* .navbar {\r\n    background: transparent;\r\n    padding: 0.75rem 1rem;\r\n} */\r\n/* \r\n.figma-header {\r\n    background: #fff;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\r\n    border-bottom: 1px solid #F1F5F9;\r\n} */\n.figma-header[data-v-29466cd2] {\r\n    background: #fff;\r\n    box-shadow: none !important;\r\n    /* remove these */\r\n    /* position: sticky; */\r\n    /* top: 0; */\r\n    /* z-index: 1020; */\n}\n.navbar[data-v-29466cd2] {\r\n    background: transparent;\r\n    min-height: 70px;\n}\n.container-fluid[data-v-29466cd2] {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\n}\n.website-link[data-v-29466cd2] {\r\n    background: #F8FAFC;\r\n    border-radius: 6px;\r\n    font-size: 0.8rem;\r\n    color: #475569;\r\n    text-decoration: none;\r\n    transition: all 0.2s ease;\n}\n.website-link[data-v-29466cd2]:hover {\r\n    background: #E2E8F0;\r\n    color: #10B981;\n}\r\n\r\n/* Sidebar Toggle Button */\n.burger-btn[data-v-29466cd2] {\r\n    background: #fff;\r\n    border: 1px solid #E2E8F0;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\r\n    padding: 8px 10px;\r\n    border-radius: 8px;\r\n    text-decoration: none;\r\n    transition: all 0.2s ease;\n}\n.burger-btn[data-v-29466cd2]:hover {\r\n    background: #F8FAFC;\r\n    transform: translateY(-1px);\n}\r\n\r\n/* Clear Cache Button - Light Green Style */\n.header-cache-btn[data-v-29466cd2] {\r\n    background: #EBF7F2 !important;\r\n    color: #10B981 !important;\r\n    border: none !important;\r\n    padding: 8px 16px !important;\r\n    border-radius: 8px !important;\r\n    font-weight: 600 !important;\r\n    font-size: 0.85rem !important;\r\n    transition: all 0.2s ease !important;\r\n    box-shadow: none !important;\n}\n.header-cache-btn[data-v-29466cd2]:hover {\r\n    background: #DCFCE7 !important;\n}\r\n\r\n/* Language Selector */\n.lang-selector[data-v-29466cd2] {\r\n    background: #ffffff;\r\n    border: 1px solid #EDEDED;\r\n    border-radius: 20px;\r\n    height: 40px;\r\n    width: 97px;\r\n    transition: all 0.2s ease;\n}\n.lang-selector[data-v-29466cd2]:hover {\r\n    background: #F8FAFC;\n}\n.lang-selector select[data-v-29466cd2]:focus {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n    border: none !important;\n}\r\n\r\n/* Custom Language Dropdown Menu */\n.lang-dropdown-menu[data-v-29466cd2] {\r\n    min-width: 110px !important;\r\n    padding: 6px !important;\r\n    border-radius: 12px !important;\r\n    border: 1px solid #EDEDED !important;\r\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02) !important;\n}\n.lang-dropdown-menu .dropdown-item[data-v-29466cd2] {\r\n    border-radius: 8px !important;\r\n    padding: 6px 12px !important;\r\n    color: #475569 !important;\r\n    font-size: 0.85rem !important;\r\n    transition: all 0.2s ease !important;\n}\n.lang-dropdown-menu .dropdown-item[data-v-29466cd2]:hover,\r\n.lang-dropdown-menu .dropdown-item.active[data-v-29466cd2] {\r\n    background-color: #F1F5F9 !important;\r\n    color: #10B981 !important;\n}\nbody.theme-dark .lang-dropdown-menu[data-v-29466cd2] {\r\n    background-color: #1b1b29 !important;\r\n    border-color: #2d2d44 !important;\n}\nbody.theme-dark .lang-dropdown-menu .dropdown-item[data-v-29466cd2] {\r\n    color: #cbd5e1 !important;\n}\nbody.theme-dark .lang-dropdown-menu .dropdown-item[data-v-29466cd2]:hover,\r\nbody.theme-dark .lang-dropdown-menu .dropdown-item.active[data-v-29466cd2] {\r\n    background-color: #2d2d44 !important;\r\n    color: #34d399 !important;\n}\r\n\r\n/* Icons styling */\n.nav-link i[data-v-29466cd2],\r\n.btn i[data-v-29466cd2] {\r\n    transition: color 0.2s ease;\n}\n.nav-link:hover i[data-v-29466cd2],\r\n.btn:hover i[data-v-29466cd2] {\r\n    color: #10B981 !important;\n}\r\n\r\n/* User Menu */\n.user-dropdown-link[data-v-29466cd2] {\r\n    text-decoration: none;\r\n    padding: 2px;\r\n    border-radius: 12px;\r\n    transition: background 0.2s ease;\n}\n.user-dropdown-link[data-v-29466cd2]:hover {\r\n    background: #F8FAFC;\n}\n.avatar-md img[data-v-29466cd2] {\r\n    width: 38px;\r\n    height: 38px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border: 2px solid #fff;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\r\n\r\n/* Dropdown styling */\n.dropdown-menu[data-v-29466cd2] {\r\n    border-radius: 12px;\r\n    padding: 0.5rem;\r\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n}\n.dropdown-item[data-v-29466cd2] {\r\n    border-radius: 8px;\r\n    padding: 0.6rem 1rem;\r\n    font-weight: 500;\r\n    color: #475569;\n}\n.dropdown-item[data-v-29466cd2]:hover {\r\n    background-color: #F8FAFC;\r\n    color: #10B981;\n}\n.dropdown-header[data-v-29466cd2] {\r\n    font-weight: 600;\r\n    color: #1E293B;\r\n    padding: 0.5rem 1rem;\n}\r\n\r\n/* Utility */\n.font-bold[data-v-29466cd2] {\r\n    font-weight: 700;\n}\n.font-medium[data-v-29466cd2] {\r\n    font-weight: 500;\n}\n.text-gray-400[data-v-29466cd2] {\r\n    color: #94A3B8;\n}\n.text-gray-600[data-v-29466cd2] {\r\n    color: #475569;\n}\n.text-gray-800[data-v-29466cd2] {\r\n    color: #1E293B;\n}\n.text-xs[data-v-29466cd2] {\r\n    font-size: 0.75rem;\n}\r\n\r\n/* Responsive adjustments */\n@media (max-width: 991px) {\n.navbar-collapse[data-v-29466cd2] {\r\n        background: #fff;\r\n        border-radius: 12px;\r\n        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\r\n        padding: 1rem;\r\n        margin-top: 1rem;\n}\n}\n.text-wrap-custom[data-v-29466cd2] {\r\n    word-break: break-word !important;\r\n    overflow-wrap: break-word !important;\r\n    white-space: normal !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Unscoped high-fidelity overrides for Notifications Popover */\n.notification-dropdown {\r\n    width: 400px !important;\r\n    max-width: 400px !important;\r\n    padding: 0 !important;\r\n    border-radius: 0 !important;\r\n    overflow: hidden !important;\n}\n.notification-item-custom {\r\n    display: flex !important;\r\n    flex-direction: column !important;\r\n    width: 100% !important;\r\n    min-height: 116px !important;\r\n    padding: 16px !important;\r\n    gap: 0 !important;\r\n    border-bottom: 1px solid #EDEDED !important;\r\n    background: #ffffff !important;\r\n    cursor: pointer !important;\r\n    transition: background-color 0.2s ease !important;\r\n    white-space: normal !important;\r\n    text-decoration: none !important;\r\n    list-style: none !important;\r\n    text-align: left !important;\n}\n.notification-item-custom:hover {\r\n    background-color: #F8FAFC !important;\n}\n.notification-title-custom {\r\n    font-weight: 600 !important;\r\n    font-size: 16px !important;\r\n    line-height: 1.5 !important;\r\n    letter-spacing: 0 !important;\r\n    color: var(--Colors-Shades-Neutral-N---950, #000000) !important;\r\n    text-align: left !important;\n}\n.notification-time-custom {\r\n    font-family: inherit !important;\r\n    font-weight: 400 !important;\r\n    font-size: 14px !important;\r\n    line-height: 1.25 !important;\r\n    letter-spacing: 0 !important;\r\n    text-align: right !important;\r\n    color: var(--Colors-Shades-Neutral-N---800, #333333) !important;\r\n    flex-shrink: 0 !important;\n}\n.notification-body-custom {\r\n    font-family: inherit !important;\r\n    font-weight: 400 !important;\r\n    font-size: 14px !important;\r\n    line-height: 1.4 !important;\r\n    color: var(--Colors-Shades-Neutral-N---600, #666666) !important;\r\n    padding-left: 0 !important;\r\n    margin-top: 4px !important;\r\n    margin-bottom: 0 !important;\r\n    text-align: left !important;\r\n    word-break: break-word !important;\r\n    overflow-wrap: break-word !important;\r\n    white-space: normal !important;\r\n    display: block !important;\r\n    width: 100% !important;\n}\nbody.theme-dark .notification-dropdown,\r\nbody.theme-dark .dropdown-header {\r\n    background-color: #1b1b29 !important;\r\n    border-color: #2d2d44 !important;\n}\nbody.theme-dark .notification-item-custom {\r\n    background: #1b1b29 !important;\r\n    border-color: #2d2d44 !important;\r\n    text-align: left !important;\n}\nbody.theme-dark .notification-item-custom:hover {\r\n    background-color: #2d2d44 !important;\n}\nbody.theme-dark .notification-item-custom .text-dark {\r\n    color: #ffffff !important;\n}\nbody.theme-dark .notification-item-custom .text-muted {\r\n    color: #94A3B8 !important;\n}\nbody.theme-dark .notification-title-custom {\r\n    color: #ffffff !important;\r\n    text-align: left !important;\n}\nbody.theme-dark .notification-time-custom {\r\n    color: #94A3B8 !important;\n}\nbody.theme-dark .notification-body-custom {\r\n    color: #94A3B8 !important;\r\n    text-align: left !important;\n}\n.see-all-btn-custom {\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n    width: 400px !important;\r\n    height: 40px !important;\r\n    padding: 8px 16px !important;\r\n    gap: 8px !important;\r\n    border-radius: 0 !important;\r\n    background: var(--Colors-Shades-Neutral-N---950, #000000) !important;\r\n    color: #ffffff !important;\r\n    font-weight: 600 !important;\r\n    font-size: 0.9rem !important;\r\n    border: none !important;\r\n    text-decoration: none !important;\r\n    transition: background-color 0.2s ease !important;\n}\n.see-all-btn-custom:hover {\r\n    background-color: #1E293B !important;\r\n    color: #ffffff !important;\n}\nbody.theme-dark .see-all-btn-custom {\r\n    background-color: #11111d !important;\r\n    color: #ffffff !important;\n}\nbody.theme-dark .see-all-btn-custom:hover {\r\n    background-color: #2d2d44 !important;\n}\r\n\r\n/* Module Selector Styling */\n.module-selector {\r\n    background: #f3f4f6;\r\n    border: 1px solid #e5e7eb;\r\n    border-radius: 8px;\r\n    height: 40px;\r\n    min-width: 145px !important;\r\n    transition: all 0.2s ease;\n}\n.module-selector:hover {\r\n    background: #e5e7eb;\n}\nbody.theme-dark .module-selector {\r\n    background: #232334;\r\n    border-color: #3b3b4f;\n}\nbody.theme-dark .module-selector:hover {\r\n    background: #2d2d44;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_59a2dd7f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_59a2dd7f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_59a2dd7f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_0_id_29466cd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_0_id_29466cd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_0_id_29466cd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_1_id_29466cd2_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_1_id_29466cd2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_1_id_29466cd2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/containers/TheContainer.vue":
/*!**************************************************!*\
  !*** ./resources/js/containers/TheContainer.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheContainer_vue_vue_type_template_id_59a2dd7f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true */ "./resources/js/containers/TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true");
/* harmony import */ var _TheContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=script&lang=js */ "./resources/js/containers/TheContainer.vue?vue&type=script&lang=js");
/* harmony import */ var _TheContainer_vue_vue_type_style_index_0_id_59a2dd7f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css */ "./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheContainer_vue_vue_type_template_id_59a2dd7f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheContainer_vue_vue_type_template_id_59a2dd7f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "59a2dd7f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/TheContainer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/containers/TheFooter.vue":
/*!***********************************************!*\
  !*** ./resources/js/containers/TheFooter.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheFooter_vue_vue_type_template_id_44bdf58d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=44bdf58d */ "./resources/js/containers/TheFooter.vue?vue&type=template&id=44bdf58d");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js */ "./resources/js/containers/TheFooter.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_44bdf58d__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheFooter_vue_vue_type_template_id_44bdf58d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/TheFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/containers/TheSidebar.vue":
/*!************************************************!*\
  !*** ./resources/js/containers/TheSidebar.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheSidebar_vue_vue_type_template_id_08a98f4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=template&id=08a98f4c */ "./resources/js/containers/TheSidebar.vue?vue&type=template&id=08a98f4c");
/* harmony import */ var _TheSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=script&lang=js */ "./resources/js/containers/TheSidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSidebar_vue_vue_type_template_id_08a98f4c__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheSidebar_vue_vue_type_template_id_08a98f4c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/TheSidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/containers/VerticalHeader.vue":
/*!****************************************************!*\
  !*** ./resources/js/containers/VerticalHeader.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerticalHeader_vue_vue_type_template_id_29466cd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true */ "./resources/js/containers/VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true");
/* harmony import */ var _VerticalHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalHeader.vue?vue&type=script&lang=js */ "./resources/js/containers/VerticalHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _VerticalHeader_vue_vue_type_style_index_0_id_29466cd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css */ "./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css");
/* harmony import */ var _VerticalHeader_vue_vue_type_style_index_1_id_29466cd2_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css */ "./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _VerticalHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalHeader_vue_vue_type_template_id_29466cd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _VerticalHeader_vue_vue_type_template_id_29466cd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29466cd2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/VerticalHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/containers/TheContainer.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/TheContainer.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheContainer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/TheFooter.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/TheFooter.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheFooter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/TheSidebar.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/containers/TheSidebar.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheSidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheSidebar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/VerticalHeader.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/VerticalHeader.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_59a2dd7f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=style&index=0&id=59a2dd7f&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_0_id_29466cd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=0&id=29466cd2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_style_index_1_id_29466cd2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=style&index=1&id=29466cd2&lang=css");


/***/ }),

/***/ "./resources/js/containers/TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/containers/TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_59a2dd7f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_59a2dd7f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_template_id_59a2dd7f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true");


/***/ }),

/***/ "./resources/js/containers/TheFooter.vue?vue&type=template&id=44bdf58d":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/TheFooter.vue?vue&type=template&id=44bdf58d ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_44bdf58d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_44bdf58d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_44bdf58d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheFooter.vue?vue&type=template&id=44bdf58d */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheFooter.vue?vue&type=template&id=44bdf58d");


/***/ }),

/***/ "./resources/js/containers/TheSidebar.vue?vue&type=template&id=08a98f4c":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/TheSidebar.vue?vue&type=template&id=08a98f4c ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_08a98f4c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_08a98f4c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_08a98f4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheSidebar.vue?vue&type=template&id=08a98f4c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheSidebar.vue?vue&type=template&id=08a98f4c");


/***/ }),

/***/ "./resources/js/containers/VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_template_id_29466cd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_template_id_29466cd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalHeader_vue_vue_type_template_id_29466cd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheContainer.vue?vue&type=template&id=59a2dd7f&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "active", attrs: { id: "sidebar" } }, [
      _c("div", { staticClass: "sidebar-wrapper active" }, [
        _c("div", { staticClass: "sidebar-header" }, [
          _c(
            "div",
            {
              staticClass: "d-flex justify-content-center align-items-center",
              staticStyle: { position: "relative" },
            },
            [
              _c(
                "div",
                { staticClass: "logo" },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                      },
                      attrs: { to: "/" },
                    },
                    [
                      _vm.$appLogo != ""
                        ? _c("img", {
                            staticClass: "container-logo",
                            attrs: {
                              src: _vm.$storageUrl + _vm.$appLogo,
                              alt: "Logo",
                              srcset: "",
                            },
                          })
                        : _c("img", {
                            staticClass: "container-logo",
                            attrs: {
                              src: _vm.$baseUrl + "/images/logo.png",
                              alt: "Logo",
                              srcset: "",
                            },
                          }),
                    ]
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-menu" }, [
          _c(
            "ul",
            { staticClass: "menu" },
            [
              _c(
                "li",
                { staticClass: "sidebar-item sidebar-search" },
                [
                  _c("b-form-input", {
                    attrs: { type: "search", placeholder: _vm.__("search") },
                    on: { keyup: _vm.filterItem, search: _vm.filterItem },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "sidebar-title text-muted text-uppercase",
                  staticStyle: {
                    padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                    "font-size": "0.75rem",
                    "font-weight": "700",
                    "letter-spacing": ".05rem",
                    "list-style": "none",
                  },
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.__("modules")) +
                      "\n                    "
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.modulesSidebarItems, function (item) {
                return [
                  (
                    item.role == true
                      ? _vm.$role("Super Admin")
                      : (item.permission && _vm.$can(item.permission)) ||
                        (item.permission === null &&
                          _vm.isHasSub(item) &&
                          _vm.hasAnySubmenuPermission(item))
                  )
                    ? _c(
                        "li",
                        {
                          staticClass: "sidebar-item",
                          class: {
                            active:
                              _vm.isActive(item.url) || _vm.subIsActive(item),
                            "has-sub": _vm.isHasSub(item),
                          },
                        },
                        [
                          _vm.isHasSub(item)
                            ? [
                                _c("a", { staticClass: "sidebar-link" }, [
                                  _c("i", { class: "fa fa-" + item.icon }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(item.name))]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass: "submenu",
                                    class: { active: _vm.subIsActive(item) },
                                  },
                                  [
                                    _vm._l(item.submenu, function (sub) {
                                      return [
                                        (
                                          sub.role
                                            ? _vm.$role("Super Admin")
                                            : sub.permission &&
                                              _vm.$can(sub.permission)
                                        )
                                          ? _c(
                                              "li",
                                              {
                                                key: sub.key,
                                                staticClass: "submenu-item",
                                                class: {
                                                  active: _vm.isActive(sub.url),
                                                },
                                              },
                                              [
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: { to: sub.url },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.closeSideBarMenu()
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(sub.name) +
                                                        "\n                                            "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                      ]
                                    }),
                                  ],
                                  2
                                ),
                              ]
                            : [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "sidebar-link",
                                    attrs: { to: item.url },
                                    on: {
                                      click: function ($event) {
                                        return _vm.closeSideBarMenu()
                                      },
                                    },
                                  },
                                  [
                                    _c("i", { class: "fa fa-" + item.icon }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(item.name))]),
                                  ]
                                ),
                              ],
                        ],
                        2
                      )
                    : _vm._e(),
                ]
              }),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "sidebar-title text-muted text-uppercase",
                  staticStyle: {
                    padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                    "font-size": "0.75rem",
                    "font-weight": "700",
                    "letter-spacing": ".05rem",
                    "list-style": "none",
                  },
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.__("general")) +
                      "\n                    "
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.generalSidebarItems, function (item) {
                return [
                  (
                    item.role == true
                      ? _vm.$role("Super Admin")
                      : (item.permission && _vm.$can(item.permission)) ||
                        (item.permission === null &&
                          _vm.isHasSub(item) &&
                          _vm.hasAnySubmenuPermission(item))
                  )
                    ? _c(
                        "li",
                        {
                          staticClass: "sidebar-item",
                          class: {
                            active:
                              _vm.isActive(item.url) || _vm.subIsActive(item),
                            "has-sub": _vm.isHasSub(item),
                          },
                        },
                        [
                          _vm.isHasSub(item)
                            ? [
                                _c("a", { staticClass: "sidebar-link" }, [
                                  _c("i", { class: "fa fa-" + item.icon }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(item.name))]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass: "submenu",
                                    class: { active: _vm.subIsActive(item) },
                                  },
                                  [
                                    _vm._l(item.submenu, function (sub) {
                                      return [
                                        (
                                          sub.role
                                            ? _vm.$role("Super Admin")
                                            : sub.permission &&
                                              _vm.$can(sub.permission)
                                        )
                                          ? _c(
                                              "li",
                                              {
                                                key: sub.key,
                                                staticClass: "submenu-item",
                                                class: {
                                                  active: _vm.isActive(sub.url),
                                                },
                                              },
                                              [
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: { to: sub.url },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.closeSideBarMenu()
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(sub.name) +
                                                        "\n                                            "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                      ]
                                    }),
                                  ],
                                  2
                                ),
                              ]
                            : [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "sidebar-link",
                                    attrs: { to: item.url },
                                    on: {
                                      click: function ($event) {
                                        return _vm.closeSideBarMenu()
                                      },
                                    },
                                  },
                                  [
                                    _c("i", { class: "fa fa-" + item.icon }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(item.name))]),
                                  ]
                                ),
                              ],
                        ],
                        2
                      )
                    : _vm._e(),
                ]
              }),
              _vm._v(" "),
              _vm._l(_vm.filteredDatabaseDownloadBtn, function (item) {
                return [
                  (
                    item.role == true
                      ? _vm.$role("Super Admin")
                      : item.permission && _vm.$can(item.permission)
                  )
                    ? _c("div", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: { click: _vm.downloadDatabase },
                          },
                          [
                            _c("i", { class: "fa fa-download" }),
                            _vm.isLoading
                              ? _c("b-spinner", {
                                  attrs: { small: "", label: "Spinning" },
                                })
                              : _vm._e(),
                            _vm._v(" Download Database"),
                          ],
                          1
                        ),
                      ])
                    : _vm._e(),
                ]
              }),
            ],
            2
          ),
        ]),
        _vm._v(" "),
        _vm._m(1),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "main" } },
      [
        _c("vertical-header"),
        _vm._v(" "),
        _c("div", { staticClass: "main-content" }, [_c("router-view")], 1),
        _vm._v(" "),
        _c("the-footer"),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "toggler",
        staticStyle: {
          position: "absolute",
          top: "0",
          right: "0",
          display: "none !important",
        },
      },
      [
        _c(
          "a",
          {
            staticClass: "sidebar-hide",
            attrs: { href: "javascript:void(0)" },
          },
          [_c("i", { staticClass: "bi bi-x bi-middle" })]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "sidebar-toggler btn x" }, [
      _c("i", { attrs: { "data-feather": "x" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheFooter.vue?vue&type=template&id=44bdf58d":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheFooter.vue?vue&type=template&id=44bdf58d ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("footer", { staticClass: "figma-footer" }, [
    _c("div", { staticClass: "copyright" }, [
      _c("span", { domProps: { innerHTML: _vm._s(_vm.copyrightDetails) } }),
    ]),
    _vm._v(" "),
    _vm.currentVersion
      ? _c("div", { staticClass: "version" }, [
          _c("span", { staticClass: "version-label me-2" }, [
            _vm._v(_vm._s(_vm.__("version"))),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "version-badge" }, [
            _vm._v(_vm._s(_vm.currentVersion)),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheSidebar.vue?vue&type=template&id=08a98f4c":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/TheSidebar.vue?vue&type=template&id=08a98f4c ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "CSidebar",
    {
      attrs: { fixed: "", minimize: _vm.minimize, show: _vm.show },
      on: {
        "update:show": function (value) {
          return _vm.$store.commit("set", ["sidebarShow", value])
        },
      },
    },
    [
      _c(
        "CSidebarBrand",
        { staticClass: "d-md-down-none", attrs: { to: "/" } },
        [
          _c("CIcon", {
            staticClass: "d-block",
            attrs: {
              name: "logo",
              size: "custom-size",
              height: 35,
              viewBox: "0 0 " + (_vm.minimize ? 110 : 556) + " 134",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("CRenderFunction", {
        attrs: { flat: "", "content-to-render": _vm.nav },
      }),
      _vm._v(" "),
      _c("CSidebarMinimizer", {
        staticClass: "d-md-down-none",
        nativeOn: {
          click: function ($event) {
            return _vm.$store.commit("set", ["sidebarMinimize", !_vm.minimize])
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/containers/VerticalHeader.vue?vue&type=template&id=29466cd2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "header",
    { staticClass: "figma-header border-bottom" },
    [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg align-items-center py-0" },
        [
          _c(
            "div",
            {
              staticClass:
                "container-fluid px-4 py-2 d-flex justify-content-between",
            },
            [
              _c("div", { staticClass: "d-flex align-items-center gap-3" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "burger-btn d-flex align-items-center justify-content-center text-decoration-none",
                    staticStyle: {
                      width: "40px",
                      height: "40px",
                      margin: "0",
                      padding: "0",
                      background: "none",
                      border: "none",
                      "box-shadow": "none",
                    },
                    attrs: { href: "javascript:void(0)" },
                  },
                  [
                    _c("base-icon", {
                      attrs: { name: "Button", width: "40", height: "40" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "header-cache-btn d-flex align-items-center justify-content-center",
                    staticStyle: {
                      width: "125px",
                      height: "40px",
                      gap: "8px",
                      margin: "0",
                    },
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        _vm.popoverShow = true
                      },
                    },
                  },
                  [
                    _vm.isSystemRefreshing
                      ? _c("b-spinner", { attrs: { small: "" } })
                      : _c("span", [_vm._v(_vm._s(_vm.__("Clear Cache")))]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex align-items-center gap-3" }, [
                _vm.role === this.$roleSuperAdmin
                  ? _c("div", { staticClass: "dropdown me-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "module-selector d-flex align-items-center justify-content-between p-2",
                          staticStyle: {
                            cursor: "pointer",
                            "font-size": "0.85rem",
                          },
                          attrs: {
                            "data-bs-toggle": "dropdown",
                            "aria-expanded": "false",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex align-items-center" },
                            [
                              _vm.currentModule && _vm.currentModule.image_url
                                ? [
                                    _c("img", {
                                      staticClass: "me-2 rounded-circle",
                                      staticStyle: {
                                        width: "20px",
                                        height: "20px",
                                        "object-fit": "cover",
                                      },
                                      attrs: {
                                        src: _vm.currentModule.image_url,
                                      },
                                    }),
                                  ]
                                : [
                                    _c("i", {
                                      staticClass: "text-dark fw-bold me-2",
                                      class: _vm.currentModuleIcon,
                                      staticStyle: { "font-size": "1.1rem" },
                                    }),
                                  ],
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "fw-bold text-dark fs-6 ms-1" },
                                [_vm._v(_vm._s(_vm.currentModuleName))]
                              ),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "bi bi-chevron-down text-dark fw-bold ms-2",
                            staticStyle: { "font-size": "0.8rem" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass:
                            "dropdown-menu dropdown-menu-end lang-dropdown-menu shadow border-0 mt-2",
                        },
                        _vm._l(_vm.modules, function (mod) {
                          return _c("li", { key: mod.id }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "dropdown-item d-flex align-items-center gap-2 py-2",
                                class: {
                                  active: _vm.activeModuleId === mod.id,
                                },
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function ($event) {
                                    return _vm.selectModule(mod.id)
                                  },
                                },
                              },
                              [
                                mod.image_url
                                  ? [
                                      _c("img", {
                                        staticClass: "me-1 rounded-circle",
                                        staticStyle: {
                                          width: "20px",
                                          height: "20px",
                                          "object-fit": "cover",
                                        },
                                        attrs: { src: mod.image_url },
                                      }),
                                    ]
                                  : [
                                      _c("i", {
                                        staticClass: "text-secondary me-1",
                                        class:
                                          mod.id === 2
                                            ? "fa fa-capsules"
                                            : "bi bi-basket",
                                      }),
                                    ],
                                _vm._v(" "),
                                _c("span", { staticClass: "fw-semibold" }, [
                                  _vm._v(_vm._s(mod.name)),
                                ]),
                              ],
                              2
                            ),
                          ])
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "lang-selector d-flex align-items-center justify-content-between p-2",
                      staticStyle: {
                        cursor: "pointer",
                        "font-size": "0.85rem",
                      },
                      attrs: {
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "rounded-circle",
                        staticStyle: {
                          width: "24px",
                          height: "24px",
                          "object-fit": "cover",
                        },
                        attrs: { src: _vm.currentFlag, alt: "flag" },
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "fw-bold text-dark fs-6 ms-1" },
                        [_vm._v(_vm._s(_vm.currentLanguageName))]
                      ),
                      _vm._v(" "),
                      _c("i", {
                        staticClass:
                          "bi bi-chevron-down text-dark fw-bold ms-1",
                        staticStyle: { "font-size": "0.8rem" },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass:
                        "dropdown-menu dropdown-menu-end lang-dropdown-menu shadow border-0 mt-2",
                    },
                    _vm._l(_vm.languages, function (language) {
                      return _c("li", { key: language.code }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-item d-flex align-items-center gap-2 py-2",
                            class: { active: _vm.lang === language.code },
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function ($event) {
                                return _vm.selectLanguage(language.code)
                              },
                            },
                          },
                          [
                            _c("img", {
                              staticClass: "rounded-circle",
                              staticStyle: {
                                width: "18px",
                                height: "18px",
                                "object-fit": "cover",
                              },
                              attrs: {
                                src: _vm.getFlagByCode(language.code),
                                alt: "flag",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "fw-semibold" }, [
                              _vm._v(_vm._s(language.name.substring(0, 3))),
                            ]),
                          ]
                        ),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn p-0 border-0 d-flex align-items-center justify-content-center",
                    class:
                      _vm.userTheme === "theme-dark"
                        ? "text-white"
                        : "text-dark",
                    staticStyle: { width: "40px", height: "40px" },
                    on: { click: _vm.toggleTheme },
                  },
                  [
                    _vm.userTheme === "theme-dark"
                      ? _c(
                          "svg",
                          {
                            attrs: {
                              width: "28",
                              height: "28",
                              viewBox: "8 8 36 36",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            _c("circle", {
                              attrs: {
                                cx: "26",
                                cy: "26",
                                r: "9",
                                fill: "currentColor",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d: "M26 13V9M26 43V39M13 26H9M43 26H39M16.8076 16.8076L13.9792 13.9792M38.0208 38.0208L35.1924 35.1924M16.8076 35.1924L13.9792 38.0208M38.0208 13.9792L35.1924 16.8076",
                                stroke: "currentColor",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                              },
                            }),
                          ]
                        )
                      : _c("base-icon", {
                          staticStyle: {
                            transform: "scale(2.2)",
                            flex: "none",
                          },
                          attrs: {
                            name: "Theme Switch",
                            width: "24",
                            height: "24",
                            useCurrentColor: "",
                          },
                        }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn p-0 border-0 d-flex align-items-center justify-content-center",
                      class:
                        _vm.userTheme === "theme-dark"
                          ? "text-white"
                          : "text-dark",
                      staticStyle: { width: "40px", height: "40px" },
                      attrs: { href: _vm.websiteUrl, target: "_blank" },
                    },
                    [
                      _c("base-icon", {
                        staticStyle: { transform: "scale(2.2)", flex: "none" },
                        attrs: {
                          name: "Website",
                          width: "24",
                          height: "24",
                          useCurrentColor: "",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "nav-item dropdown d-flex align-items-center",
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "nav-link p-1 position-relative d-flex align-items-center justify-content-center",
                        class:
                          _vm.userTheme === "theme-dark"
                            ? "text-white"
                            : "text-dark",
                        staticStyle: { width: "40px", height: "40px" },
                        attrs: {
                          href: "#",
                          "data-bs-toggle": "dropdown",
                          "aria-expanded": "false",
                        },
                      },
                      [
                        _c("base-icon", {
                          attrs: {
                            name: "Bell",
                            width: "24",
                            height: "24",
                            useCurrentColor: "",
                          },
                        }),
                        _vm._v(" "),
                        _vm.notifications_unread_count > 0
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "position-absolute translate-middle badge rounded-circle bg-danger p-0 d-flex align-items-center justify-content-center",
                                staticStyle: {
                                  "font-size": "0.65rem",
                                  "min-width": "16px",
                                  height: "16px",
                                  top: "10px",
                                  left: "30px",
                                  border: "1.5px solid #fff",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.notifications_unread_count) +
                                    "\n                            "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        staticClass:
                          "dropdown-menu dropdown-menu-end notification-dropdown shadow border-0 mt-2 p-0",
                        staticStyle: {
                          width: "400px",
                          "max-width": "400px",
                          overflow: "hidden",
                          "border-radius": "0",
                        },
                        attrs: { "aria-labelledby": "dropdownMenuButton" },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "dropdown-header d-flex justify-content-between align-items-center px-4 py-3 border-bottom",
                            staticStyle: {
                              background: "#ffffff",
                              "border-radius": "0",
                            },
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "fw-bold text-dark fs-6" },
                              [_vm._v(_vm._s(_vm.__("notifications")))]
                            ),
                            _vm._v(" "),
                            _vm.notifications_unread_count > 0
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-link text-primary p-0 font-medium text-decoration-none shadow-none",
                                    staticStyle: { "font-size": "0.8rem" },
                                    on: {
                                      click: function ($event) {
                                        $event.stopPropagation()
                                        return _vm.confirmMarkAllAsRead.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "bi bi-check-all me-1",
                                    }),
                                    _vm._v(
                                      _vm._s(_vm.__("read_all_notifications")) +
                                        "\n                                "
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "notification-list-scroll",
                            staticStyle: {
                              "max-height": "464px",
                              "overflow-y": "auto",
                            },
                          },
                          [
                            _vm._l(
                              _vm.notifications.slice(0, 4),
                              function (notification) {
                                return _c(
                                  "li",
                                  {
                                    key: notification.id,
                                    staticClass: "notification-item-custom",
                                    on: {
                                      click: function ($event) {
                                        return _vm.handleNotificationClick(
                                          notification
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-start w-100",
                                        staticStyle: { gap: "16px" },
                                      },
                                      [
                                        _c("base-icon", {
                                          staticStyle: { "flex-shrink": "0" },
                                          attrs: {
                                            name: "notification",
                                            width: "40",
                                            height: "40",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex flex-column flex-grow-1",
                                            staticStyle: {
                                              "min-width": "0",
                                              gap: "4px",
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between align-items-center w-100",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-truncate notification-title-custom",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          _vm.parseNotification(
                                                            notification
                                                          ).title
                                                        ) +
                                                        "\n                                                "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "notification-time-custom ms-2",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          _vm.changeDateTime(
                                                            notification.created_at
                                                          )
                                                        ) +
                                                        "\n                                                "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "notification-body-custom",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.parseNotification(
                                                        notification
                                                      ).body
                                                    ) +
                                                    "\n                                            "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                )
                              }
                            ),
                            _vm._v(" "),
                            _vm.notifications.length == 0
                              ? _c(
                                  "li",
                                  { staticClass: "p-4 text-center text-muted" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.__("no_new_notification")) +
                                        "\n                                "
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "notification-footer p-0" }, [
                          _vm.isSellerRoute
                            ? _c(
                                "a",
                                {
                                  staticClass: "see-all-btn-custom",
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$router.push(
                                        "/seller/notification_panel"
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.__("see_all_notifications") ===
                                          "see_all_notifications"
                                          ? "See All Notifications"
                                          : _vm.__("see_all_notifications")
                                      )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("base-icon", {
                                    attrs: {
                                      name: "ArrowRight",
                                      width: "16",
                                      height: "16",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm.isDeliveryBoyRoute
                            ? _c(
                                "a",
                                {
                                  staticClass: "see-all-btn-custom",
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$router.push(
                                        "/delivery_boy/notification_panel"
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.__("see_all_notifications") ===
                                          "see_all_notifications"
                                          ? "See All Notifications"
                                          : _vm.__("see_all_notifications")
                                      )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("base-icon", {
                                    attrs: {
                                      name: "ArrowRight",
                                      width: "16",
                                      height: "16",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "a",
                                {
                                  staticClass: "see-all-btn-custom",
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$router.push(
                                        "/notification_panel"
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.__("see_all_notifications") ===
                                          "see_all_notifications"
                                          ? "See All Notifications"
                                          : _vm.__("see_all_notifications")
                                      )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("base-icon", {
                                    attrs: {
                                      name: "ArrowRight",
                                      width: "16",
                                      height: "16",
                                    },
                                  }),
                                ],
                                1
                              ),
                        ]),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "vr mx-2 bg-secondary",
                  staticStyle: {
                    width: "1px",
                    height: "32px",
                    opacity: "0.25",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "d-flex align-items-center gap-2 text-decoration-none",
                      attrs: {
                        href: "#",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "rounded-circle shadow-sm",
                        staticStyle: { "object-fit": "cover" },
                        attrs: {
                          src: _vm.profile_url,
                          width: "40",
                          height: "40",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-none d-sm-flex flex-column text-start align-items-start",
                          staticStyle: { "line-height": "1.1" },
                        },
                        [
                          _c("div", { staticClass: "fw-bold text-dark fs-6" }, [
                            _vm._v(_vm._s(_vm.user.username)),
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-muted text-uppercase fw-bold figma-user-role-text",
                              staticStyle: {
                                "font-size": "0.65rem",
                                "letter-spacing": "0.5px",
                              },
                            },
                            [_vm._v(_vm._s(_vm.role))]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("i", {
                        staticClass:
                          "bi bi-chevron-down text-dark fw-bold ms-1",
                        staticStyle: { "font-size": "0.8rem" },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass:
                        "dropdown-menu dropdown-menu-end user-dropdown-menu",
                      attrs: { "aria-labelledby": "dropdownMenuButton" },
                    },
                    [
                      _c("li", [
                        _c("h6", { staticClass: "dropdown-header" }, [
                          _vm._v(
                            _vm._s(_vm.__("hello")) +
                              ", " +
                              _vm._s(_vm.user.username) +
                              "!"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm.role == this.$roleSeller
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/seller/profile" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-mid bi bi-person me-2",
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.__("my_profile")) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.role == this.$roleDeliveryBoy
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/delivery_boy/profile" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-mid bi bi-person me-2",
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.__("my_profile")) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm.role == this.$roleSuperAdmin
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/settings" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-mid bi bi-gear me-2",
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.__("settings")) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.role == this.$roleSeller
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/seller/settings" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-mid bi bi-gear me-2",
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.__("settings")) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.role == this.$roleDeliveryBoy
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/delivery_boy/settings" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-mid bi bi-gear me-2",
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.__("settings")) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.role == this.$roleSeller
                        ? _c("li", [
                            _c("div", { staticClass: "dropdown-item" }, [
                              _c(
                                "div",
                                { staticClass: "form-check form-switch fs-6" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.sellerStatus,
                                        expression: "sellerStatus",
                                      },
                                    ],
                                    staticClass: "form-check-input me-0",
                                    staticStyle: { cursor: "pointer" },
                                    attrs: {
                                      type: "checkbox",
                                      id: "status",
                                      "true-value": 1,
                                      "false-value": 3,
                                      disabled: _vm.sellerStatusLoading,
                                    },
                                    domProps: {
                                      checked: Array.isArray(_vm.sellerStatus)
                                        ? _vm._i(_vm.sellerStatus, null) > -1
                                        : _vm._q(_vm.sellerStatus, 1),
                                    },
                                    on: {
                                      change: [
                                        function ($event) {
                                          var $$a = _vm.sellerStatus,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? 1 : 3
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.sellerStatus = $$a.concat([
                                                  $$v,
                                                ]))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.sellerStatus = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.sellerStatus = $$c
                                          }
                                        },
                                        _vm.toggleSellerStatus,
                                      ],
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.sellerStatus === 1
                                    ? _c(
                                        "label",
                                        {
                                          staticClass: "badge bg-success ms-2",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(_vm.__("active")) +
                                              "\n                                        "
                                          ),
                                        ]
                                      )
                                    : _c(
                                        "label",
                                        { staticClass: "badge bg-danger ms-2" },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(_vm.__("deactive")) +
                                              "\n                                        "
                                          ),
                                        ]
                                      ),
                                ]
                              ),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.role == this.$roleDeliveryBoy
                        ? _c("li", [
                            _c("div", { staticClass: "dropdown-item" }, [
                              _c(
                                "div",
                                { staticClass: "form-check form-switch fs-6" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.deliveryBoyStatus,
                                        expression: "deliveryBoyStatus",
                                      },
                                    ],
                                    staticClass: "form-check-input me-0",
                                    staticStyle: { cursor: "pointer" },
                                    attrs: {
                                      type: "checkbox",
                                      id: "status",
                                      "true-value": 1,
                                      "false-value": 3,
                                      disabled: _vm.deliveryBoyStatusLoading,
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.deliveryBoyStatus
                                      )
                                        ? _vm._i(_vm.deliveryBoyStatus, null) >
                                          -1
                                        : _vm._q(_vm.deliveryBoyStatus, 1),
                                    },
                                    on: {
                                      change: [
                                        function ($event) {
                                          var $$a = _vm.deliveryBoyStatus,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? 1 : 3
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.deliveryBoyStatus =
                                                  $$a.concat([$$v]))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.deliveryBoyStatus = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.deliveryBoyStatus = $$c
                                          }
                                        },
                                        _vm.toggleDeliveryBoyStatus,
                                      ],
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.deliveryBoyStatus === 1
                                    ? _c(
                                        "label",
                                        {
                                          staticClass: "badge bg-success ms-2",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(_vm.__("active")) +
                                              "\n                                        "
                                          ),
                                        ]
                                      )
                                    : _c(
                                        "label",
                                        { staticClass: "badge bg-danger ms-2" },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(_vm.__("deactive")) +
                                              "\n                                        "
                                          ),
                                        ]
                                      ),
                                ]
                              ),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(0),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            on: {
                              click: function ($event) {
                                return _vm.logout()
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "icon-mid bi bi-box-arrow-left me-2",
                            }),
                            _vm._v(
                              _vm._s(_vm.__("logout")) +
                                "\n                                "
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "cache-confirm-modal",
            title: _vm.__("are_you_sure"),
            "hide-footer": "",
            centered: "",
          },
          model: {
            value: _vm.popoverShow,
            callback: function ($$v) {
              _vm.popoverShow = $$v
            },
            expression: "popoverShow",
          },
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.__("cache:clear")))]),
          _vm._v(",\n"),
          _c("span", [_vm._v(_vm._s(_vm.__("config:clear")))]),
          _vm._v(",\n"),
          _c("span", [_vm._v(_vm._s(_vm.__("route:clear")))]),
          _vm._v(",\n"),
          _c("span", [_vm._v(_vm._s(_vm.__("view:clear")))]),
          _vm._v(" "),
          _vm.isSystemRefreshing
            ? _c("b-spinner", { attrs: { small: "", label: "Spinning" } })
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-row justify-content-between align-items-center",
            },
            [
              _c(
                "b-button",
                {
                  attrs: { size: "sm", variant: "outline-danger" },
                  on: {
                    click: function ($event) {
                      _vm.popoverShow = false
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.__("cancel")))]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: {
                    size: "sm",
                    variant: "primary",
                    disabled: _vm.isSystemRefreshing,
                  },
                  on: { click: _vm.clearCache },
                },
                [
                  _vm.isSystemRefreshing
                    ? _c("b-spinner", {
                        attrs: { small: "", label: "Spinning" },
                      })
                    : _vm._e(),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.__("ok")) +
                      "\n                "
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
]
render._withStripped = true



/***/ })

}]);