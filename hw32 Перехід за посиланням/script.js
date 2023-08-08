function redirectToSite(url) {
    // перевіряємо, чи вказаний протокол у посиланні
    if (!/^https?:\/\//i.test(url)) {
      // якщо протокол не вказаний - додаємо поточний протокол
      url = location.protocol + '//' + url;
    }
    // переадресовуємо на інший сайт
    window.location.href = url;
  }
