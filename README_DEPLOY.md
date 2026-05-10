# تعليمات الرفع على GitHub Pages 🚀

لقد تم إعداد المشروع ليكون متوافقاً مع GitHub Pages باستخدام `HashRouter` وتكوين `base: './'` في Vite.

### الخطوات:

1. **إنشاء مستودع (Repository) جديد على GitHub.**
2. **داخل مجلد المشروع `productive-families` قم بتنفيذ الأوامر التالية:**

```bash
git init
git add .
git commit -m "Initial commit: Productive Families Platform"
git branch -M main
git remote add origin [رابط_مستودعك_هنا]
git push -u origin main
```

3. **تثبيت حزمة GitHub Pages:**
```bash
npm install gh-pages --save-dev
```

4. **تعديل ملف `package.json` وإضافة السكربتات التالية:**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  ...
}
```

5. **رفع التطبيق:**
```bash
npm run deploy
```

بعد ذلك، سيصبح التطبيق متاحاً على الرابط: `https://[username].github.io/productive-families/`

---
تم التصميم بواسطة Jules - Senior Full-Stack Developer
