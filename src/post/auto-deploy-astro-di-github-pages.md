---
kategori: Astro
judul: Auto Deploy Astro di Github Pages
tanggal: 2021-10-10
tags: postingan
---

Isi dari `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - master
      - main

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"

      - name: Cache dependencies Node
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${% raw %}{{ runner.os }}{% endraw %}-node-${% raw %}{{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: ${% raw %}{{ runner.os }}{% endraw %}-node-

      - name: Install
        run: npm i

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}
          publish_dir: ./dist
```
