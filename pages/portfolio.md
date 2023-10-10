---
title: Translation Portfolio
permalink: /portfolio/
---

{% assign videos = site.data.videos %}
{% assign ccs    = site.data.cc %}
<script src="{{ base.url | prepend: site.url }}/assets/scripts/toggleSpoiler.js"></script>

## Vtuber clips/切り抜き

<div class="spoiler" id="spoiler-1">
    <div id="spoiler-content" class="spoiler-content" style="display: none;">
        <!-- Add your images, videos, or embeds here -->
        <div class="video-grid">
        {% for video in videos %}
            {% capture video_id %}{{ video.url | split:'v=' | last }}{% endcapture %}
            <div class="video-container">
                <a href="{{ video.url }}" target="_blank">
                    <!-- <img src="https://img.youtube.com/vi/KOlsL3g_dwk/mqdefault.jpg" alt="{{ video.title }}">-->
                    <img src="https://img.youtube.com/vi/{{ video_id }}/mqdefault.jpg" alt="{{ video.title }}">
                </a>
                <!--{{ video.frame }}-->
            </div>
        {% endfor %}
        </div>
    </div>
    <div class="spoiler-button-container">
        <button class="spoiler-button" onclick="toggleSpoiler(1)">Toggle</button>
    </div>
</div>

---

## Official Closed Captions/公式字幕

<div class="spoiler" id="spoiler-2">
    <div id="spoiler-content" class="spoiler-content" style="display: none;">
        <!-- Add your images, videos, or embeds here -->
        <div class="video-grid">
        {% for video in ccs %}
            {% capture video_id %}{{ video.url | split:'v=' | last }}{% endcapture %}
            <div class="video-container">
                <a href="{{ video.url }}" target="_blank">
                    <!-- <img src="https://img.youtube.com/vi/KOlsL3g_dwk/mqdefault.jpg" alt="{{ video.title }}">-->
                    <img src="https://img.youtube.com/vi/{{ video_id }}/mqdefault.jpg" alt="{{ video.title }}">
                </a>
                <!--{{ video.frame }}-->
            </div>
        {% endfor %}
        </div>
    </div>
    <div class="spoiler-button-container">
        <button class="spoiler-button" onclick="toggleSpoiler(2)">Toggle</button>
    </div>
</div>

---

## Lyrics/歌詞

<div class="spoiler" id="spoiler-3">
    <div id="spoiler-content" class="spoiler-content" style="display: none;">
        <!-- Add your images, videos, or embeds here -->
        <a href="{{ site.baseurl }}{% link _categories/trans.md %}" target="_blank" class="link">
            All Lyrics
        </a>
    </div>
    <div class="spoiler-button-container">
        <button class="spoiler-button" onclick="toggleSpoiler(3)">Toggle</button>
    </div>
</div>
