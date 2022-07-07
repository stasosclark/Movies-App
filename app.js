$("#submit").on('click', function(e) {
    e.preventDefault();
    let movieTitle = $("#movie-title").val();
    if (movieTitle.length > 0) {
    let rating = $('#rating').val();
    let newLI = $('<li>');
    $('#results').append(newLI)
    newLI.append(movieTitle + ' ' + rating + ' ');
    let deleteBtn = $('<button>');
    deleteBtn.text('Remove')
    newLI.append(deleteBtn);
    deleteBtn.on('click', function(e) {
        e.target.parentElement.remove();
    })
    } else {
        alert("Please enter a movie title!")
    }
})