var posts=["2025/11/15/使用wireshark对qq发送的图片进行抓包并还原/","2025/11/22/紧急学习报告1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };