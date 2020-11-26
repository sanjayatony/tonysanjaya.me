---
title: File Permissions for WordPress
date: 2017-11-15
tags:
  - code
  - WordPress
---

```
sudo find . -type f -exec chmod 664 {} +
sudo find . -type d -exec chmod 775 {} +
sudo chmod 660 wp-config.php
```
