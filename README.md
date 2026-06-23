# 永貞臭豆腐 官方網站

> 永和永貞路十年老店．二段火候現炸 — 官方網站原始碼

🌐 線上網址：**https://yongzhen-tofu.com.tw/**

新北市永和區永貞路 351 號的深坑臭豆腐老店官方網站，採雜誌編排風格設計，並包含完整的加盟招商系列頁面。純靜態網站，部署於 GitHub Pages。

---

## 📄 網站結構

| 頁面 | 檔案 | 說明 |
|---|---|---|
| 首頁 | `index.html` | 品牌故事、二段火候、菜單、店家資訊、加盟標卡 |
| 二段火候詳解 | `er-duan-huo-hou.html` | 二段火候原理、深坑 vs 一般臭豆腐、FAQ |
| 加盟招商 | `join.html` | 加盟優勢、一對一指導、開店流程、Google 意願表單 |
| 加盟流程 | `franchise-process.html` | 8 步驟拆解、八週時程甘特圖、流程一覽表 |
| 總部支援 ×6 | `support-*.html` | 技術轉移／原料供應／選址／教育訓練／開店設備／開幕行銷 |

`support-*.html` 六頁共用 `support.css` 與 `support.js`。

---

## 🛠 技術

- 純 **HTML / CSS / JavaScript**，無框架、無建置流程
- 字型：Google Fonts（Bodoni Moda、Noto Serif/Sans TC、Archivo）
- 互動：IntersectionObserver 進場動畫、圖片 blur-up、lightbox、甘特圖（CSS Grid）
- 加盟意願表：嵌入 **Google 表單** iframe（資料進 Google 表單後台 / 連結試算表）
- 部署：**GitHub Pages** + 自訂網域（`CNAME`）

---

## 📁 專案結構

```
.
├── index.html                 # 首頁
├── er-duan-huo-hou.html       # 二段火候詳解
├── join.html                  # 加盟招商（含 Google 表單）
├── franchise-process.html     # 加盟流程（甘特圖）
├── support-technique.html     # 加盟支援：二段火候技術轉移
├── support-ingredients.html   # 加盟支援：核心原料供應
├── support-location.html      # 加盟支援：選址與商圈評估
├── support-training.html      # 加盟支援：教育訓練
├── support-setup.html         # 加盟支援：開店與設備輔導
├── support-marketing.html     # 加盟支援：開幕行銷與持續輔導
├── support.css / support.js   # 六支援頁共用樣式與互動
├── sitemap.xml                # 網站地圖（9 頁）
├── robots.txt                 # 搜尋引擎索引規則
├── CNAME                      # 自訂網域設定
├── favicon.svg / og-image.webp
├── 永貞豆腐店網路照片/          # 真實店家照片（webp 為主）
└── 相簿網圖/                   # 可用素材庫（新照片放這裡）
```

---

## 🔍 SEO

- 結構化資料（JSON-LD）：`Restaurant`、`FAQPage`、`Article`、`HowTo`、`BreadcrumbList`
- 完整 Open Graph / Twitter Card、`canonical`、地理標記（geo meta）
- `sitemap.xml` 收錄全部 9 頁；已於 Google Search Console 驗證
- 圖片皆有描述性 `alt`、`loading="lazy"`、首屏圖優先載入

---

## 💻 本地預覽

不需安裝套件，用 Python 內建伺服器即可：

```bash
python3 -m http.server 8000
# 瀏覽器開 http://localhost:8000
```

---

## 🚀 部署

推送到 `main` 分支即自動由 GitHub Pages 發布（約 1–2 分鐘生效）：

```bash
git add -A
git commit -m "更新內容"
git push
```

---

## 🖼 圖片規範

- 新照片請放入 **`相簿網圖/`** 資料夾，做頁面時從這裡取用
- 上線前盡量轉為 **webp**（可用 Python Pillow，品質 74–80 視覺幾乎無損）
- 真實店家照片優先；圖庫示意照請於說明加註「（示意）」

---

## 🧾 維護備註

- **電話 / 地址 / 營業時間**：散見於各 HTML 與 `index.html` 的 JSON-LD，更新時請一併修改
- **加盟意願表**：嵌入位置在 `join.html` 的 `#apply` 區段（Google 表單 iframe）
- **外送連結**：`index.html` 的 UberEats / Foodpanda 連結，待換為真實店家頁網址

---

© 民國一一五年 永貞臭豆腐 Yongzhen Stinky Tofu．永和・永貞路
