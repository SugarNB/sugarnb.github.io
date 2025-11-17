---
layout: default
title: 关于我
---

<div class="about-page">
    <div class="container">
        <div class="about-content">
            <div class="about-header">
                <div class="about-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h1>关于我</h1>
            </div>

            <div class="about-body">
                <section class="about-section">
                    <h2><i class="fas fa-info-circle"></i> 简介</h2>
                    <p>
                        欢迎来到我的博客！这里记录着我的技术学习历程、生活感悟以及游戏体验。
                        希望通过这个平台与大家分享知识，交流想法。
                    </p>
                </section>

                <section class="about-section">
                    <h2><i class="fas fa-code"></i> 技术栈</h2>
                    <div class="tech-stack">
                        <span class="tech-item">JavaScript</span>
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Java</span>
                        <span class="tech-item">React</span>
                        <span class="tech-item">Vue</span>
                        <span class="tech-item">Node.js</span>
                    </div>
                </section>

                <section class="about-section">
                    <h2><i class="fas fa-heart"></i> 兴趣爱好</h2>
                    <ul class="interests-list">
                        <li><i class="fas fa-laptop-code"></i> 编程开发</li>
                        <li><i class="fas fa-book"></i> 阅读学习</li>
                        <li><i class="fas fa-gamepad"></i> 游戏娱乐</li>
                        <li><i class="fas fa-camera"></i> 摄影记录</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h2><i class="fas fa-envelope"></i> 联系方式</h2>
                    <p>
                        如果你有任何问题或建议，欢迎通过以下方式联系我：
                    </p>
                    <div class="contact-links">
                        {% if site.social.github %}
                        <a href="https://github.com/{{ site.social.github }}" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        {% endif %}
                        {% if site.social.email %}
                        <a href="mailto:{{ site.social.email }}">
                            <i class="fas fa-envelope"></i> Email
                        </a>
                        {% endif %}
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

