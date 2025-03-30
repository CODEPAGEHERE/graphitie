document.addEventListener('DOMContentLoaded', function () {
    fetch('cv.json')
        .then(response => response.json())
        .then(data => {
            const cvButton = document.getElementById('download-cv');
            cvButton.href = data.cv.download_link;
            cvButton.setAttribute('download', '');

            // Add click event to show toast
            cvButton.addEventListener('click', function () {
                $('#cv-toast').toast('show');
            });
        })
        .catch(error => console.error('Error fetching CV data:', error));
});
