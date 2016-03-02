var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();
});

function hello(){
  return 'hello world';
}

module.exports = {"hello": hello};

$(function(){
  var creating = new CreatePost();

  $(document).on('create:post', function(event, input){
    createThePost.click(input);
    console.log('I was clicked');
  });

});
