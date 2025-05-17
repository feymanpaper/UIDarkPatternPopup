import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: 'in-app|SxaWDkYG-V9QpoMY0oVRbVKXIW4okQ5yl1ZVosGHuOA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.xunlei.downloadprovider:id/linearLayout"] > android.widget.ImageView[id="com.xunlei.downloadprovider:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 1,
      name: 'in-app|4b66bRxB9lshSZCttwJdrsja2gFwH25i4PAQ4YGjDaU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.xunlei.downloadprovider:id/iv_cleanup_success_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 2,
      name: 'system|7BFQv8zXks6QEA20cEHkEJF2AhwKf_m41V9Fl3lMurI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_one_time_button"][text="允许本次使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 3,
      name: 'system|c6f6AupTaJ4G9dVVfaSc_mLnx3mN2mYimFKsEq9UN2Q=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 4,
      name: 'in-app|b-t-X_ozaeA1ugqhZxgLhzfZn5Hc_t1mmT04mzkkcfA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.xunlei.downloadprovider:id/confirm"][text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 5,
      name: 'in-app|z8FRA41FmKbN6Tjzcq_unMmGANlWFkgfAOqrWfJHdoI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.xunlei.browser.XLBrowserActivity',
          matches: 'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.xunlei.downloadprovider:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[id="com.xunlei.downloadprovider:id/swipeRefreshLayout"] > android.widget.FrameLayout[id="com.xunlei.downloadprovider:id/container"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="搜狗搜索"] > android.view.View[clickable=true] > android.view.View[id="main"] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 6,
      name: 'in-app|7vR9_QMHDCy0GytBItbHmRHu9cY2n8Z4WIh1sRAdci8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.xunlei.downloadprovider:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },
    {
      key: 7,
      name: 'in-app|xYC1glq-X4Tzy_p1bjrSQbkgXMRIs8X_4HG8kRgSo4A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches: 'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.xunlei.downloadprovider:id/iv_cleanup_confirm_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },

      ],
    },

  ],
});
