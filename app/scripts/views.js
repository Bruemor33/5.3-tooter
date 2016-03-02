var $ = require('jquery');

function PostView(){
  $('body').append('<ul class="posts">');
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
};

global.PostView = PostView;

function CreatePost(){
  $('body').append('<button class="create-post">Click me</button>');
}

CreatePost.prototype.createThePost = function(create){
  window.promt(function(create){
    $('.create-post').append('<input></input>');
  })
}

global.CreatePost = CreatePost;
