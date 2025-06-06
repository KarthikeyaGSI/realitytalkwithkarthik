document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/podcast')
        .then(response => response.json())
        .then(data => {
            const episode = data[0]; // Since the JSON is an array with one episode
            document.getElementById('episode-title').textContent = episode.name;
            document.getElementById('episode-image').src = episode.images[0].url;
            document.getElementById('episode-image').alt = episode.name;
            document.getElementById('episode-description').innerHTML = episode.html_description;
            document.getElementById('episode-audio').querySelector('source').src = episode.audio_preview_url;
            document.getElementById('episode-audio').load(); // Reload audio element to apply new source
            document.getElementById('spotify-link').href = episode.external_urls.spotify;
            document.getElementById('substack-link').href = 'https://karthikeyathallapally.substack.com';
            document.getElementById('release-date').textContent = `Release Date: ${episode.release_date}`;
        })
        .catch(error => {
            console.error('Error fetching podcast data:', error);
            document.getElementById('episode-description').textContent = 'Failed to load episode details.';
        });
});
