// Enhanced Modern Portfolio Interactions

// Utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Enhanced smooth scrolling with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add focus for accessibility
            target.focus();
        }
    });
});

// Enhanced intersection observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -10% 0px',
    threshold: [0, 0.1, 0.5, 1]
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.classList.add('animate-in');
            
            // Add stagger animation for child elements
            const children = entry.target.querySelectorAll('.animate-child');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Apply animation observer to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px) scale(0.98)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    animateOnScroll.observe(section);
});

// Enhanced parallax effect for hero section
const parallaxElements = document.querySelectorAll('.about-image, .creative-title');
window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxRate = scrolled * -0.3;
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${parallaxRate}px)`;
    });
}, 10));

// Advanced header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        header.style.opacity = '0.9';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }
    
    // Add backdrop blur based on scroll
    const blurAmount = Math.min(scrollTop / 100, 1);
    header.style.backdropFilter = `blur(${20 + blurAmount * 10}px) saturate(${180 + blurAmount * 20}%)`;
    
    lastScrollTop = scrollTop;
}, 10));

// Enhanced back to top button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }, 100));
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced image gallery functionality
function changeVideoImage(src) {
    const mainImage = document.getElementById('mainVideoImage');
    if (mainImage) {
        // Add loading animation
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
        
        // Update active thumbnail
        document.querySelectorAll('.thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

function changeUIImage(src) {
    const mainImage = document.getElementById('mainUIImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
        
        document.querySelectorAll('.thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

function changeMainImage(src) {
    const mainImage = document.getElementById('mainGTAImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
        
        document.querySelectorAll('.thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

function changeMainOverviewImage(src) {
    const mainImage = document.getElementById('mainOverviewImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
        
        document.querySelectorAll('.thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

function changePropertyTycoonImage(src) {
    const mainImage = document.getElementById('mainPropertyTycoonImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
        
        document.querySelectorAll('.thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

function changeAnimationImage(src) {
    const mainImage = document.getElementById('mainAnimationImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
        
        document.querySelectorAll('.thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

// Enhanced hover effects for cards
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-12px) scale(1.01)';
        section.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced image hover effects with tilt
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', (e) => {
        e.target.style.filter = 'brightness(1.1) saturate(1.1)';
        e.target.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        e.target.style.transform = 'scale(1.05) rotate(1deg)';
    });
    
    img.addEventListener('mouseleave', (e) => {
        e.target.style.filter = 'brightness(1) saturate(1)';
        e.target.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Mouse cursor enhancement
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, var(--theme-color), var(--secondary-color));
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    opacity: 0;
    mix-blend-mode: difference;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Enhanced clickable elements cursor effect
document.querySelectorAll('a, button, .thumbnail-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'linear-gradient(135deg, var(--accent-color), var(--theme-color))';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'linear-gradient(135deg, var(--theme-color), var(--secondary-color))';
    });
});

// Performance optimization: RAF for smooth animations
let ticking = false;

function updateAnimations() {
    // Update any continuous animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize all gallery images
    document.querySelectorAll('.thumbnail-item img').forEach(img => {
        img.addEventListener('click', () => {
            img.style.transform = 'scale(0.95)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 150);
        });
    });
      console.log('🎨 Enhanced Portfolio Loaded Successfully!');
});

// 滑鼠跟隨效果
function createMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
}

// GTA V Mods Gallery
function initModGallery() {
    const mainImage = document.querySelector('.mod-main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail-container img');
    const prevBtn = document.querySelector('.gallery-nav.prev');
    const nextBtn = document.querySelector('.gallery-nav.next');
    let currentIndex = 0;

    function updateGallery(index) {
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        mainImage.src = thumbnails[index].src;
        currentIndex = index;
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => updateGallery(index));
    });

    prevBtn.addEventListener('click', () => {
        const newIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
        updateGallery(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
        updateGallery(newIndex);
    });

    // 鍵盤控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
}

// 添加滑鼠視差效果
function initParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.05;

        document.querySelectorAll('.parallax-item').forEach(item => {
            const speed = item.dataset.speed || 1;
            item.style.transform = `translate3d(${moveX * speed}px, ${moveY * speed}px, 50px)`;
        });
    });
}

// 添加打字機效果
function typeWriter(element, text, speed = 50) { // 將速度從 100 改為 50
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 添加捲動進度條
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 工��經驗時間軸動畫
function initTimelineAnimation() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// 圖片模態框
function initImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal hidden';
    modal.innerHTML = `
        <div class="modal-content">
            <img src="" alt="Modal Image">
            <button class="modal-close">×</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.querySelectorAll('.zoomable-image').forEach(img => {
        img.addEventListener('click', () => {
            modal.querySelector('img').src = img.src;
            modal.classList.remove('hidden');
        });
    });

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

// 增強版主題切換
function enhanceThemeToggle() {
    const themes = {
        default: {
            '--theme-color': '#FF6B6B',
            '--secondary-color': '#4ECDC4',
            '--accent-color': '#45B7AF'
        },
        ocean: {
            '--theme-color': '#2193b0',
            '--secondary-color': '#6dd5ed',
            '--accent-color': '#45b7af'
        },
        sunset: {
            '--theme-color': '#ff9a9e',
            '--secondary-color': '#fad0c4',
            '--accent-color': '#ffd1ff'
        },
        forest: {
            '--theme-color': '#134E5E',
            '--secondary-color': '#71B280',
            '--accent-color': '#2ecc71'
        },
        cyber: {
            '--theme-color': '#ff00ff',
            '--secondary-color': '#00ffff',
            '--accent-color': '#33ff33'
        },
        minimal: {
            '--theme-color': '#2c3e50',
            '--secondary-color': '#34495e',
            '--accent-color': '#7f8c8d'
        },
        neon: {
            '--theme-color': '#ff1493',
            '--secondary-color': '#00ff00',
            '--accent-color': '#ff4500'
        },
        midnight: {
            '--theme-color': '#4B0082',
            '--secondary-color': '#8A2BE2',
            '--accent-color': '#9400D3'
        }
    };

    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', (e) => {
        const theme = themes[e.target.value];
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    });
}

// 移動裝置導航欄切換
const navToggle = document.createElement('button');
navToggle.id = 'nav-toggle';
navToggle.innerHTML = '☰';
document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('show');
});

// 點擊導航項目後自動關閉選單
document.querySelectorAll('.nav-list a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-list').classList.remove('show');
        }
    });
});

// Back to Top Button Functionality
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced Section Animations
function initSectionEffects() {
    document.querySelectorAll('section').forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(section);
    });
}

// Image Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.image-modal');
    const modalImg = document.querySelector('.modal-content img');
    const closeModal = document.querySelector('.modal-close');

    // Function to open modal with the clicked image
    function openModal(event) {
        modal.style.display = 'flex';
        modalImg.src = event.target.src;
    }

    // Attach click event to all images in GTA and 3D model sections
    const images = document.querySelectorAll('.gta-section img, .modeling-section img');
    images.forEach(img => {
        img.addEventListener('click', openModal);
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function changeMainImage(src) {
    const mainImage = document.getElementById('mainGTAImage');
    if (mainImage) mainImage.src = src;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-item img');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) thumb.classList.add('active');
    });
}

// Function to change main overview image
function changeMainOverviewImage(src) {
    const mainImage = document.getElementById('mainOverviewImage');
    if (mainImage) mainImage.src = src;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.model-overview .thumbnail-item img');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) thumb.classList.add('active');
    });
}

// Function to change main model image
function changeMainModelImage(src, modelId) {
    const mainImage = document.getElementById(`mainModelImage${modelId}`);
    if (mainImage) mainImage.src = src;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll(`.model-item[data-model-id="${modelId}"] .thumbnail-item img`);
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) thumb.classList.add('active');
    });
}

// Function to change video editing image
function changeVideoImage(src) {
    const mainImage = document.getElementById('mainVideoImage');
    if (mainImage) mainImage.src = src;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.video-gallery .thumbnail-item img');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) thumb.classList.add('active');
    });
}

// Initialize video gallery
function initVideoGallery() {
    const mainImage = document.querySelector('#mainVideoImage');
    const thumbnails = document.querySelectorAll('.video-gallery .thumbnail-item img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}

// Function to change UI design image
function changeUIImage(src) {
    document.getElementById('mainUIImage').src = src;
    document.querySelectorAll('.thumbnails-row img').forEach(img => {
        img.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize UI gallery
function initUIGallery() {
    const mainImage = document.querySelector('#mainUIImage');
    const thumbnails = document.querySelectorAll('.ui-design-section .thumbnail-item img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}

// 添加滾動漸現效果
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
    createMouseFollower();
    initModGallery();
    initParallaxEffect();
    initScrollProgress();
    initTimelineAnimation();
    initImageModal();
    enhanceThemeToggle();
    initBackToTop();
    initSectionEffects();
    initVideoGallery();
    initUIGallery();
    initScrollAnimations();
    
    // 為標題添加打字機效果
    const welcomeText = document.querySelector('.about-content h2');
    if (welcomeText) {
        typeWriter(welcomeText, welcomeText.textContent);
    }
    
    // Initialize model overview gallery
    const overviewThumbnails = document.querySelectorAll('.model-overview .thumbnail-item img');
    overviewThumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => changeMainOverviewImage(thumb.src));
    });
    
    // Initialize individual model galleries
    document.querySelectorAll('.model-item').forEach((item, index) => {
        item.setAttribute('data-model-id', index + 1);
        const thumbnails = item.querySelectorAll('.thumbnail-item img');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => changeMainModelImage(thumb.src, index + 1));
        });
    });
});

// Dynamic Image Sizing System
class ImageSizeController {
    constructor() {
        this.sizes = ['small', 'medium', 'large', 'wide', 'square', 'portrait', 'auto'];
        this.sizeLabels = {
            small: 'S',
            medium: 'M', 
            large: 'L',
            wide: 'W',
            square: '□',
            portrait: 'P',
            auto: 'A'
        };
        this.currentSizes = new Map();
        this.init();
    }

    init() {
        // Convert existing main-image containers to the new system
        document.querySelectorAll('.main-image').forEach(container => {
            this.setupImageContainer(container);
        });
    }

    setupImageContainer(container, defaultSize = 'medium') {
        const id = container.id || `img-container-${Date.now()}`;
        container.id = id;
        
        // Add container classes
        container.classList.add('image-container');
        container.classList.add(`size-${defaultSize}`);
        this.currentSizes.set(id, defaultSize);

        // Create size controls
        const sizeControls = document.createElement('div');
        sizeControls.className = 'size-controls';
        
        this.sizes.forEach(size => {
            const btn = document.createElement('button');
            btn.className = 'size-btn';
            btn.textContent = this.sizeLabels[size];
            btn.title = `Switch to ${size} size`;
            if (size === defaultSize) btn.classList.add('active');
            
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.changeSize(id, size);
            });
            
            sizeControls.appendChild(btn);
        });

        // Create size indicator
        const sizeIndicator = document.createElement('div');
        sizeIndicator.className = 'size-indicator';
        sizeIndicator.textContent = this.getSizeDisplayName(defaultSize);

        // Add controls to container
        container.appendChild(sizeControls);
        container.appendChild(sizeIndicator);

        // Auto-detect optimal size based on image dimensions
        const img = container.querySelector('img');
        if (img) {
            this.autoDetectSize(container, img);
        }
    }

    changeSize(containerId, newSize) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const oldSize = this.currentSizes.get(containerId);
        
        // Remove old size class
        container.classList.remove(`size-${oldSize}`);
        
        // Add new size class
        container.classList.add(`size-${newSize}`);
        
        // Update current size
        this.currentSizes.set(containerId, newSize);

        // Update active button
        const buttons = container.querySelectorAll('.size-btn');
        buttons.forEach((btn, index) => {
            btn.classList.toggle('active', this.sizes[index] === newSize);
        });

        // Update indicator
        const indicator = container.querySelector('.size-indicator');
        if (indicator) {
            indicator.textContent = this.getSizeDisplayName(newSize);
        }

        // Add animation effect
        container.style.transform = 'scale(0.98)';
        setTimeout(() => {
            container.style.transform = 'scale(1)';
        }, 150);
    }

    autoDetectSize(container, img) {
        const detectOptimalSize = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            let optimalSize = 'medium';

            if (aspectRatio > 2.2) {
                optimalSize = 'wide';
            } else if (aspectRatio > 1.6) {
                optimalSize = 'large';
            } else if (aspectRatio > 1.2) {
                optimalSize = 'medium';
            } else if (aspectRatio > 0.9) {
                optimalSize = 'square';
            } else if (aspectRatio < 0.8) {
                optimalSize = 'portrait';
            }

            // Check image dimensions
            if (img.naturalWidth < 400 || img.naturalHeight < 300) {
                optimalSize = 'small';
            }

            this.changeSize(container.id, optimalSize);
        };

        if (img.complete) {
            detectOptimalSize();
        } else {
            img.addEventListener('load', detectOptimalSize);
        }
    }

    getSizeDisplayName(size) {
        const names = {
            small: 'Small',
            medium: 'Medium',
            large: 'Large', 
            wide: 'Wide',
            square: 'Square',
            portrait: 'Portrait',
            auto: 'Auto'
        };
        return names[size] || size;
    }

    // Method to add new image containers dynamically
    addImageContainer(container, defaultSize = 'medium') {
        this.setupImageContainer(container, defaultSize);
    }
}

// Initialize the image size controller
const imageSizeController = new ImageSizeController();

// Enhanced image change functions with size detection
function changeVideoImageWithSize(src) {
    const mainImage = document.getElementById('mainVideoImage');
    if (mainImage) {
        // Add loading animation
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        // Update active thumbnail
        document.querySelectorAll('#video-editing .thumbnail-item img').forEach(thumb => {
            thumb.parentElement.classList.remove('active');
            if (thumb.src === src) {
                thumb.parentElement.classList.add('active');
            }
        });
    }
}

function changeUIImageWithSize(src) {
    const mainImage = document.getElementById('mainUIImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        document.querySelectorAll('#ui-design .thumbnail-item img').forEach(thumb => {
            thumb.parentElement.classList.remove('active');
            if (thumb.src === src) {
                thumb.parentElement.classList.add('active');
            }
        });
    }
}

// Additional sizing-aware image change functions
function changePropertyTycoonImageWithSize(src) {
    const mainImage = document.getElementById('mainPropertyTycoonImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        document.querySelectorAll('#scene-design .thumbnail-item img').forEach(thumb => {
            thumb.parentElement.classList.remove('active');
            if (thumb.src === src) {
                thumb.parentElement.classList.add('active');
            }
        });
    }
}

function changeMainImageWithSize(src) {
    const mainImage = document.getElementById('mainGTAImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        document.querySelectorAll('#scene-design-vm .thumbnail-item img').forEach(thumb => {
            thumb.parentElement.classList.remove('active');
            if (thumb.src === src) {
                thumb.parentElement.classList.add('active');
            }
        });
    }
}

function changeAnimationImageWithSize(src) {
    const mainImage = document.getElementById('mainAnimationImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        document.querySelectorAll('#animation .thumbnail-item img').forEach(thumb => {
            thumb.parentElement.classList.remove('active');
            if (thumb.src === src) {
                thumb.parentElement.classList.add('active');
            }
        });
    }
}

function changeMainOverviewImageWithSize(src) {
    const mainImage = document.getElementById('mainOverviewImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        document.querySelectorAll('#modeling .thumbnail-item img').forEach(thumb => {
            thumb.parentElement.classList.remove('active');
            if (thumb.src === src) {
                thumb.parentElement.classList.add('active');
            }
        });
    }
}

function changeGameImageWithSize(src) {
    const mainImage = document.getElementById('mainGameImage');
    if (mainImage) {
        // Add loading animation
        mainImage.style.opacity = '0.5';
        mainImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
            
            // Auto-detect optimal size for new image
            imageSizeController.autoDetectSize(mainImage.parentElement, mainImage);
        }, 150);
        
        // Update active thumbnail
        document.querySelectorAll('#scene-design .thumbnail-item img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === src) {
                thumb.classList.add('active');
            }
        });
    }
}

// Initialize size controllers for all existing image containers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Setup any additional image containers that weren't caught in the initial setup
    document.querySelectorAll('.main-image:not(.image-container)').forEach(container => {
        imageSizeController.setupImageContainer(container);
    });
});