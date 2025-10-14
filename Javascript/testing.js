            savePreference('darkBgColor', color);
        };

        lightModeButton.addEventListener('click', () => {
            applyLightMode(lightBgPicker.value);
            announceToScreenReader('Light mode activated');
        });

        darkModeButton.addEventListener('click', () => {
            applyDarkMode(darkBgPicker.value);
            announceToScreenReader('Dark mode activated');
        });

        lightBgPicker.addEventListener('change', (e) => {
            if (currentTheme === 'light') {
                applyLightMode(e.target.value);
            }
        });

        darkBgPicker.addEventListener('change', (e) => {
            if (currentTheme === 'dark') {
                applyDarkMode(e.target.value);
            }
        });

        // Text-to-Speech Functionality
        const speakButton = document.getElementById('speakButton');
        let isSpeaking = false;
        let speechSynthesis = window.speechSynthesis;

        const toggleSpeech = () => {
            if (isSpeaking) {
                speechSynthesis.cancel();
                speakButton.innerHTML = '🔊 <span class="sr-only">Read Aloud</span>';
                speakButton.setAttribute('aria-pressed', 'false');
                isSpeaking = false;
                announceToScreenReader('Speech stopped');
            } else {
                const textToSpeak = document.querySelector('main').innerText;
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                
                utterance.rate = 0.8;
                utterance.pitch = 1;
                utterance.volume = 1;
                
                utterance.onstart = () => {
                    speakButton.innerHTML = '⏸️ <span class="sr-only">Stop Reading</span>';
                    speakButton.setAttribute('aria-pressed', 'true');
                    isSpeaking = true;
                };
                
                utterance.onend = () => {
                    speakButton.innerHTML = '🔊 <span class="sr-only">Read Aloud</span>';
                    speakButton.setAttribute('aria-pressed', 'false');
                    isSpeaking = false;
                };
                
                speechSynthesis.speak(utterance);
                announceToScreenReader('Speech started');
            }
        };

        speakButton.addEventListener('click', toggleSpeech);

        // Search Functionality
        const searchForm = document.getElementById('siteSearchForm');
        const searchInput = document.getElementById('searchInput');

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                announceToScreenReader(`Searching for ${query}`);
                // Implement actual search functionality here
                console.log('Searching for:', query);
                // For demo purposes, we'll just highlight matching text
                highlightSearchResults(query);
            }
        });

        const highlightSearchResults = (query) => {
            const walker = document.createTreeWalker(
                document.querySelector('main'),
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            const textNodes = [];
            let node;
            while (node = walker.nextNode()) {
                textNodes.push(node);
            }

            textNodes.forEach(textNode => {
                if (textNode.textContent.toLowerCase().includes(query.toLowerCase())) {
                    const parent = textNode.parentNode;
                    const regex = new RegExp(`(${query})`, 'gi');
                    const highlightedText = textNode.textContent.replace(regex, '<mark>$1</mark>');
                    parent.innerHTML = parent.innerHTML.replace(textNode.textContent, highlightedText);
                }
            });

            announceToScreenReader(`Search completed for ${query}`);
        };

        // Live Video Controls
        const captionsBtn = document.getElementById('captionsBtn');
        const transcriptBtn = document.getElementById('transcriptBtn');
        const signLanguageBtn = document.getElementById('signLanguageBtn');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const liveCaptions = document.getElementById('liveCaptions');
        const transcriptPanel = document.getElementById('transcriptPanel');
        const liveVideoEmbed = document.getElementById('liveVideoEmbed');

        let captionsEnabled = true;
        let transcriptVisible = false;
        let signLanguageEnabled = false;

        // Captions Toggle
        captionsBtn.addEventListener('click', () => {
            captionsEnabled = !captionsEnabled;
            
            if (captionsEnabled) {
                liveCaptions.style.display = 'block';
                captionsBtn.classList.add('active');
                captionsBtn.setAttribute('aria-pressed', 'true');
                captionsBtn.innerHTML = '<i class="fas fa-closed-captioning" aria-hidden="true"></i><span>Captions ON</span>';
                announceToScreenReader('Captions enabled');
            } else {
                liveCaptions.style.display = 'none';
                captionsBtn.classList.remove('active');
                captionsBtn.setAttribute('aria-pressed', 'false');
                captionsBtn.innerHTML = '<i class="fas fa-closed-captioning" aria-hidden="true"></i><span>Captions OFF</span>';
                announceToScreenReader('Captions disabled');
            }
            
            savePreference('captionsEnabled', captionsEnabled);
        });

        // Transcript Toggle
        transcriptBtn.addEventListener('click', () => {
            transcriptVisible = !transcriptVisible;
            
            if (transcriptVisible) {
                transcriptPanel.classList.add('visible');
                transcriptBtn.classList.add('active');
                transcriptBtn.setAttribute('aria-pressed', 'true');
                transcriptBtn.innerHTML = '<i class="fas fa-file-text" aria-hidden="true"></i><span>Hide Transcript</span>';
                announceToScreenReader('Transcript panel opened');
            } else {
                transcriptPanel.classList.remove('visible');
                transcriptBtn.classList.remove('active');
                transcriptBtn.setAttribute('aria-pressed', 'false');
                transcriptBtn.innerHTML = '<i class="fas fa-file-text" aria-hidden="true"></i><span>Show Transcript</span>';
                announceToScreenReader('Transcript panel closed');
            }
            
            savePreference('transcriptVisible', transcriptVisible);
        });

        // Sign Language Toggle
        signLanguageBtn.addEventListener('click', () => {
            signLanguageEnabled = !signLanguageEnabled;
            
            if (signLanguageEnabled) {
                signLanguageBtn.classList.add('active');
                signLanguageBtn.setAttribute('aria-pressed', 'true');
                signLanguageBtn.innerHTML = '<i class="fas fa-hands" aria-hidden="true"></i><span>Sign Language ON</span>';
                announceToScreenReader('Sign language interpretation enabled');
                // In a real implementation, this would enable sign language overlay
            } else {
                signLanguageBtn.classList.remove('active');
                signLanguageBtn.setAttribute('aria-pressed', 'false');
                signLanguageBtn.innerHTML = '<i class="fas fa-hands" aria-hidden="true"></i><span>Sign Language OFF</span>';
                announceToScreenReader('Sign language interpretation disabled');
            }
            
            savePreference('signLanguageEnabled', signLanguageEnabled);
        });

        // Fullscreen Toggle
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                liveVideoEmbed.requestFullscreen().then(() => {
                    fullscreenBtn.innerHTML = '<i class="fas fa-compress" aria-hidden="true"></i><span>Exit Fullscreen</span>';
                    announceToScreenReader('Entered fullscreen mode');
                }).catch(err => {
                    console.error('Error attempting to enable fullscreen:', err);
                    announceToScreenReader('Could not enter fullscreen mode');
                });
            } else {
                document.exitFullscreen().then(() => {
                    fullscreenBtn.innerHTML = '<i class="fas fa-expand" aria-hidden="true"></i><span>Fullscreen</span>';
                    announceToScreenReader('Exited fullscreen mode');
                });
            }
        });

        // Live Caption Simulation
        const simulateLiveCaptions = () => {
            const captionTexts = [
                "Welcome to today's cybersecurity briefing. We'll be discussing the latest threats and security updates.",
                "Today's agenda includes ransomware prevention, phishing awareness, and secure password practices.",
                "Remember that all accessibility features are available including captions, transcripts, and sign language.",
                "We encourage questions through the chat function, which is also accessible via screen readers.",
                "Let's begin with the current threat landscape and recent security incidents.",
                "Multi-factor authentication remains one of the most effective security measures available.",
                "Regular software updates are crucial for maintaining system security and preventing vulnerabilities."
            ];

            let currentIndex = 0;
            const captionText = document.getElementById('captionText');
            const transcriptContent = document.getElementById('transcriptContent');

            setInterval(() => {
                if (captionsEnabled && currentIndex < captionTexts.length) {
                    const timestamp = new Date().toLocaleTimeString();
                    const newCaption = captionTexts[currentIndex];
                    
                    // Update live captions
                    captionText.textContent = newCaption;
                    
                    // Add to transcript
                    const transcriptEntry = document.createElement('p');
                    transcriptEntry.innerHTML = `<strong>[${timestamp}]</strong> ${newCaption}`;
                    transcriptContent.appendChild(transcriptEntry);
                    
                    // Auto-scroll transcript
                    if (transcriptVisible) {
                        transcriptContent.scrollTop = transcriptContent.scrollHeight;
                    }
                    
                    currentIndex = (currentIndex + 1) % captionTexts.length;
                }
            }, 8000); // Update every 8 seconds
        };

        // Live Status Simulation
        const updateLiveStatus = () => {
            const statusDot = document.getElementById('liveStatusDot');
            const statusText = document.getElementById('liveStatusText');
            const isLive = Math.random() > 0.1; // 90% chance of being live
            
            if (isLive) {
                statusDot.classList.add('live');
                statusText.textContent = 'LIVE - Cybersecurity Alert Briefing';
            } else {
                statusDot.classList.remove('live');
                statusText.textContent = 'OFFLINE - Next briefing in 2 hours';
            }
        };

        // Keyboard Navigation Enhancement
        document.addEventListener('keydown', (e) => {
            // Alt + C for captions
            if (e.altKey && e.key === 'c') {
                e.preventDefault();
                captionsBtn.click();
            }
            
            // Alt + T for transcript
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                transcriptBtn.click();
            }
            
            // Alt + F for fullscreen
            if (e.altKey && e.key === 'f') {
                e.preventDefault();
                fullscreenBtn.click();
            }
            
            // Alt + S for speech
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                speakButton.click();
            }
        });

        // Load Saved Preferences
        const loadPreferences = () => {
            // Font size
            const savedFontSize = getPreference('fontSize', '16');
            updateFontSize(savedFontSize);
            
            // Text color
            const savedTextColor = getPreference('textColor', '#333333');
            textColorPicker.value = savedTextColor;
            updateTextColor(savedTextColor);
            
            // Theme
            const savedTheme = getPreference('theme');
            if (savedTheme === 'light-mode') {
                const savedLightBg = getPreference('lightBgColor', '#F5F5DC');
                lightBgPicker.value = savedLightBg;
                applyLightMode(savedLightBg);
            } else if (savedTheme === 'dark-mode') {
                const savedDarkBg = getPreference('darkBgColor', '#1E1E1E');
                darkBgPicker.value = savedDarkBg;
                applyDarkMode(savedDarkBg);
            }
            
            // Video preferences
            const savedCaptions = getPreference('captionsEnabled', 'true') === 'true';
            if (!savedCaptions) {
                captionsBtn.click();
            }
            
            const savedTranscript = getPreference('transcriptVisible', 'false') === 'true';
            if (savedTranscript) {
                transcriptBtn.click();
            }
            
            const savedSignLanguage = getPreference('signLanguageEnabled', 'false') === 'true';
            if (savedSignLanguage) {
                signLanguageBtn.click();
            }
        };

        // Initialize Application
        const initializeApp = () => {
            loadPreferences();
            simulateLiveCaptions();
            updateLiveStatus();
            
            // Update live status every 30 seconds
            setInterval(updateLiveStatus, 30000);
            
            // Announce page load completion
            setTimeout(() => {
                announceToScreenReader('Page loaded successfully. All accessibility features are available.');
            }, 1000);
        };

        // Error Handling
        window.addEventListener('error', (e) => {
            console.error('Application error:', e.error);
            announceToScreenReader('An error occurred. Please refresh the page if needed.');
        });

        // Handle fullscreen changes
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand" aria-hidden="true"></i><span>Fullscreen</span>';
            }
        });

        // Handle visibility changes (for live status)
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                updateLiveStatus();
            }
        });

        // Initialize when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }

        // Service Worker Registration (for offline functionality)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    </script>
</body>
</html>
