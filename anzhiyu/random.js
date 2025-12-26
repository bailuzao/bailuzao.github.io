var posts=["2025/11/15/使用wireshark对qq发送的图片进行抓包并还原/","2025/11/22/紧急学习报告1/","2025/11/24/VMware中虚拟机不同VMnet的区别/","2025/12/01/TCP-UDP53端口的区别/","2025/12/01/子网扫描和笑脸漏洞/","2025/11/25/渗透作业1/","2025/12/01/等保/","2025/12/26/作业6/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };