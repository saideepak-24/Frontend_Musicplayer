class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.currentSongIndex = 0;
        this.isPlaying = false;
        this.isShuffled = false;
        this.isAutoplay = false;
        this.playlist = [];
        this.shuffledPlaylist = [];
        this.previousVolume = 0.5; 
        this.initializePlaylist();
        this.setupEventListeners();
        this.loadSong(0);
    }
    
    initializePlaylist() {
        this.playlist = [
            {
                title: "Moonlight Sonata",
                artist: "Ludwig van Beethoven",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Für Elise",
                artist: "Ludwig van Beethoven",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Symphony No. 5",
                artist: "Ludwig van Beethoven",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "The Four Seasons",
                artist: "Antonio Vivaldi",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Canon in D",
                artist: "Johann Pachelbel",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Claire de Lune",
                artist: "Claude Debussy",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Nocturne Op. 9",
                artist: "Frédéric Chopin",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Swan Lake",
                artist: "Pyotr Ilyich Tchaikovsky",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "The Nutcracker",
                artist: "Pyotr Ilyich Tchaikovsky",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Eine Kleine Nachtmusik",
                artist: "Wolfgang Amadeus Mozart",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Symphony No. 40",
                artist: "Wolfgang Amadeus Mozart",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Air on the G String",
                artist: "Johann Sebastian Bach",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Toccata and Fugue",
                artist: "Johann Sebastian Bach",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Take Five",
                artist: "Dave Brubeck Quartet",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "So What",
                artist: "Miles Davis",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Blue in Green",
                artist: "Miles Davis",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Giant Steps",
                artist: "John Coltrane",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "My Favorite Things",
                artist: "John Coltrane",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "What a Wonderful World",
                artist: "Louis Armstrong",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "The Girl from Ipanema",
                artist: "Stan Getz",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Fly Me to the Moon",
                artist: "Frank Sinatra",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "The Way You Look Tonight",
                artist: "Frank Sinatra",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Summertime",
                artist: "Ella Fitzgerald",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Blue Moon",
                artist: "Billie Holiday",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Strange Fruit",
                artist: "Billie Holiday",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Georgia on My Mind",
                artist: "Ray Charles",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Bohemian Rhapsody",
                artist: "Queen",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Stairway to Heaven",
                artist: "Led Zeppelin",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Hotel California",
                artist: "Eagles",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Imagine",
                artist: "John Lennon",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Yesterday",
                artist: "The Beatles",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Hey Jude",
                artist: "The Beatles",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Let It Be",
                artist: "The Beatles",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Sweet Child O' Mine",
                artist: "Guns N' Roses",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "November Rain",
                artist: "Guns N' Roses",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Nothing Else Matters",
                artist: "Metallica",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Enter Sandman",
                artist: "Metallica",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-37.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Smells Like Teen Spirit",
                artist: "Nirvana",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Come As You Are",
                artist: "Nirvana",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Clocks",
                artist: "Coldplay",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-40.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Yellow",
                artist: "Coldplay",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-41.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Fix You",
                artist: "Coldplay",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-42.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Viva la Vida",
                artist: "Coldplay",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-43.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Paradise",
                artist: "Coldplay",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-44.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Radioactive",
                artist: "Imagine Dragons",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-45.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Demons",
                artist: "Imagine Dragons",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-46.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Believer",
                artist: "Imagine Dragons",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-47.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Thunder",
                artist: "Imagine Dragons",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-48.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Shake It Off",
                artist: "Taylor Swift",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-49.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Blank Space",
                artist: "Taylor Swift",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-50.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Bad Blood",
                artist: "Taylor Swift",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-51.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Style",
                artist: "Taylor Swift",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-52.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Acoustic Breeze",
                artist: "Benjamin Tissot",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-53.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Creative Minds",
                artist: "Benjamin Tissot",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-54.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Summer",
                artist: "Benjamin Tissot",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-55.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Happy Rock",
                artist: "Benjamin Tissot",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-56.mp3",
                cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Jazz Comedy",
                artist: "Benjamin Tissot",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-57.mp3",
                cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center"
            },
            {
                title: "Ukulele",
                artist: "Benjamin Tissot",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-58.mp3",
                cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
            }
        ];
        
        this.shuffledPlaylist = [...this.playlist];
        this.renderPlaylist();
    }
    
    setupEventListeners() {
        const playBtn = document.getElementById('play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', () => this.togglePlay());
        }
        const albumCover = document.getElementById('album-cover');
        if (albumCover) {
            albumCover.addEventListener('click', () => this.togglePlay());
        }
        const playOverlay = document.getElementById('play-overlay');
        if (playOverlay) {
            playOverlay.addEventListener('click', () => this.togglePlay());
        }
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousSong());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSong());
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.addEventListener('click', (e) => this.setProgress(e));
            progressBar.addEventListener('mousemove', (e) => this.updateProgressTooltip(e));
            progressBar.addEventListener('mouseleave', () => this.hideProgressTooltip());
        }
        const volumeSlider = document.getElementById('volume-slider');
        const volumeMuteBtn = document.getElementById('volume-mute-btn');
        
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
            volumeSlider.addEventListener('mousemove', (e) => this.updateVolumeTooltip(e));
            volumeSlider.addEventListener('mouseleave', () => this.hideVolumeTooltip());
        }
        
        if (volumeMuteBtn) {
            volumeMuteBtn.addEventListener('click', () => this.toggleMute());
        }
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.handleSongEnd());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('error', (e) => this.handleAudioError(e));
        const autoplayToggle = document.getElementById('autoplay-toggle');
        const shuffleToggle = document.getElementById('shuffle-toggle');
        
        if (autoplayToggle) {
            autoplayToggle.addEventListener('change', (e) => {
                this.isAutoplay = e.target.checked;
            });
        }
        
        if (shuffleToggle) {
            shuffleToggle.addEventListener('change', (e) => {
                this.isShuffled = e.target.checked;
                this.shufflePlaylist();
            });
        }
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    loadSong(index) {
        try {
            const currentPlaylist = this.isShuffled ? this.shuffledPlaylist : this.playlist;
            if (index < 0 || index >= currentPlaylist.length) {
                console.error('Invalid song index:', index);
                return;
            }
            
            const song = currentPlaylist[index];
            this.audio.src = song.src;
            this.updateSongInfo(song);
            this.updatePlaylistUI();
            this.audio.load();
        } catch (error) {
            console.error('Error loading song:', error);
        }
    }
    
    updateSongInfo(song) {
        const songTitle = document.getElementById('song-title');
        const artistName = document.getElementById('artist-name');
        const albumCover = document.getElementById('album-cover');
        if (songTitle) {
            songTitle.style.opacity = '0';
            setTimeout(() => {
                songTitle.textContent = song.title;
                songTitle.style.opacity = '1';
                this.addScrollingText(songTitle, song.title);
            }, 150);
        }
        
        if (artistName) {
            artistName.style.opacity = '0';
            setTimeout(() => {
                artistName.textContent = song.artist;
                artistName.style.opacity = '1';
                this.addScrollingText(artistName, song.artist);
            }, 200);
        }
        
        if (albumCover) {
            albumCover.style.opacity = '0';
            setTimeout(() => {
                albumCover.src = song.cover;
                albumCover.style.opacity = '1';
            }, 100);
        }
        document.title = `${song.title} - ${song.artist} | Music Player`;
        this.showSongInfoNotification(song);
    }
    
    addScrollingText(element, text) {
        element.classList.remove('scrolling-text');
        if (text.length > 20) {
            element.classList.add('scrolling-text');
            element.setAttribute('title', text); 
        } else {
            element.removeAttribute('title');
        }
    }
    
    showSongInfoNotification(song) {
        const notification = document.createElement('div');
        notification.className = 'song-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-music"></i>
                <div class="notification-text">
                    <strong>${song.title}</strong>
                    <span>${song.artist}</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    async play() {
        try {
            this.isPlaying = true;
            this.updatePlayButton();
            this.updateBackgroundState();
            await this.audio.play();
        } catch (error) {
            console.error('Error playing audio:', error);
            this.isPlaying = false;
            this.updatePlayButton();
            this.updateBackgroundState();
        }
    }
    
    pause() {
        this.isPlaying = false;
        this.audio.pause();
        this.updatePlayButton();
        this.updateBackgroundState();
    }
    
    updatePlayButton() {
        const playBtn = document.getElementById('play-btn');
        if (!playBtn) return;
        
        const playIcon = playBtn.querySelector('i');
        if (playIcon) {
            if (this.isPlaying) {
                playIcon.className = 'fas fa-pause';
            } else {
                playIcon.className = 'fas fa-play';
            }
        }
    }
    
    previousSong() {
        const currentPlaylist = this.isShuffled ? this.shuffledPlaylist : this.playlist;
        this.currentSongIndex--;
        if (this.currentSongIndex < 0) {
            this.currentSongIndex = currentPlaylist.length - 1;
        }
        this.loadSong(this.currentSongIndex);
        if (this.isPlaying) {
            this.play();
        }
    }
    
    nextSong() {
        const currentPlaylist = this.isShuffled ? this.shuffledPlaylist : this.playlist;
        this.currentSongIndex++;
        if (this.currentSongIndex >= currentPlaylist.length) {
            this.currentSongIndex = 0;
        }
        this.loadSong(this.currentSongIndex);
        if (this.isPlaying) {
            this.play();
        }
    }
    
    updateProgress() {
        const { currentTime, duration } = this.audio;
        if (isNaN(duration) || duration === 0) return;
        
        const progressPercent = (currentTime / duration) * 100;
        const progressBar = document.getElementById('progress');
        const progressHandle = document.getElementById('progress-handle');
        
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }
        
        if (progressHandle) {
            progressHandle.style.left = `${progressPercent}%`;
        }
        const currentTimeDisplay = document.getElementById('current-time');
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent = this.formatTime(currentTime);
        }
        const progressTooltip = document.getElementById('progress-tooltip');
        if (progressTooltip && progressTooltip.style.opacity !== '0') {
            progressTooltip.textContent = this.formatTime(currentTime);
            progressTooltip.style.left = `${progressPercent}%`;
        }
    }
    
    updateDuration() {
        const durationDisplay = document.getElementById('duration');
        if (durationDisplay) {
            durationDisplay.textContent = this.formatTime(this.audio.duration);
        }
    }
    
    setProgress(e) {
        const { duration } = this.audio;
        if (isNaN(duration) || duration === 0) return;
        
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * duration;
        
        this.audio.currentTime = Math.max(0, Math.min(newTime, duration));
    }
    
    setVolume(value) {
        const volume = Math.max(0, Math.min(100, value)) / 100;
        this.audio.volume = volume;
        if (volume > 0) {
            this.previousVolume = volume;
        }
        this.updateVolumeIcon(volume);
        const volumeTooltip = document.getElementById('volume-tooltip');
        if (volumeTooltip) {
            volumeTooltip.textContent = `${Math.round(volume * 100)}%`;
        }
    }
    
    updateVolumeIcon(volume) {
        const volumeIcon = document.getElementById('volume-icon');
        if (volumeIcon) {
            if (volume == 0) {
                volumeIcon.className = 'fas fa-volume-mute';
            } else if (volume < 0.3) {
                volumeIcon.className = 'fas fa-volume-down';
            } else if (volume < 0.7) {
                volumeIcon.className = 'fas fa-volume-up';
            } else {
                volumeIcon.className = 'fas fa-volume-up';
            }
        }
    }
    
    toggleMute() {
        if (this.audio.volume > 0) {
            this.previousVolume = this.audio.volume;
            this.audio.volume = 0;
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) {
                volumeSlider.value = 0;
            }
        } else {
            const volumeToRestore = this.previousVolume || 0.5;
            this.audio.volume = volumeToRestore;
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) {
                volumeSlider.value = volumeToRestore * 100;
            }
        }
        
        this.updateVolumeIcon(this.audio.volume);
    }
    
    updateProgressTooltip(e) {
        const progressBar = document.getElementById('progress-bar');
        const tooltip = document.getElementById('progress-tooltip');
        const handle = document.getElementById('progress-handle');
        
        if (!progressBar || !tooltip || !handle) return;
        
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(100, (clickX / width) * 100));
        const time = (percentage / 100) * this.audio.duration;
        
        tooltip.textContent = this.formatTime(time);
        tooltip.style.left = `${percentage}%`;
        tooltip.style.opacity = '1';
        handle.style.left = `${percentage}%`;
        handle.style.opacity = '1';
    }
    
    hideProgressTooltip() {
        const tooltip = document.getElementById('progress-tooltip');
        const handle = document.getElementById('progress-handle');
        
        if (tooltip) tooltip.style.opacity = '0';
        if (handle) handle.style.opacity = '0';
    }
    
    updateVolumeTooltip(e) {
        const volumeSlider = document.getElementById('volume-slider');
        const tooltip = document.getElementById('volume-tooltip');
        
        if (!volumeSlider || !tooltip) return;
        
        const rect = volumeSlider.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(100, (clickX / width) * 100));
        
        tooltip.textContent = `${Math.round(percentage)}%`;
        tooltip.style.left = `${percentage}%`;
        tooltip.style.opacity = '1';
    }
    
    hideVolumeTooltip() {
        const tooltip = document.getElementById('volume-tooltip');
        if (tooltip) tooltip.style.opacity = '0';
    }
    
    updateBackgroundState() {
        const musicPlayer = document.querySelector('.music-player');
        if (musicPlayer) {
            if (this.isPlaying) {
                musicPlayer.classList.add('playing');
            } else {
                musicPlayer.classList.remove('playing');
            }
        }
    }
    
    handleSongEnd() {
        if (this.isAutoplay) {
            this.nextSong();
        } else {
            this.pause();
        }
    }
    
    handleAudioError(e) {
        console.error('Audio error:', e);
        this.isPlaying = false;
        this.updatePlayButton();
    }
    
    shufflePlaylist() {
        if (this.isShuffled) {
            this.shuffledPlaylist = [...this.playlist];
            for (let i = this.shuffledPlaylist.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.shuffledPlaylist[i], this.shuffledPlaylist[j]] = 
                [this.shuffledPlaylist[j], this.shuffledPlaylist[i]];
            }
        } else {
            this.shuffledPlaylist = [...this.playlist];
        }
        this.renderPlaylist();
    }
    
    renderPlaylist() {
        const playlistContainer = document.getElementById('playlist');
        if (!playlistContainer) return;
        
        const currentPlaylist = this.isShuffled ? this.shuffledPlaylist : this.playlist;
        
        playlistContainer.innerHTML = '';
        
        currentPlaylist.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.className = 'playlist-item';
            const isCurrentSong = this.isShuffled ? 
                this.shuffledPlaylist[index] === this.playlist[this.currentSongIndex] :
                index === this.currentSongIndex;
                
            if (isCurrentSong) {
                playlistItem.classList.add('active');
            }
            
            playlistItem.innerHTML = `
                <div class="playlist-item-content">
                    <div class="playlist-item-info">
                        <h4>${song.title}</h4>
                        <p>${song.artist}</p>
                    </div>
                    <div class="playlist-item-duration">
                        <i class="fas fa-music"></i>
                    </div>
                </div>
            `;
            
            playlistItem.addEventListener('click', () => {
                const targetIndex = this.isShuffled ? 
                    this.shuffledPlaylist.indexOf(song) : 
                    index;
                    
                this.currentSongIndex = targetIndex;
                this.loadSong(targetIndex);
                if (this.isPlaying) {
                    this.play();
                }
            });
            
            playlistContainer.appendChild(playlistItem);
        });
    }
    
    updatePlaylistUI() {
        const playlistItems = document.querySelectorAll('.playlist-item');
        const currentPlaylist = this.isShuffled ? this.shuffledPlaylist : this.playlist;
        
        playlistItems.forEach((item, index) => {
            item.classList.remove('active');
            const isCurrentSong = this.isShuffled ? 
                currentPlaylist[index] === this.playlist[this.currentSongIndex] :
                index === this.currentSongIndex;
                
            if (isCurrentSong) {
                item.classList.add('active');
            }
        });
    }
    
    handleKeyboard(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlay();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.previousSong();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextSong();
                break;
            case 'ArrowUp':
                e.preventDefault();
                const currentVolume = this.audio.volume * 100;
                const newVolumeUp = Math.min(100, currentVolume + 10);
                const volumeSlider = document.getElementById('volume-slider');
                if (volumeSlider) {
                    volumeSlider.value = newVolumeUp;
                }
                this.setVolume(newVolumeUp);
                break;
            case 'ArrowDown':
                e.preventDefault();
                const currentVol = this.audio.volume * 100;
                const newVolumeDown = Math.max(0, currentVol - 10);
                const volSlider = document.getElementById('volume-slider');
                if (volSlider) {
                    volSlider.value = newVolumeDown;
                }
                this.setVolume(newVolumeDown);
                break;
            case 'KeyM':
                e.preventDefault();
                this.toggleMute();
                break;
        }
    }
    
    formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0:00';
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.musicPlayer = new MusicPlayer();
        console.log('Music Player initialized successfully!');
    } catch (error) {
        console.error('Error initializing music player:', error);
        const musicPlayer = document.querySelector('.music-player');
        if (musicPlayer) {
            musicPlayer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #ff6b6b; margin-bottom: 20px;"></i>
                    <h2>Oops! Something went wrong</h2>
                    <p>The music player couldn't be loaded. Please refresh the page and try again.</p>
                    <button onclick="location.reload()" style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 20px;">
                        Refresh Page
                    </button>
                </div>
            `;
        }
    }
});
window.addEventListener('load', () => {
    const musicPlayer = document.querySelector('.music-player');
    if (musicPlayer) {
        musicPlayer.style.opacity = '0';
        musicPlayer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            musicPlayer.style.transition = 'all 0.5s ease';
            musicPlayer.style.opacity = '1';
            musicPlayer.style.transform = 'translateY(0)';
        }, 100);
    }
});
document.addEventListener('visibilitychange', () => {
    if (window.musicPlayer && document.hidden && window.musicPlayer.isPlaying) {
        window.musicPlayer.pause();
    }
}); 