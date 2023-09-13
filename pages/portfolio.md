---
title: Translation Portfolio
permalink: /portfolio/
---

{% assign videos = site.data.videos %}

## Vtuber clips

<div class="spoiler">
    <div id="spoiler-content" class="spoiler-content" style="display: none;">
        <!-- Add your images, videos, or embeds here -->
        <div class="video-grid">
        {% for video in videos %}
                <div class="video-container">
                    {{ video.frame }}
                </div>
        {% endfor %}
        </div>
    </div>
    <button class="spoiler-button" onclick="toggleSpoiler()">Show</button>
</div>

<script>
   function toggleSpoiler() {
       var spoilerContent = document.getElementById('spoiler-content');
       if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
           spoilerContent.style.display = 'block';
       } else {
           spoilerContent.style.display = 'none';
       }
   }
</script>

<style>
    .video-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .video-container {
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }
    .video-container iframe {
        max-width: 100%;
        height: auto;
    }
</style>
