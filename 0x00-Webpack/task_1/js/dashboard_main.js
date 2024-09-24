import $ from 'jquery';
import _ from 'lodash';

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');


function updateCounter() {
    let counter = 0;
    function update() {
        counter += 1;
        $("p#count").text(`${counter} clicks on the button`);
    }
    return update;
}

const debouncedClicker = _.debounce(updateCounter(), 300);

$("button").on('click', debouncedClicker);
