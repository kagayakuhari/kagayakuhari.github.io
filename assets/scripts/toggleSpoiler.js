function toggleSpoiler(index) {
    var spoilerContent = document.getElementById('spoiler-' + index).getElementsByClassName('spoiler-content')[0];
    if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
        spoilerContent.style.display = 'block';
    } else {
        spoilerContent.style.display = 'none';
    }
}
