
## 專案結構(預計
)
```
src/
├─ api/                    # API 相關
│  ├─ modules/            # 按功能模組分組的 API
│  ├─ interceptors.ts     # 請求攔截器
│  └─ types.ts           # API 型別定義
├─ assets/               # 靜態資源
│  ├─ images/           # 圖片資源
│  ├─ styles/           # 全域樣式
│  │  ├─ variables.scss # SCSS 變數
│  │  ├─ mixins.scss    # SCSS mixins
│  │  └─ global.scss    # 全域樣式
│  └─ icons/            # 圖示資源
├─ components/           # 可重用元件
│  ├─ ui/               # 基礎 UI 元件 (Button, Input 等)
│  ├─ business/         # 業務邏輯元件
│  └─ layout/           # 版面元件
├─ composables/          # Vue 3 Composition API hooks
├─ constants/            # 常數定義
├─ directives/           # 自定義指令
├─ layouts/              # 版面佈局
├─ middleware/           # 路由中間件
├─ plugins/              # Vue 插件
├─ router/               # 路由配置
│  ├─ guards.ts         # 路由守衛
│  ├─ routes.ts         # 路由定義
│  └─ index.ts          # 路由入口
├─ store/                # 狀態管理 (Pinia)
│  ├─ modules/          # 按功能分組的 store
│  └─ index.ts          # store 入口
├─ types/                # TypeScript 型別定義
│  ├─ api.ts            # API 相關型別
│  ├─ common.ts         # 通用型別
│  └─ components.ts     # 元件型別
├─ utils/                # 工具函式
│  ├─ formatters.ts     # 格式化工具
│  ├─ validators.ts     # 驗證工具
│  ├─ helpers.ts        # 通用工具
│  └─ constants.ts      # 工具常數
├─ views/                # 頁面元件
│  ├─ auth/             # 認證相關頁面
│  ├─ dashboard/        # 儀表板
│  ├─ chat/             # 聊天功能
│  └─ settings/         # 設定頁面
└─ __tests__/            # 測試檔案
   ├─ components/       # 元件測試
   ├─ utils/            # 工具函式測試
   └─ views/            # 頁面測試
```