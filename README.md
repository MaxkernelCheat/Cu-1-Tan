# ✨ STYLO AI — Fashion Studio

> Ứng dụng thay đồ & tạo mockup thời trang bằng AI, sử dụng Google Gemini API.

![Preview](https://img.shields.io/badge/AI-Gemini%202.0-blue?style=flat-square&logo=google) ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)

---

## 🚀 Deploy lên GitHub Pages (5 bước)

### Bước 1 — Tạo repo GitHub
```bash
# Tạo repo mới trên github.com, ví dụ tên: stylo-ai
# Sau đó clone hoặc push code lên
git init
git add .
git commit -m "🎉 Initial commit — STYLO AI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stylo-ai.git
git push -u origin main
```

### Bước 2 — Sửa tên repo trong vite.config.ts
Mở file `vite.config.ts` và thay `stylo-ai` bằng **tên repo thực tế** của bạn:
```ts
base: '/TEN-REPO-CUA-BAN/',
```

### Bước 3 — Bật GitHub Pages
1. Vào repo trên GitHub → **Settings** → **Pages**
2. Mục **Source**: chọn **GitHub Actions**
3. Lưu lại

### Bước 4 — (Tùy chọn) Thêm API Key bí mật
Nếu muốn có key mặc định (không cần user nhập):
1. Vào repo → **Settings** → **Secrets and variables** → **Actions**
2. Tạo secret tên: `VITE_GEMINI_API_KEY`
3. Dán API key của bạn vào

> ⚠️ **Lưu ý bảo mật**: Nếu repo là **public**, KHÔNG nên thêm key mặc định. Để trống → user sẽ tự nhập key của họ. 

### Bước 5 — Deploy!
```bash
git add .
git commit -m "fix: update vite base path"
git push
```
GitHub Actions sẽ tự động build và deploy. Sau ~2 phút, app sẽ chạy tại:
```
https://YOUR_USERNAME.github.io/stylo-ai/
```

---

## 🔑 Lấy Gemini API Key

1. Truy cập [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Đăng nhập Google → **Create API Key**
3. Copy key (bắt đầu bằng `AIzaSy...`)
4. Dán vào ô nhập key trong app

**Lưu ý**: Key được lưu trong session, không gửi đến server nào ngoài Google.

---

## 💻 Chạy Local (Dev)

```bash
# Cài dependencies
npm install

# Tạo file .env từ template
cp .env.example .env
# Mở .env và điền API key của bạn

# Chạy dev server
npm run dev
# → Mở http://localhost:5173
```

---

## 🛠️ Tech Stack

| Công nghệ | Mục đích |
|-----------|----------|
| React 18 + TypeScript | UI Framework |
| Vite 5 | Build tool |
| @google/generative-ai | Gemini SDK |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting miễn phí |

---

## 🌟 Tính năng

- **👗 Thay đồ AI** — Upload người mẫu + sản phẩm → AI ghép outfit tự động
- **📦 Mockup 3D** — Tạo mockup chuyên nghiệp (Flat lay, Ghost mannequin, 3D floating)
- **⚡ Job Queue** — Chạy 2 job song song
- **🕐 Lịch sử** — Lưu các lần tạo ảnh (localStorage)
- **🔬 Test API** — Kiểm tra API key trước khi dùng

---

## ❓ Troubleshooting

**Lỗi CORS khi chạy từ file HTML trực tiếp**  
→ Phải chạy qua `npm run dev` hoặc deploy lên server, không được mở file HTML trực tiếp.

**AI trả về text thay vì ảnh**  
→ Image generation qua REST API cần model `gemini-2.0-flash-exp-image-generation`. Hiện tại Gemini text models phân tích ảnh nhưng output text. Tính năng này đang được Google mở rộng dần.

**Key không hợp lệ**  
→ Kiểm tra key bắt đầu bằng `AIzaSy...` và đã enable "Generative Language API" trong Google Cloud Console.

---

## 📄 License

MIT — Free to use, modify and distribute.
