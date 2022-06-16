//This is an already given file not written by me and this is going to handle our AJAX requests to add a post for deleted items
//in our ToDo application.
$(document).ready(function() {

    $('form').on('submit', function() {

        var item = $('form input');
        var todo = { item: item.val() };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function() {
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                location.reload();
            }
        });
    });

});