---
layout: default
title: Contact
---

## Any Question Or Advice?

You can leave your words on this page. You can also contact me by other ways.

**Email**: [NSIETeam@outlook.com](mailto:NSIETeam@outlook.com)

### Contact Form

<form id="contact-form" class="contact-form">
    <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input type="text" id="name" class="form-input" placeholder="Your name">
    </div>
    <div class="form-group">
        <label class="form-label" for="email">Email *</label>
        <input type="email" id="email" class="form-input" placeholder="Your email" required>
    </div>
    <div class="form-group">
        <label class="form-label" for="message">Message *</label>
        <textarea id="message" class="form-textarea" placeholder="Your message" required></textarea>
    </div>
    <button type="submit" class="form-submit">Send Message</button>
</form>

<div class="language-note">
    English Version
</div>

<hr>

## 任何问题或者建议？

你可以在此页留言。同样，您也可以通过其他方式联系我。

**邮箱**: [NSIETeam@outlook.com](mailto:NSIETeam@outlook.com)

### 联系表单

<form id="contact-form-cn" class="contact-form">
    <div class="form-group">
        <label class="form-label" for="name-cn">姓名</label>
        <input type="text" id="name-cn" class="form-input" placeholder="您的姓名">
    </div>
    <div class="form-group">
        <label class="form-label" for="email-cn">邮箱 *</label>
        <input type="email" id="email-cn" class="form-input" placeholder="您的邮箱" required>
    </div>
    <div class="form-group">
        <label class="form-label" for="message-cn">消息 *</label>
        <textarea id="message-cn" class="form-textarea" placeholder="您的消息" required></textarea>
    </div>
    <button type="submit" class="form-submit">发送消息</button>
</form>

<div class="language-note">
    简体中文版本
</div>

<script>
// Additional form handling for Chinese form
document.addEventListener('DOMContentLoaded', function() {
    const formCN = document.getElementById('contact-form-cn');
    if (formCN) {
        formCN.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言！这是演示表单。实际应用中会发送邮件。');
            this.reset();
        });
    }
});
</script>