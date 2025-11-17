// 搜索功能
(function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchNoResults = document.getElementById('searchNoResults');
    const clearBtn = document.getElementById('clearSearch');
    
    if (!searchInput) return;
    
    // 获取搜索数据（从页面中的script标签）
    let searchData = [];
    const dataScripts = document.querySelectorAll('script');
    for (let script of dataScripts) {
        if (script.textContent && script.textContent.includes('searchData')) {
            try {
                const scriptContent = script.textContent;
                const dataMatch = scriptContent.match(/const searchData = (\[[\s\S]*?\]);/);
                if (dataMatch) {
                    searchData = eval(dataMatch[1]);
                    break;
                }
            } catch (e) {
                console.error('Error loading search data:', e);
            }
        }
    }
    
    // 搜索函数
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '';
            searchNoResults.style.display = 'none';
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const results = searchData.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            const excerptMatch = item.excerpt.toLowerCase().includes(lowerQuery);
            const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
            const categoryMatch = item.categories.some(cat => cat.toLowerCase().includes(lowerQuery));
            
            return titleMatch || excerptMatch || tagMatch || categoryMatch;
        });
        
        displayResults(results, query);
    }
    
    // 显示搜索结果
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '';
            searchNoResults.style.display = 'block';
            return;
        }
        
        searchNoResults.style.display = 'none';
        
        const resultsHTML = results.map(item => {
            const highlightedTitle = highlightText(item.title, query);
            const highlightedExcerpt = highlightText(item.excerpt, query);
            
            const tagsHTML = item.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
            
            return `
                <article class="post-card">
                    <div class="post-card-header">
                        <h3><a href="${item.url}">${highlightedTitle}</a></h3>
                        <time>${item.date}</time>
                    </div>
                    <p class="post-card-excerpt">${highlightedExcerpt}</p>
                    <div class="post-card-footer">
                        ${item.categories.length > 0 ? 
                            `<span class="post-card-category">
                                <i class="fas fa-folder"></i>
                                ${item.categories[0]}
                            </span>` : ''
                        }
                        ${tagsHTML ? `<span class="post-card-tags">${tagsHTML}</span>` : ''}
                    </div>
                </article>
            `;
        }).join('');
        
        searchResults.innerHTML = resultsHTML;
    }
    
    // 高亮搜索关键词
    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    // 输入事件
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value;
        
        if (query) {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    // 清除按钮
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        this.style.display = 'none';
        searchResults.innerHTML = '';
        searchNoResults.style.display = 'none';
        searchInput.focus();
    });
    
    // 回车搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(this.value);
        }
    });
    
    // 添加高亮样式
    const style = document.createElement('style');
    style.textContent = `
        mark {
            background-color: var(--primary-color);
            color: white;
            padding: 0.1rem 0.2rem;
            border-radius: 3px;
        }
    `;
    document.head.appendChild(style);
})();

