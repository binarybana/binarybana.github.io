+++
title = "So you want to be a (Python) web programmer?"
permalink = "/2012/04/so-you-want-to-be-python-web-programmer.html"
date = 2012-04-05T05:21:00.002000Z
updated = "2012-04-06 16:40:15"

[blogger]
siteid = "15125061"
postid = "5710149816950235634"
comments = "1"

[author]
name = "Jason Knight"
url = "https://plus.google.com/102340116383554399495?rel=author"
image = "//lh5.googleusercontent.com/-7hdboMymj1U/AAAAAAAAAAI/AAAAAAAAJXI/7HfgmM-lRPQ/s512-c/photo.jpg"

+++

<div class="css-full-post-content js-full-post-content">
<span style="background-color: rgba(255, 255, 255, 0.917969);">I wrote this post to a friend of mine who is looking to get into web programming. After sending a reply to some of his questions, I'm going to massage this into a blog post so someone out there may get some use out of my (humble) opinions on web programming. This post assumes that you are looking to use Python (a wise choice given its rising popularity, ease of learning, and broad applicability), and that you don't know much beyond that.&nbsp;</span><br /><div style="background-color: rgba(255, 255, 255, 0.917969);"><br /><h4>Level 1</h4>If you look at the python documentation, they cover some of the historical methods of web programming <a href="http://docs.python.org/howto/webservers.html">[1]</a>. They explain that there are many ways to write (and run) python programs on the server. Historically the first was CGI, but this is typically the slowest, most inconvenient, and the most insecure method (not inherently insecure but because it is easy to shoot yourself in the foot). More commonly, now there are *web frameworks* that help you to handle the things common in web programming such as handling form data, headers, etc... The most popular examples of Python web frameworks are Django, TurboGears, Web.py, Flask etc..<br /><br />All of the above requires a front facing&nbsp;web server (such as Apache or Nginx) that passes requests to some Python based backend. This is ideal for industrial strength applications but for simpler projects people began realizing: "If I am going to be writing my entire application in Python anyway, then why do I need a server in front of my application at all? So some people have written python *servers* such as CherryPy and Tornado that are very simple to use (especially CherryPy), and are often great for really simple use cases as you don't have to be running anything besides your Python code directly, which serves up it's own HTTP goodness.<br /><br /><h4>Level 2</h4>Now, how to host these applications? First came shared hosting, such as most GoDaddy hosting and the like. These allow you limited use of CGI scripts (or maybe some of the newer replacements of CGI such as FastCGI, WSGI, etc..) but you don't have full control of the system.<br /><br />However, the CGIs are rather low level interfaces (making you handle everything yourself), so Google (and others like Microsoft and Heroku) started making *Platforms* on which you can build dynamic web applications more easily. Google App Engine is the most famous <a href="https://developers.google.com/appengine/">[2]</a> and <a href="https://developers.google.com/appengine/docs/python/overview">[3]</a>, and allows you to run small apps, written in python, for free! The only problem is, there are limitations on what python packages you can use (most common the problem is: No matplotlib and no numpy/scipy (because they have binary parts to them). But if that's not a problem then you should definitely look into Google App Engine (thats what my personal site runs on for example). They have a lot of great documentation you can read.<br /><br /><b>Update</b>: I recently noticed that the new Python 2.7 backend for Google App Engine has support for some limited libraries such as PIL (for image manipulation) and Numpy for fast numeric vector manipulation. This is a great addition to the service, but you will always want 'one more library', so please keep that in mind.<br /><h4>Level 3</h4>Now the final level of questioning is: what are you going to be doing with your code? The reason I ask, is that there has been an enormous movement lately to push everything from the server side to the client side. Meaning: rather than write all the code to run on the server, run it all in Javascript in order to run it directly in the users browser.<br /><br />This may sound strange: "Why would they do this?" you may ask and there are many wonderful reasons that I won't go into here. But to see the power of it, check out some of the Javascript demos available here: <a href="http://www.chromeexperiments.com/">http://www.chromeexperiments.com/</a> and realize that these are all being computed completely in the browser! For smaller examples, see: <a href="http://code.google.com/p/flot/">http://code.google.com/p/flot/</a> <a href="http://raphaeljs.com/">http://raphaeljs.com/</a> and <a href="http://code.google.com/apis/chart/interactive/docs/gallery.html">http://code.google.com/apis/chart/interactive/docs/gallery.html</a><br /><br />That way, you don't need any fancy hosting, you just serve 'static' javascript files, and then all the interaction occurs directly in the users browser.<br /><br />So it depends greatly on what you want to do.<br /></div>
</div>
<div class="css-full-comments-content js-full-comments-content">
<div class="css-full-comment js-full-comment">
  <div class="css-comment-user-link js-comment-user-link">
  <a href="http://www.blogger.com/profile/11645283731616997647">
  <div class="css-comment-name js-comment-name">
    EAG
  </div>
  </a>
  <div class="css-comment-date js-comment-date">
    2012-04-05T05:31:41.187Z
  </div>
  </div>
  <div class="css-comment-content js-comment-content">
    Thanks Jason again for this great post.
  </div>
  <br/>
</div>
</div>